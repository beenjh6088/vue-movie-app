# Vue3 템플릿 with Webpack

## 26. 영화 상세 페이지 정리



## 25. Loader
- Loader.vue 만들기
  1. props 로 받은 데이터를 통해서 클래스 만들기
- MovieList.vue 랑 Movie.vue 에 Loader.vue 임포트하기


## 24. 스켈레톤 UI
- Movie.vue 에 mark-up, css 만들기


## 23. 단일 영화 상세 정보 가져오기
- movie.js에 영화 상세정보 조회 메서드 생성
  1. loading 중이면 종료
  2. _fetchMovie 사용해서 영화정보 조회
  3. _fetchMovie 의 결과값에 따라 영화 상세정보를 담은 객체를 상황별 초기화
- _fetchMovie 메서드 수정
  1. payload 에서 받은 id 값의 유무로 삼항연산자써서 url 변경하기
- Movie.vue 로드될 때 searchMovieWithId 실행
  1. store 에 있는 searchMovieWithId 호출
  2. 호출시 id 값 인수로 보내기
- route/index.js 에서 path에 파라미터 지정하기


## 22. Footer
- Logo.vue 컴포넌트랑 a태그 넣기


## 21. 에러 메시지 출력과 로딩 애니메이션
- v-if="message"
- loading animation
  1. 부트스트랩 홈페이지 접속
  2. 상단 메뉴 Docs 클릭
  4. MovieList.vue 에 해당 코드 복붙
  3. 좌측 내비 Layout > Components > Spinners 클릭


## 20. Container 너비 사용자 지정
- Container 너비 사용자 지정
  1. 부트스트랩 홈페이지 접속
  2. 상단 메뉴 Docs 클릭
  3. 좌측 내비 Layout > Containers 클릭
  4. main.scss 에 Sass 부분 코드 복붙
  5. inner 클래스로 MovieItem 컨테이너 CSS 적용


## 19. 영화 아이템 - 텍스트 말줄임 표시와 배경 흐림 처리
- 생략부분 표시
  1. white-space : nowrap
  2. overflow : hidden
  3. text-overflow : ellipsis
- 블러 현상
  1. backdrop-filter : blur(10px) grayscale();


## 18. 영화 아이템 - 기본 출력
- item 출력
  1. div 요소에 backgroundImage로 Poster넣기
  2. info 정보 넣기

## 17. 영화 검색 코드 리팩토링
- movie.js 의 actions 부분 영화조회 부분 모듈화(_fetchMovie)
- _fetchMovie 에서 axios.get() 메서드 에러처리 및 메시지 출력 기능


## 16. 비동기 - API 비동기 처리 연습
- 테스트를 위해 axios cdn으로 받기
- OMDB_API_KEY에 유효값/비유효값을 넣어서 async-await, non-async-awit별로 예외처리하기


## 15. 비동기 - 예외 처리(then, catch, finally)
- Promise.prototype.then()
- Promise.prototype.catch()
- Promise.prototype.finally()
- Promise 객체는 async await를 사용할 수 있음
- async await 를 사용하지 못 한다면 then - catch - finally 를 사용할 수 있음


## 14. 비동기 - 콜백과 프로미스 객체의 이해
- 콜백과 프로미스를 통해서 프로그램의 실행 순서를 보장할 수 있음.
- 콜백함수의 매개변수는 콜백함수가 데이터로 쓰이는 함수에서 정의해줌
- Pormise 객체에서 매개 변수로 받는 resolve는 Promise의 로직이 끝난 뒤 실행됨. resolve에 인수로 전달하는 데이터는 Promise 객체가 리턴된 변수에 저장됨


## 13. 영화 목록에서 ID 중복 제거
- lodash 사용법
  1. lodash 사이트 접속
  2. 우측 상단에 Documentation 클릭
  3. 좌측 상단에 uniq 검색
  4. 좌측 내비게이션에서 uniqBy 클릭
- npm i lodash
- actions 영역에 movies : _uniqBy(Search, 'imdbID')


## 12. 영화 검색 추가 요청
- movie.js 에 Search.vue 의 number 에 따른 추가 요청
7e97c3c3f720


## 11. 영화 검색
- actions 영역에서 정의한 메서드에는 context, payload라는 매개변수를 제공한다
  1. context는 store의 속성에 접근할 수 있다. 예를 들면 context.state
  2. payload는 payload를 매개변수로 받는 메서드가 실제 쓰이는 부분에서 넘기는 특정 데이터. 예를 들면 searchMovies({})
- actions 영역에 searchMovies 메서드 작성
  1. 다른 컴포넌트로부터 받은 데이터를 state 영역의 데이터와 매핑시키기. 예를 들면 context.commit('updateState', {movies: Search})
- mutations 영역에 updateState 메서드 만들기
- Search.vue 의 apply 메서드에 스토어 연결시키기. this.$store.dispatch('movie/searchMovies', {title: this.title, ...})
  1. Store의 Mutations를 실행할 땐 .commit() 사용
  2. Store의 Actions를 실행할 땐 .dispatch() 사용
- MovieList.vue 의 computed 영역에 Store에 저장된 movies 값을 보관하기
- MovieList.vue 의 template 영역에 MovieItem 컴포넌트에 movie라는 속성으로 computed 의 movies 값을 v-for를 통해 넘기기
- MovieItem.vue 에서 MovieList.vue로부터 받은 movie값을 연결하기. props


## 10. Vuex(Store) 구성
- npm i vuex@next
- src 폴더에 store 폴더 생성
- src/store 폴더에 index.js 파일 생성
- createStore로 store 객체 생성후 modules로 공유할 데이터를 모듈화하기
- main.js에서 store 연결시키기
- store폴더에 about.js, movie.js 파일 생성
- movie.js 에 store 관련 속성 나열
- store/index.js 에 movie.js 임포트시키기


