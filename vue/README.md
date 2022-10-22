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

## Modal
- Modal은 template 태그에 transition 태그부터 태그까지
  한번에 넣어준다.

## Slot
- Slot을 사용해서 특정 컴포넌트를 재사용 할 수 있게 해준다.

## Transition
- List에 Effect를 줄 때 사용한다.
- 구현 관점: 
- 사용 관점: 간단한 이펙트를 바로 적용할 수 있다.

## ES6 for Vue js
- const & let, Arrow Function, Enhanced Object Literals, Modules
- ES6 (ECMAScript 2015)
- Babel
    - 구 버전 브라우저 중에서 ES6의 기능을 지원하지 않는 브라우저가 있어서 transpiling이 필요
    - ES6의 문법을 각 브라우저의 호환 가능한 ES5로 변환하는 컴파일러
- const & let
    - 블록 단위 {}로 변수의 범위가 제한되었음
    - const : 한번 선언한 값에 대해서 변경할 수 없음(상수 개념)
    - let : 한번 선언한 값에 대해서 다시 선언할 수 없음
- ES5 특징 - 변수의 Scope
    - 기본 자바스크립트(ES5)는 { }에 상관없이 스코프가 설정 된다.
    - Hoisting
        - Hoisting이란 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식한다.
        - js 해석기는 코드의 라인 순서와 관계 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
        - 따라서, function a()와 var는 코드의 최상단으로 끌어 올려진 것(hoisted)처럼 보인다.
```javascript
function f() {
    {
        let x;
        {
            // 새로운 블록안에 새로운 x의 스코프가 생김
            const x = "sneaky";
            // 위에 이미 const로 x를 선언했으므로 다시 값을 대입하면 에러 발생
            x = "foo";
        }
        // 이전 블록 범위로 돌아왔기 때문에 `let x`에해당하는 메모리게 값을 대입
        x = "bar";
        let x = "inner";
    }
}
```