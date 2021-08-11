# Vue3 템플릿 with Webpack

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
