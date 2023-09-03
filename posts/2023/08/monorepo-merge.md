---
title: '[모노레포] 기존 프로젝트 안전하게 병합하기'
category: monorepo
date: 2023-08-03
description: 모노레포를 구축하면서 겪은 시행착오 시리즈 1
published: false
slug: how-to-merge-into-monorepo
tags:
  - 모노레포
---

# 들어가며

회사에 들어온지도 벌써 반년이라는 시간이 지났다.

반년이라는 시간 동안 기존에 있던 프로젝트의 유지보수 업무에 투입되기도 했었지만 가장 메인으로 맡았던 업무는 `모노레포` 구축이었다. 셀 리더님은 나의 이력서에 있던 전 회사에서의 모노레포 구축 경험을 보고 채용하기로 했다고 말씀하신 적도 있었다. 그래서 입사하자마자 가장 먼저 한 일이 모노레포 구축에 사용할 task 관리 툴과 패키지 관리 툴 기술 조사였다.

하지만 전 회사에서 모노레포를 구축할 때와 현재 회사에서 모노레포를 구축하는 상황에는 큰 차이가 있었다. 전 회사에서는 모노레포 구조를 먼저 구축한 후 새로운 프로젝트를 생성했었다면, 현재 회사는 이미 만들어져 있고 운영되고 있는 기존의 프로젝트들을 모노레포에 병합해야 한다는 점이었다.

<br/>

# 👷🏻‍♀️ 안전하게

여기서 말하는 `'안전하게'`는 1) 기존의 git 히스토리를 유지하고, 2) 멀티레포로 되어 있던 각 프로젝트의 파일들이 충돌하거나 꼬이지 않도록 을 의미한다.

병합할 프로젝트가 없을 때에는 위의 두 가지 사항을 전혀 고려할 필요가 없다. 히스토리 자체가 없고, 각 폴더 안의 알맞은 위치에 새로운 프로젝트를 생성해주면 그만이기 때문이다. 하지만 기존에 멀티레포로 흩어져 있던 여러 프로젝트들을 합치는 과정에서는 반드시 고려해야 하는 사항들이다.

## Ctrl C + Ctrl V ?

우선 **2) 충돌하거나 꼬이지 않도록** 하는 건 단순히 프로젝트 폴더를 원하는 위치에 두면 가능하다.

모노레포로 사용할 임시 폴더를 생성한 후 원하는 위치에 그대로 옮기고,

<br/>

<p align="center">
  <img src="https://github.com/zubetcha/dev-book-cheat-sheet/assets/91620721/183fa763-452c-4b3f-8ca9-e58168d85b70" width="60%" alt="" />
</p>

<br/>

에디터에서 확인해보면 내가 커밋한 이력들이 잘 보인다. 과연 잘 옮겨졌을까?

<p align="center">
  <img src="https://github.com/zubetcha/monorepo-ez-script/assets/91620721/476278f6-3c2b-44da-b4a2-730cbecb7810" width="80%" alt="" />
</p>

<br/>

## git 로그 확인

git에서의 로그(혹은 히스토리)는 [git log](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%BB%A4%EB%B0%8B-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A1%B0%ED%9A%8C%ED%95%98%EA%B8%B0) 또는 [git reflog](https://git-scm.com/docs/git-reflog) 명령어를 통해 확인이 가능하다. `git log`는 일반적으로 커밋 히스토리를 확인하기 위해 사용하는 명령어이며, `git reflog`는 git reset, git rebase 명령어로 삭제된 커밋을 포함하여 모든 커밋 히스토리를 확인할 수 있는 명령어이다. 루트에서 git reflog 명령어를 실행해보자.

<br/>

```shell
// monorepo-merge-sample 루트

$ git reflog

fatal: your current branch 'main' does not have any commits yet
```

분명 위에서는 에디터에서 커밋 내용을 확인할 수 있었는데, 커밋 히스토리를 확인해보면 현재 브랜치에 어떠한 커밋도 없다고 나온다. 명령어 실행 위치를 각 어플리케이션 폴더로 옮긴 후 다시 실행해보자.

```shell
// apps/monorepo-ez-script

$ git reflog

0ac65e0 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: commit: chore: edit dev script
af093da HEAD@{1}: clone: from github.com:zubetcha/monorepo-ez-script.git
```

```shell
// apps/zulog

$ git reflog

db19f87 (HEAD -> develop, origin/develop) HEAD@{0}: commit: readme 수정
fa0eebc HEAD@{1}: commit: 이력서 수정
b2a234e HEAD@{2}: commit: 이력서 수정
fab1784 HEAD@{3}: commit: serverless function try-catch 추가
5a15e7d HEAD@{4}: commit: serverless function 테스트
.
.
.
```

위치를 옮긴 후 확인해보면 각 레포지토리마다의 커밋 히스토리들이 잘 확인된다. 즉, 물리적으로 멀티레포를 모노레포 안으로 옮기는 건 단순히 멀티레포의 위치를 변경하는 것뿐이며 모노레포에 병합이 되는 건 아닌 것이다.

<br/>

# git merge

몇 차례 `병합`이라는 단어를 썼는데, git에서 관리되는 히스토리를 합치는 올바른 방법은 `git merge`를 사용하는 것이다. 
