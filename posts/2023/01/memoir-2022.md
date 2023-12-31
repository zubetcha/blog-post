---

title: 2022 회고록
category: Memoir
date: 2023-01-04
description: 1년차 개발자의 첫 회고록! 
published: true
slug: memoir-of-2022
tags: 
  - memoir
  - 2022

---

# 첫 번째 회고록

2022년은 나에게 있어 정말정말 뜻 깊은 해였다. 부트캠프를 할 당시에 WIL 처럼 일주일 회고록을 간간히 작성하긴 했었는데 벌써 수료한 지도 곧 1년이 되어 가니 꽤나 오랜만의 회고록이다. 시간이 참 빠르게 흘러간다. 소중했던 2022년을 잊지 않고, 많은 노력과 좋은 기억들을 발판 삼아 2023년도 잘 헤쳐나갈 수 있도록 회고를 해보려 한다.

# 2022 👋🏻

2022년에는 개인적으로도, 또 외부적으로도 많은 일들이 있었다. 하나씩 되짚어보자!

## 고용보험에 가입한 개발자가 되다.

2월에 부트캠프를 수료한 후 운이 좋게도 한 달 정도 뒤에 개발자로 취업할 수 있었다. 내가 수료한 부트캠프는 99일 진행하는 커리큘럼으로 다른 부트캠프에 비해 기간 자체는 짧은 편이지만 내 스스로 생각하기에도 두번 다시는 이렇게는 못 할 것 같다는 생각이 들 정도로 몰입해서 공부했었다. 같이 공부했던 동료들로부터 종종 쌍둥이가 아니냐는 소리를 들을 정도로 잠을 줄이고, 밥 먹는 시간도 줄여가며 집중했었던 기억이 난다. 그 덕분인지 감사하게도 몇 군데의 회사에서 면접을 볼 기회가 생겼고, 최종적으로 현재 다니고 있는 회사에 입사했다. 이 때 다시 한번 운은 스스로 만드는 것이라는 것을 마음에 새기게 되었다.

현재는 회사에 들어온 지 약 10개월이 되어 가고 있다. 10개월, 짧다면 짧다고도 할 수 있는 시간이지만 회사에서 정말 많은 것들을 경험하고 배울 수 있었고, 유쾌하고 열정적인 동료분들과 즐겁게 일 할 수 있었다.

## 디자인 시스템

입사할 당시 프론트엔드의 프로젝트는 막 제이쿼리에서 Nextjs로 바뀌어 가던 참이었다. 그래서 부트캠프에서 접하지 못했던 새로운 기술들을 왕왕 배울 수 있었는데, 그중에서도 가장 기억에 남는 건 디자인 시스템을 만든 일이었다. 개발에 있어서 `개발자 경험`이라는 새로운 관점을 가장 가까이서 느낄 수 있게 된 계기였다.

### 디자인 시스템의 유저

일반적으로 서비스의 유저는 고객 집단의 성격이 정해져 있다. B2C 서비스라면 개인이 고객일 것이고, B2B 서비스라면 기업이 고객일 것이다. 그렇다면 디자인 시스템의 고객은 누구일까? 바로 나와 함께 무엇인가를 만드는 동료 개발자이다. 내가 만든 컴포넌트를 사용하는 유저가 되는 것이다.

그래서 디자인 시스템을 비롯한 여러 컴포넌트뿐만 아니라 함께 사용하는 무언가를 만들 때면 시간이 지날수록 고민이 깊어진다.

- 사용하기 불편하지는 않은지?
- 인터페이스를 이해하고 알기 위해 여기저기의 파일들을 들락날락 해야 하고 사용하는 방법을 익히는 데 너무 많은 리소스가 들지는 않는지?
- 이름이 헷갈리지는 않는지?
- 전달한 props가 컴포넌트 내부에서 어떻게 사용되는지 쉽게 유추할 수 있는지? 등등..

