# ChattingApp

# Description of files
## 회원가입 파일들(js file)
- StartScreen <회원가입 - 첫 시작 화면>
- Authentication <회원가입 - 전화번호 입력 페이지>
- Verification <회원가입 - 인증번호 입력 페이지>
- SetNickName <회원가입 - 닉네임 설정 페이지>

## 메인화면 파일들(js file)
- home <메인화면 - Profile 및 Friends List 페이지 출력>


# Front
## 2023-04-16 react CRA PWA 프로젝트로 변경 (정운만)
1. 추가된 디렉토리
- api => api 관련 js 모음 
- components => react Components js 모음
- components/css => components 관련 css 모음
- images => 잡다한 이미지 넣기
- images/logo => logo 이미지 모음 (규격에 맞는)


## 2023-04-17 1차 Commit 회원 인증 단계 (정운만)
1. 추가된 디렉토리
- store => redux 쓸 때 store 모아둘 디렉토리
- images/buttons => >나< 처럼 버튼 역할을 하는 img 모음 디렉토리

2. 추가된 js파일
- Authentication.js => 회원번호 입력하는 파일 (아직 보완 필요)
- StartScreen.js => 첫화면

3. 추가된 css 파일
- components/css/ 파일들은 js 파일명과 같음 매칭
- main.css => 최상위 css파일로 만들려 했으나 굳이...? 나중에 확인해보도록 하겠음.
- styled-components 사용 고려 중

## 2023-04-18 Commit 회원 인증 단계 (UI, 기능 구현 완료) (정운만)

1. 나중에 기능 개선할 것들
- 국가코드 다양화
- 번호 입력 후 인증 번호 입력 페이지로 넘어갈 때 번호 입력했는지 검증 => URL GET방식으로 접속 방지
- redux toolkit으로 state 저장

2. 커밋한 파일
- reactfront\package-lock.json
- reactfront\package.json
- reactfront\src\index.js
- reactfront\src\routes\css\elements\alerts.css
- reactfront\src\routes\css\Verification.css
- reactfront\src\routes\Verification.js
- reactfront\src\store.js
- reactfront\src\store\store.js
- reactfront\src\store\timeSlice.js

3. 다음으로 할 것.
- Authentication.js, Verification.js ajax 도입
- ChatList 화면 구성


## 2023-04-20 Clean Code 적용 및 CSS transition 추가

1. 커밋한 파일
- reactfront\src\routes\Authentication.js
- reactfront\src\routes\css\Authentication.css
- reactfront\src\routes\css\elements\buttons.css
- reactfront\src\routes\css\Verification.css
- reactfront\src\routes\Verification.js

2. transition 추가 및 Clean Code 적용

3. Bug fixed
Authentication 페이지에서 11자리를 입력받고
한번에 모두 입력된 번호를 지워도 Coutinue 버튼 활성화 되던 Bug fixed


## 2023-04-21 SetNickName 화면 생성
1. 커밋한 파일
- reactfront\src\routes\css\components\register.css
- reactfront\src\routes\css\Verification.css
- reactfront\src\routes\css\SetNickName.css
- reactfront\src\routes\Verification.js
- reactfront\src\routes\SetNickName.js
- reactfront\src\index.css
- reactfront\src\App.js

2. SetNickName 화면 생성 O, 기능구현 X

3. 변경된 점
- Verification 과 SetNickName.js 화면에서 공통된 부분 register.css 로 Export
- 추후 Authentication.js 화면도 적용해서 컴포넌트화 완성합니다.


## 2023-04-22 SetNickName 화면 기능구현

1. 커밋한 파일
- reactfront\src\routes\css\SetNickName.css
- reactfront\src\routes\SetNickName.js
- reactfront\src\store.js
- reactfront\src\store\userSlice.js

2. SetNickName 화면 생성 O, 기능구현 O


## 2023-04-25 userSlice - PhoneNumber 추가, Home 화면 구현

1. 커밋한 파일
- reactfront\src\App.js
- reactfront\src\index.css
- reactfront\src\routes\Authentication.js
- reactfront\src\routes\css\Authentication.css
- reactfront\src\routes\css\components\modals.css
- reactfront\src\routes\css\elements\margins.css
- reactfront\src\routes\css\elements\modals.css
- reactfront\src\routes\css\Verification.css
- reactfront\src\routes\Home.js
- reactfront\src\routes\SetNickName.js
- reactfront\src\routes\Verification.js
- reactfront\src\store.js
- reactfront\src\store\userSlice.js