## 09. Vuex(Store) 개요
- src/components 에 MovieList.vue, MovieItem.vue 만들기
- Home.vue에 MovieList.vue 컴포넌트 추가
- Home.vue에 있는 Search와 MovieList의 관계는 형제관계인데
서로간의 데이터 공유를 위해서 Vuex(Store) 가 필요함


## 08. Search - 버튼
- Search.vue 하단에 Search 버튼 만들기
- 버튼 css 중 flex-shrink = 0 속성 주목
- npm i axios
- Search.vue 에 axios import하기
- apply 메서드에 axios.get('https://www.omdbapi.com/?apikey=[yourkey]&')


## 07. Search - 필터
- /src/component 에 Search.vue 생성
- Search.vue 에 입력 폼 생성
- class="form-control"
- class="form-select"
- 입력 컴포넌트와 data 바인딩
- Home.vue에 Search.vue 임포트


## 06. Headline
- OMDbAPI 홈페이지에 헤드라인 복사
- src/components 에 Headline.vue 생성 후 헤드라인 붙여넣기
- Home.vue 에 내용을 초기화한 후 Headline 컴포넌트를 넣는다.
- Home.vue 에 있는 Headline은 브라우저 좌측으로 붙어서 나오는 걸 확인할 수 있는데 이 문제를 해결하기 위해 bootstrap container를 사용한다.
  1. bootstrap >> Docs >> Layout >> Containers 참조
  2. 수평 중앙정렬 적요을 위한 태그에 container 클래스를 넣는다.


## 05. Header - Logo 및 Google Fonts
- google fonts 접속
- roboto 검색
  1. regular 400, bold 700 선택
- oswald 검색
  1. medium 500 선택
- 우측 네비에서 \<link> 선택 후 태그 복사
- index.html에 붙여넣기
- google font 사이트로 돌아와서 roboto관련 css 코드를 복사하여 index.html style body 태그에 적용하기
- src/components 에 Logo.vue 파일 생성
- .logo 클래스에 oswald css코드 붙여넣기


## 04. Header - Nav
- src/component에 Header.vue 생성
- \<router-link>의 active-class 역할


## 03. Bootstrap 구성
- $ npm i bootstrap@next
- src/scss/main.scss에서 bootstrap 패키지 import
- main.scss와 App.vue를 연결
- scss Customizing(bootstrap 사이트 참조)

## Versions

- [Default](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/master)<br>
- [+ESLint](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/eslint)<br>
- [+ESLint+Vuex](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/vuex)<br>
- [+ESLint+Vuex+VueRouter](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/vue-router)<br>

## Installation

```bash
# Default.
$ npx degit ParkYoungWoong/vue3-webpack-template DIRECTORY_NAME

# With ESLint, Add `#eslint`.
$ npx degit ParkYoungWoong/vue3-webpack-template#eslint DIRECTORY_NAME

# With ESLint + Vuex, Add `#vuex`.
$ npx degit ParkYoungWoong/vue3-webpack-template#vuex DIRECTORY_NAME

# With ESLint + Vuex + VueRouter, Add `#vue-router`.
$ npx degit ParkYoungWoong/vue3-webpack-template#vue-router DIRECTORY_NAME

# Start!
$ cd DIRECTORY_NAME
$ npm i
$ npm run dev
```

## Specs

- Vue3
- Webpack
- SCSS
- Babel
- PostCSS
- Autoprefixer
- ESLint __(+ESLint)__
- Vuex __(+Vuex)__
- Vue Router __(+VueRouter)__

## Packages

__webpack__: 모듈(패키지) 번들러의 핵심 패키지<br>
__webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
__webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)<br>

__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

__sass-loader__: SCSS(Sass) 파일을 로드<br>
__postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
__css-loader__: CSS 파일을 로드<br>
__style-loader__: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__babel-loader__: JS 파일을 로드<br>
__vue-loader__: Vue 파일을 로드<br>
__vue-style-loader__: Vue 파일의 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__file-loader__: 지정된 파일(이미지)을 로드<br>

__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
__@babel/preset-env__: Babel 지원 스펙을 지정<br>
__@babel/plugin-transform-runtime__: Async/Await 문법 지원<br>

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br>

__vue__: Vue.js 프레임워크<br>
__@vue/compiler-sfc__: .vue 파일(SFC, 3버전)을 해석<br>

__eslint__: 정적 코드 분석 도구 __(+ESLint)__<br>
__eslint-plugin-vue__: Vue.js 코드 분석 __(+ESLint)__<br>
__babel-eslint__: ES6 이상의 코드(Babel)를 분석 __(+ESLint)__<br>

__vuex__: 중앙 집중식 저장소 __(+Vuex)__<br>
__vue-router__: 라우터 __(+VueRouter)__<br>

## 주의사항!

- `npm i vue@next`로 설치(3버전)
- `npm i vue-loader@next`로 설치(3버전)
- `npm i -D webpack-dev-server@next`로 설치(webpack-cli 버전(@4^)과 일치)!<br>
- `package.json` 옵션으로 `browserslist` 추가!<br>
- `.postcssrc.js` 생성(PostCSS 구성 옵션)!<br>
- `.babelrc.js` 생성(Babel 구성 옵션)!<br>
- `.eslintrc.js` 생성(ESLint 구성 옵션)! __(+ESLint)__<br>

## ESLint Auto fix on save for VSCode

- 모든 명령 표시(Windows: `Ctrl`+`Shift`+`P` / macOS: `Cmd`+`Shift`+`P`)
- 모든 명령 표시에서 `settings` 검색
- `Preferences: Open Settings (JSON)` 선택
- 오픈된 `settings.json`파일에서 아래 코드 추가 및 저장

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
