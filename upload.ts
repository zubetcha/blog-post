import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const s3 = new AWS.S3();
const uploadParams = { Bucket: process.env.S3_BUCKET_NAME, Key: '', Body: '' };

s3.listBuckets().promise().then((data) => {
  console.log('S3 : ', JSON.stringify(data, null, 2));
});
