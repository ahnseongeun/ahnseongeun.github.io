# 타입 스크립트 

## 타입 스트크립가 존재하는 이유
- 타입 안정성
    - 런타임 에러 감소 -> 생산성 증가
- EX
```javascript
    function divide(a, b) {
        return a / b
    }
    divide("input data")
    
    => result : NaN
    여기서 자바스크립트의 문제점은 함수의 parameter가 a, b로 두가지가 있는데 argument가 하나인데도 검사를 하지 않는다는 점이다.
```

## 타입 스크립트의 작동 방식
- 타입스크립트의 경우에는 작성한 코드가 자바스크립트로 변환된다.
- 타입스크립트가 먼저 코드를 확인 후 변환 전에 에러를 찾아낸다.
- 브라우저는 타입스크립트가 아닌 자바스크립트를 인식한다.

## 2.0 How Typescript Works

```javascript
const nico = {
    nickname: "nick"
}
nico.hello()
`=> javascript는 런타임 중에 발견하지만 typescript는 문법적인 에러를 표시한다.
```

```javascript
const add = [1,2,3,4] + false;
`javascript는 에러없이 1,2,3,4false를 출력하지만 typescript는 숫자 배열에 boolean을 더할 수 없다는 에러 표시. 또한, 컴파일 조차 안된다.`
```

## 2.1 Implicit Types vs Explicit Types
```javascript
let a = "hello"
a = 1;
`=> javascript는 에러가 없지만 typescript는 에러가 존재한다.`

let b : boolean = "x"
`=> typescript에서는 에러가 난다. b가 boolean이기 때문
이다.`

let c = [1, 2, 3]
c.push("1")
`=> javascript는 [ 1, 2, 3, '1' ]의 결과를 return 하지만 typescript는 문법적인 에러를 표시한다.`
```

## 2.2 Types Of TS part One
```javascript
let a : number[] = [1, 2];
let a1 = [1, 2];
`=> 이렇게 해도 타입 스크립트가 number 배열 인식 ` 
let b : string[] = ["i1","i2"];
let c : boolean[] = [true, false];
```

```javascript
const player : {
    name: string,
    age?:number
} = {
    name: "nico"
}
`=> Object 타입스크립트 설정 방법, 위의 상황은 age의 값이 없는 상태`

if ( player.age && player.age < 10) {}
`=> 해당 조건으로 타입 확인 가능`
```

```javascript
type Player = {
    name: string,
    age?:number
}

const playerNico : player {
    name:"nico"
}
`=> 타입을 커스텀해서 사용하는 방법`
```

```javascript
type Age = number;
type Name = string;
type Player = {
    name: Name,
    age?: Age
}

const Nico : player {
    name:"nico"
}

const Ahn : player {
    name:"lynn",
    age:12
}
`=> 커스텀 타입 사용 예시`
```

```javascript
type Age = number;
type Name = string;
type Player = {
    name: Name,
    age?: Age
}

const Nico : player {
    name:"nico"
}

const Ahn : player {
    name:"lynn",
    age:12
}
`=> 커스텀 타입 사용 예시`
```

```javascript
function playerMaker(name:string) {
    return {
        name
    }
}

const nico = playerMaker("nico");
nico.age = 12
`=> 타입 에러 발생`

function playerMaker(name:string) : Player {
    return {
        name
    }
}

const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker("nico");
nico.age = 12
`=> 정상 작동`
```

## 2.3 Types Of TS part Two
```javascript
type Age = number;
type Name = string;
type Player = {
    readonly name : Name
    age?:Age
}

const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 12
nico.name = "test"
`=> 에러 발생 type을 readonly로 지정해서 객체의 데이터 값을 변경할 수 없다.`

```
```javascript
const numbers =  readonly number[] = [1, 2, 3, 4] 
numbers.push(1)
`=> readonly이기 때문에 마찬가지로 에러 발생`
```

```javascript
`Tuple : Array이며 크기 지정 및 타입 지정`
const player : [string, number, boolean] = ["nick", 12, false]
player[0] = 1 
`=> 에러 발생 타입에러 때문에`