처음 입사했을 때 온보딩 과제로 공통으로 사용할 TextField 컴포넌트를 만드는 임무를 맡았다. 프로젝트 초반의 TextField 컴포넌트의 역할은 비교적 간단했었고, 컴포넌트에 대해서 단순히 화면에 보여주는 요소의 작은 단위 정도로만 여겼기 때문에 큰 고민 없이 개발하여 나름 잘 사용했었는데, 시간이 지나고 TextField 컴포넌트의 역할이 많아지고, 요구사항이 다양해지면서 컴포넌트가 거대해지는 경험을 했었다.

거대해지기만 했다면 다행이지만, 그만큼 인터페이스가 복잡해지고, 내부 코드는 지저분해지면서 빠르게 이해하고 사용하기 어려운 구조가 됐었다.

### 설계의 중요성

위에서 얘기한 TextField 외에도 디자인 시스템의 여러 컴포넌트들을 만들면서 중요하게 생각하게 된 것들과 적용하고 도움이 된 것들이 몇 가지 있다. 그리고 이 모든 것들은 결국 설계라는 관점으로 귀결된다는 생각이 들었다.

**네이밍의 중요성**

네이밍은 비단 컴포넌트에만 국한되는 건 아니라고 생각하지만 컴포넌트에서 또한 무척이나 중요하다. 어떤 이름은 이름만 봐도 어디에, 어떻게 쓰일지 바로 머릿속으로 떠오르지만, 어떤 이름은 직접 하나하나 살펴봐야 그제서야 쓰임새를 알 수 있는 것들이 있다.

**Compound component**

컴포넌트를 만들다 보면 이미 만들어져 있는 컴포넌트에 추가적인 역할과 UI가 생기거나 이미 개발되어 있는 컴포넌트를 래핑해서 사용해야 하는 경우가 있다. 후자의 경우 전체 컴포넌트가 필요한 게 아닌, 그 중 일부만 필요한 경우도 있다. 하나의 컴포넌트 파일이 비대해지면, 위의 모든 경우에 대응하기 어려워진다. 위와 같은 여러 상황에 유연하게 대응할 수 있도록 컴포넌트를 만들 때 Compound 패턴의 도움을 많이 받았다.

**Render props**

Render props도 컴포넌트를 만들면서 들었던 props의 필요성에 대한 고민들을 해소시켜 주었다.

## 커뮤니케이션과 설득

개발자가 되기 전의 사회 생활에서도 이미 느낀 거지만, 모든 직무에는 커뮤니케이션 스킬 역량이 필수라고 생각한다. 그와 더불어 회사에서의 일은 설득의 연속이다.

그리고 개발자로서의 짧디 짧은 경험상, 개발 직무에서는 특히나 커뮤니케이션과 설득의 스킬이 정말 중요하다는 생각이 들었다. 이유는 말하지 않아도 알 것이라 생각하기에, 내가 다른 사람과 커뮤니케이션 할 때 갖추려고 노력하는 몇 가지만 나열해보자면

**배려는 가볍게**
매순간 배려는 필요하지만, 상대방이 부담스럽지 않을 정도로만!

**친절함을 잃지 않도록**
친절함이 무슨 상관인가 하는 사람들도 있겠지만, 개인적으로 대인 관계에서 친절함은 필수라고 생각한다.

**용기**
이건 사람마다 다르겠지만, 나는 전부터 종종 이 상황에 이걸 말해도 되나? 타이밍이 너무 안 좋나? 등등의 생각으로 말하고 싶은 걸 주저하게 될 때가 있었다. 사람 성격이라 어쩔 수 없지만..이럴 때는 그냥 하고 싶은 말은 확! 말하고, '말하고 나니 별 거 없구나~'하는 경험을 여러번 하면 나아진다.

**유머와 위트**
어렸을 때부터 진지하고 진중하다는 얘기를 많이 들었던 터라 유머와는 거리가 꽤~나 먼 사람이지만, 그래도 대화하면서 분위기를 너무 무겁지 않게 만들거나, 혹은 이미 차가워져버린 분위기를 조금은 훈훈하게 만드는 데에는 유머와 위트만 한 게 없다고 생각한다.

## 항해99 멘토링

6월부터 내가 수료했던 부트캠프의 기술(?!)매니저로 활동해왔다. 현재 하고 있는 기수까지 합하면 5번이나 되는데, 여러모로 도움이 많이 돼서 지금까지 계속 해오고 있다.

