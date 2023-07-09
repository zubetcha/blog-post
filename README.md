# 블로그 포스트 관리

### 1. TL;DR

- 마크다운 형식으로 포스트 작성
- 작성한 포스트를 S3에 업로드
- front matter 정보와 S3 url DB에 저장
- 기본 확장자 `.md*`

---


### 2. 업로드 방법

**포스트 1개 업로드**
```javascript
npm run upload:single <FILE_NAME> // 확장자 제외
```

**posts 폴더 하위에 있는 모든 포스트 업로드**
```
npm run upload:all
```

---

### 3. 환경변수
```
// .env
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_BUCKET_NAME=
S3_REGION=
DATABASE_URI=
DATABASE_NAME=
POST_AUTHOR=
```

---

### 4. Front Matter
```typescript
type FrontMatter = {
  title: string;  
  category: string;
  date: string;
  description: string;
  published: boolean;
  slug: string;
  tags: string[];
}
```

---

### 5. S3 Bucket 구조

bucket 구조는 `posts` 폴더 구조를 따릅니다.

```
// Root
posts
└── 2023
    ├── 01
    │   └── memoir-2022.md
    ├── 03
    │   └── husky.md
    └── 04
        └── typescript-never.md

```

```
// S3 bucket
posts
└── 2023
    ├── 01
    │   └── memoir-2022.md
    ├── 03
    │   └── husky.md
    └── 04
        └── typescript-never.md
```