const player : readonly [string, number, boolean] = ["nick", 12, false]
player[0] = "hi" 
`=> 에러 발생 readonly 때문에`
```

```javascript
type Player = {
    age?: number // number or undefined
}
```

```javascript
// any는 타입 스크립트에서 벗어나게 한다.
const a : any[] = [1, 2, 3, 4]
const b : any = true
a + b 
`=> 가능하다.`
```


## 2.4 Types Of TS part Three

```javascript
let a: unknown;

if ( typeof a === 'number') {
    let b = a + 1
}

if ( typeof === 'string') {
    let b = a.toUpperCase();
}
`=> 타입 형변환을 자동으로 한다.`
```

```javascript
function hello() : void {
    console.log('x')
}
const a = hello();
a.toUpperCase() // 비어있는 것을 말한다.
```

```javascript
`never 함수는 절대 return이 발생하지 않을 때 발생한다.`
`n`
function hello() : never {
    throw new Error("xxx")
}

function hello(name:string|number){
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name  // 여기는 string과 number가 둘다 아니기 때문에 never이다.
    }
}
```

## 3.0 Call Signatures
```javascript
function add(a:number, b:number): number {
    return a + b
}

const add = (a:number, b:number) => a + b

`call signatures란 함수에 마우스를 올렸을 때 보게 되는걸 말한다.
 함수를 어떻게 호출하고 반환하는지 알려준다.`
```

```javascript
//call signatures 활용 방법
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a + b

```

## 3.1 Overloding
### 오버로딩은 call signatures가 여러개 있는 함수이다. 
```javascript
type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}

const add: Add = (a, b) => {
    if ( typeof b === "string" ) return a
    return a + b
}

```

```javascript
Router.push({
    path: "/home",
    state: 1
})

.push("/home")

=> 타입 스크립트로 변경
type Config = {
    path: string,
    state: object
}
type Push = {
    (path:string):void
    (config: Config):void
}

const push:Push = (config) => {
    if (typeof config === "string") { console.log(config) }
    else {
        console.log(config.pathl)
    }
}

```

```javascript
type Add = {
    (a: number, b: number): number,
    (a: number, b: number, c:number ): number,
}

const add:Add = (a, b, c) => {
    return a + b
}
`=> 타입 스크립트에서는 다른 개수의 파라미터를 가지게 되면, 나머지 파라미터도 타입을 지정해 줘야 한다`

const add:Add = (a, b, c?:number) => {
    if (c) return a +  b + c
    return a + b
}

add(1, 2)
add(1, 2, 3)
```

## 3.2 Polymorphism (다형성)

```javascript
type SuperPrint = {
    ( arr: number[]):void
    ( arr: boolean[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4]) // 가능
superPrint([true, false, true]) // 가능
superPrint(["a","b"]) // 불가능
superPrint([1,2,3,false]) // 이렇게 하고 싶다면??
```

```javascript
type SuperPrint = {
    <T>( arr: T[]):T
}

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,false,"good"])

```

## 3.3 Generics Recap
```javascript
type SuperPrint = {<T>( arr: T[]):T}
type SuperPrint = (a: any[]) => any
`=> 이렇게 두개가 뭔 차이 인가??`

const superPrint: SuperPrint = (arr) => arr[0]

const d = superPrint([1, 2, true, false, "hello"])
d.toUpperCase()
`여기서 any는 에러가 나오지 않지만 T(Generic을 사용하면)
 타입 에러가 발생한다.
`
```

```javascript
type SuperPrint = {<T, M>( a: T[], b:M):T}

const superPrint: SuperPrint = (arr) => arr[0]
const d = superPrint([1, 2], "x")
`=> 사용자의 요구에 따라 call signature를 생성한다.`
```