나도 아직 알아야 할 게 많고 공부해야 할 것 투성이지만, 종종 메일과 디엠으로 감사했다는 연락을 받을 때마다 지금까지는 느끼지 못했던 새로운 종류의 뿌듯함과 성취감을 느끼곤 한다.

## 이직

곧 이직을 한다.

개발자로서의 첫 회사에서 적어도 2년은 있고 싶었지만, 여러가지 이유로 가을 즈음 이직을 결심하게 되었고, 거처가 결정되어 1월 말에 퇴사를 하게 되었다. 좋은 동료들, 좋은 팀을 만나 많이 배우고 성장할 수 있었지만 시간이 지날수록 도메인과 유저에 대한 갈증이 커져 더 늦기 전에 이직을 해야겠다는 생각을 했다.

실질적으로 이직을 준비한 기간은 2개월 정도인데, 회사를 다니면서 멘토링까지 같이 병행하려고 하니 체력적으로도, 정신적으로도 정말 힘들었다..🥹 다행이 재밌어 보이는 도메인과 훌륭한 분들이 계신 회사로 합류하게 되었는데, 개발자로서 첫 이직을 하면서 느꼈던 점들이 있다.

**이력서 자주 업데이트하기**

회사에서 내가 진행하고 기여했던 것들은 그때 그때 이력서에 작성하는 게 좋다. 시간이 지나면 잘 기억이 나지 않고, 문서로 작성했다 하더라도 나중 가서 찾고 다시 정리하기가 쉽지 않다.

**절실하지 않을 때부터 지원하기**

이건 전에 트위터에서 본 건데, 이직를 준비하면서 정말 많이 공감했다. 반드시 이직을 해야만 하는 상황에서 준비를 하면 절실한 마음때문에 판단력이 흐려질 수 있다. 절실하지 않을 때부터 준비하면 객관적으로 상황을 판단할 수 있다.

**강점을 살려서 전략적으로!**

나는 알고리즘에는 약하고 상대적으로 구현에는 알고리즘에 비해 강한 편이다. 그리고 다행이 프론트엔드는 구현 문제를 요구하는 곳이 많아졌다. 그래서 지원하는 회사가 과제 전형인지, 코테 전형인지 확인하고 코테 전형인 곳 중에서도 구현 코테인 곳들 위주로 지원했다. 이렇게 하면 확실히 면접 기회를 얻을 타율이 높아진다.

# 2023 👊🏻

## 체력 & 지구력 기르기

<p align="center"><img src="https://user-images.githubusercontent.com/91620721/216769618-22455271-da71-427c-a3b8-770fda3e91b8.png" width="70%" /></p>

부트캠프에서 잃어버린 체력이 아직도 돌아오지 않고 있다 🥲. 바쁘다는 핑계로 몸을 너무 방치해 둔 것 같다. 슬슬 오래 앉아 있으면 허리도 아프고 어깨도 결려서 곧 업무에도 지장을 줄 것 같아 올해 초에 꼭 다시 운동을 시작해야겠다. 개발은 코어에서 온다!

## 책 6권 이상 읽기

22년에는 정말..정말 책을 읽지 않았다! 나는 평소에는 책을 전혀 읽지 않고 힘들 때에만 책을 찾는데, 작년에는 좋은 건지, 좋지 않은 건지 모르겠지만 책을 찾을 만큼 크게 힘든 일이 없었다. 올해에는 의식해서 책을 읽는 습관을 들여야겠다. 목표는 개발 서적을 포함해서..1년에 6권을 읽는 거다 👼🏻.

## 사이드 프로젝트 런칭

작년에 흐지부지됐던 사이드 프로젝트의 서비스를 바꿔서 22년 말부터 다시 기획을 시작했다. 백엔드가 없어 직접 다 만들어야 해서 공부할 게 산더미지만 새로운 걸 배울 수 있는 기회이기에 설레인다. 프론트엔드도 챌린지가 많아서 쉽지 않겠지만, 우선 상반기 안에 마치는 게 목표다!
