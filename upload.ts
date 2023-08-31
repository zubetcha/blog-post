import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import { globSync } from 'glob';
import chalk from 'chalk';
import frontmatter from 'front-matter';
import yaml from 'yaml';
import mongoose from 'mongoose';

type FrontMatter = {
	title: string;
	category: string;
	date: string;
	description: string;
	published: boolean;
	slug: string;
	tags: string[];
};

dotenv.config();

AWS.config.update({
	accessKeyId: process.env.S3_ACCESS_KEY_ID,
	secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
	region: process.env.S3_REGION,
});

const uploadType = process.argv[2].split('=')[1];
const db = process.env.DATABASE_URI;
const s3 = new AWS.S3();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const PostSchema = new Schema({
	id: ObjectId,
	author: String,
	title: String,
	category: String,
	date: Date,
	updatedDate: {
		type: Date,
		default: Date.now,
	},
	description: String,
	published: Boolean,
	slug: String,
	tags: [String],
	url: String,
});

const Post = mongoose.model('Post', PostSchema);

const log = (message: string) => {
	console.log('');
	console.log(chalk.green(message));
	console.log('');
};

const uploadToS3 = async (filePath: string) => {
	const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
	const params: AWS.S3.PutObjectRequest = {
		Bucket: process.env.S3_BUCKET_NAME ?? '',
		Key: filePath,
		Body: file,
		ContentType: 'text/markdown',
	};

	try {
		await s3.putObject(params).promise();
		log('S3 Upload Success!');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}

	return { params, file };
};

const connectDB = async () => {
	if (!db) {
		process.exit(1);
	}

	try {
		await mongoose.connect(db, {
			dbName: process.env.DATABASE_NAME,
		});
		log('MongoDB Connected...');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const getPostData = ({ params, file }: Awaited<ReturnType<typeof uploadToS3>>) => {
	const { Bucket, Key } = params;
	const region = AWS.config.region;
	const objectUrl = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`;
	const content = frontmatter(file);
	const fm: FrontMatter = yaml.parse(content.frontmatter!);

	return {
		...fm,
		author: process.env.POST_AUTHOR,
		date: new Date(fm.date),
		url: objectUrl,
	};
};

const savePostData = async (data: ReturnType<typeof getPostData> & { updatedDate?: Date }) => {
	const targetPost = await Post.findOne({ slug: data.slug });

	if (targetPost) {
		try {
			await Post.updateOne({ id: targetPost.id }, data);
			log(`✨ Update Post: ${data.title}`);
		} catch (error) {
			console.log(error);
		}
	} else {
		const post = new Post(data);
		try {
			await post.save();
			log(`✨ Create Post: ${data.title}`);
		} catch (error) {
			console.log(error);
		}
	}
};

const upload = async () => {
	await connectDB();

	const fileName = process.argv[3];

	if (!fileName) {
		process.exit(1);
	}

	const filePath = globSync(`posts/**/${fileName}.md*`)[0];

	const { params, file } = await uploadToS3(filePath);
	const data = getPostData({ params, file });
	await savePostData(data);

	process.exit(1);
};

const uploadAll = async () => {
	await connectDB();

	const files = globSync(`posts/**/*.md*`);

	for (const filePath of files) {
		const { params, file } = await uploadToS3(filePath);
		const data = getPostData({ params, file });
		await savePostData({ ...data, updatedDate: new Date() });
	}

	process.exit(1);
};

if (uploadType === 'all') {
	uploadAll();
} else if (uploadType === 'single') {
	upload();
} else {
	process.exit(1);
}
