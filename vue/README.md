# 강의에서 다루는 내용

1. 뷰 CLI를 이용한 프로젝트 구성 방법
2. 컴포넌트 기반 설계 방법
3. 컴포넌트 구조화 및 컴포넌트 통신 방법
4. ES6를 이용한 효율적이고 간결한 뷰 코딩 방법
5. Vuex를 이용한 상태 관리의 이해 및 적용 방법

## Vue-cli 설치 방법
npm install -g @vue/cli

## Vue3
vue create로 프로젝트 생성이 가능하다.
vue init webpack-simple vue-todo
=> 초기 세팅이 가능하다.

## favicon 생성하는 방법
favicon & app generator에 이미지 넣고 html에 경로잡아주기

## Font Awesome 적용하기
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />`

## 구글 폰트 잡기
`<link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Ubuntu">`

## VUE
- v-model 이란
`<input> 태그에서 입력된 text가 동적으로 vue에 매핑하는 역할.`

- v-for
`v-bind:key 속성을 이용해서 key값을 기준으로 HTML에 for문 생성`
`v-for에서는 index를 지원한다. `

- v-bind
`v-bind는 HTML 태그에 속성을 동적으로 부여 가능하게 한다.`
## localStorage
- localstorage를 이용해서 컴포넌트 간에 객체를 공유할 수 있다.
하지만 화면, 데이터 동기화를 하기 위해서는 상당히 복잡하다.
=> 여기서 props를 사용하면 편하겠지?

## Props
`v-bind: 내려보낼 Props 속성 이름 = "현재 위치의 컴포넌트 데이터 속성 "`