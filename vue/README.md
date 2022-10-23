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
<!-- v-on: 하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트 메소드 이름"-->
<!-- v-bind: 내려보낼 Props 속성 이름 = "현재 위치의 컴포넌트 데이터 속성 "-->

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

## Arrow Function - 화살표 함수
- 함수를 정의할 때 function이라는 키워드를 사용하지 않고 => 대체
- 흔히 사용하는 콜백 함수의 문법을 간결화
```javascript
var arr = ["a","b","c"];
arr.forEach(function(value) {
    console.log(value);
});

var arr = ["a","b","c"];
arr.forEach(value => console.log(value));
```

## Enhanced Object Literals - 향산된 객체 리터럴
```javascript
var dictionary = {
    words: 100,
    // ES5
    lookup: function() {
        console.log("find words");
    },
    // ES6
    lookup() {
        console.log("find words")
    }
}
```

## 객체의 속성명과 값 명이 동일할 때 아래와 같이 축약 가능
```javascript
var figures = 10;
var dictionary = {
    // figures : figures
    figures;
}
```

## Modules - 자바스크립트 모듈화 방법
- 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS) 기능을 js 언어 자체에서 지원
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음
```javascript
// lib/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

// main.js
import { sum } from 'lib/math.js'
sum(1, 2);
``` 

```javascript
// util.js
export default function(x) {
    return console.log(x);
}

// main.js
import util from 'util.js';
console.log(util);
util("hi");

// app.js
import log from 'util.js';
console.log(log);
log("hi");
```

## Vuex - 상태 관리 라이브러리
- 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 Vuex 라이브러리 소개
- Vuex 라이브러리의 주요 속성인 state, getters, mutations, actions 학습
- Vuex를 더 쉽게 코딩할 수 있는 방법인 Helper 기능 소개
- Vuex로 프로젝트를 구조화하는 방법과 모듈 구조화 방법 소개
### Vuex란?
- 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- React의 Flux 패턴에서 유래
- Vue.js 중고급 개발자로 성장하기 위한 필수 관문

## Flux란?
- MVC 패턴의 복잡한 테이터 흐름 문제를 해결하는 개발 패턴
    - Action => Dispatcher => Model => View
1. action : 화면에서 발생하는 이벤트 또는 사용자 입력
2. dispatcher : 데이터를 변경하는 방법, 메서드
3. model : 화면에 표시할 데이터
4. view : 사용자게에 비춰지는 화면    
- MVC 패턴의 문제점
    - 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수 없음
    - 앱이 복잡해지면서 생기는 업데이트 루프
- Flux 패턴의 단방향 데이터 흐름
    - 데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리

### Vuex가 왜 필요할까?
- 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다.
- 이벤트 버스로 해결?
    - 어디서 이벤트를 보내는지 혹은 어디서 이벤트를 받았는지 알기 어려움
    ```javascript
    // Login.vue
    eventBus.$emit('fetch', loginInfo);

    // List.vue
    eventBus.$emit('display', data => this.displayOnScreen(data));

    // Chart.vue
    eventBus.$emit('refreshData', chartData);
    ```
    `컴포넌트 간 데이터 전달이 명시적이지 않음`

### Vuex로 해결할 수 있는 문제
1. MVC 패턴에서 발생하는 구조적 오류
2. 컴포넌트 간 데이터 전달 명시
3. 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

### Vuex 컨셉
- State: 컴포넌트 간에 공유하는 데이터 data()
- View : 데이터를 표시하는 화면 template
- Action : 사용자의 입력에 따라 데이터를 변경하는 methods

### Vuex 구조
- 컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태

### Vuex 기술 요소
- state : 여러 컴포넌트에 공유되는 데이터 data
- getters : 연산된 state 값을 접근하는 속성 computed
- mutations : state 값을 변경하는 이벤트 로직, 메서드 methods
- actions : 비동기 처리 로직을 선언하는 메서드 aysnc methods
```javascript
// Vue
data: {
    message: 'Hello Vue.js!'
}

// Vuex
state: {
    message: 'Hello Vue.js!'
}

// Vue
<p>{{ message }}</p>
<p>{{ this.$store.state.message }}</p>
```

```javascript
// getters : state 값을 접근하는 속성이자 computed() 처럼 미리 연산된 값을 접근하는 속성
state: {
    num: 10
},
getters: {
    getNumber(state) {
        return state.num;
    },
    doubleNumber(state) {
        return state.num * 2;
    }
}

<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
```

## mutations
- state의 값을 변경할 수 있는 유일한 방법이자 메서드
- mutation은 commit()으로 동작시킨다.

```javascript
state: { num: 10},
mutation: {
    printNumber: {
        return state.num
    },
    sumNumbers(state, anotherNum) {
        return state.num + anotherNum;
    }
}

this.$store.commit('printNumbers');
this.$store.commit('sumNumbers', 20);
```

```javascript
state: { num: 10},
mutation: {
    modifystate(state, payload) {
        console.log(payload.str);
        return state.storeNum += payload.num;
    }
}

// state을 변경하기 위해 mutations를 동작시킬 때 인자(payload)를 전달할 수 있음
this.$store.commit('modifyState', {
    str: 'passed from payload',
    num: 20
});
```

### state은 왜 직접 변경하지 않고 mutations로 변경할까?
- 여러 개의 컴포넌트에서 아래와 같이 state 값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다.
```javascript
methods: {
    increaseCounter() {
        this.$store.state.counter++;
    }
}
```
- 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한건지 확인하기 어렵다.
- 따라서, 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행, 반응성, 디버깅, 테스팅 혜택

## actions란?
- 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
- 데이터 요청, Promise, ES6 async과 같은 비동기 처리는 모두 actions에 선언