2. userSlice. 변경
- userNickName => userInfo
- userInfo Object=> phoneNumber 값 추가

3. css 변경
- modal.css elements => Component로 이동
- modal 요소 추가


## 2023-04-26 - home 화면 profile 처리중 public 폴더로 img폴더 옮김

1. 커밋한 파일
- public\images\arrows\arrow-right.png
- public\images\basic_profile_imgs\basic-profile-1.png
- public\images\icons\magnifier.png
- public\images\logo\LINE_logo1.png
- src\images\buttons\arrow-right.png
- src\images\logo\LINE_logo1.png
- src\index.css
- src\routes\Authentication.js
- src\routes\css\components\mainScreen.css
- src\routes\css\elements\margins.css
- src\routes\css\elements\paddings.css
- src\routes\css\Home.css
- src\routes\Home.js
- src\store\userSlice.js

2. public 폴더로 옮긴 후 error 발생 해결중

3. (store)userSlice.js 변경점
상태메세지와 프로필 사진 경로, 배경 사진 경로 추가했습니다

4. Home 화면 profile 컴포넌트 css 적용 X


## Completed Front (완료 일자)
- AuthenticationModal.js (2023-04-18)
- 분기 지어서 화면 뿌리기 (2023-04-18)
- css 분리하고, 동적 화면 만들기 (2023-04-18)
- 회원가입 및 로그인 인증 화면 (2023-04-18)
- setNickName 화면 (2023-04-22)




## 2023-04-28 - home 화면 footer 작업 1단계
1. 커밋한 파일들
- src\store\userSlice.js
- src\store\footerSlice.js
- src\store.js
- src\routes\StartScreen.js
- src\routes\Home.js
- src\routes\Footer.js
- src\routes\css\components\profiles.css
- src\routes\css\components\footers.css
- src\routes\Chats.js
- src\routes\Authentication.js
- src\images\logo\LINE_logo1.png
- src\images\icons\setting.png
- src\images\icons\setting-selected.png
- src\images\icons\magnifier.png
- src\images\icons\home.png
- src\images\icons\home-selected.png
- src\images\icons\chat.png
- src\images\icons\chat-selected.png
- src\images\basic_profile_imgs\basic-profile-1.png
- src\images\arrows\arrow-right.png
- src\App.js
- public\images\logo\LINE_logo1.png
- public\images\icons\magnifier.png
- public\images\basic_profile_imgs\basic-profile-1.png
- public\images\arrows\arrow-right.png

2. public/images 폴더 다시 src로 옮김


## 2023-04-29 - home 화면 Profile Component Updating!
1. 커밋한 파일
- src\index.css
- src\routes\Authentication.js
- src\routes\Chats.js
- src\routes\css\components\headers.css
- src\routes\css\components\mainScreen.css
- src\routes\css\components\profiles.css
- src\routes\css\elements\icons.css
- src\routes\css\elements\paddings.css
- src\routes\Home.js
- src\routes\routes-components\Header.js
- src\store.js
- src\store\headerSlice.js

2. Profile => 종류 : 내꺼, 친구들꺼, 채팅 프로필! 해결하기

3. Header Store로 화면 분기별 한 파일로 해결 가능하게 수정.


## 2023-05-21 - home 화면 정적코딩까지 완성, 데이터 있을 때 동적으로 움직이게 해야함.
1. 커밋한 파일
- src\store\crewaAISlice.js
- src\store.js
- src\routes\Home.js
- src\routes\css\Home.css
- src\routes\css\components\profiles.css
- src\index.css
- src\images\arrows\roll-up.png
- src\images\arrows\roll-down.png

2. 즐겨찾기 슬라이드 애니메이션 추가하기.
3. 프로필 클릭 시 프로필 수정 Modal창이나, 프로필 수정 화면으로 전환
4. 임의 데이터 값 저장해서 실험하기.

# 앞으로 해야할 것들
1. Profile Image 업로드 url 해결하기 (지금은 하드코딩 되어 있음 안그러면 에러뜸)
2. Footer Home , Chat, Setting 알림 표시 하기
3. Profile Component 완성