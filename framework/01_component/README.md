# Component

## Component 정의
- 웹 컴포넌트는 그 기능을 나머지 코드로부터 캡슐화하여 재사용 가능한 커스텀 엘리먼트를 생성하고 웹 앱에서 활용할 수 있도록 해주는 다양한 기술들의 모음
## Component 사용 목표 및 방법
- 재사용을 원하는 곳에 코드 충돌 없이 캡슐화된 기능을 갖춘 다용도의 커스텀 엘리먼트를 생성하기 위해 사용
    - **커스텀 엘리먼트** : 커스텀 엘리먼트와 그 동작을 정의할 수 있도록 해주는 JavaScript API의 집합
        - **Custom elements:** 사용자 인터페이스에서 원하는대로 사용할 수 있는 사용자 정의 요소 및 해당 동작을 정의 할 수 있는 JavaScript API 세트
        - **Shadow DOM:** Main Document DOM으로부터 독립적으로 렌더링되고 연관된 기능을 제어하기 위한 JavaSciprt API의 집합. 엘리먼트의 기능을 Private하게 유지할 수 있다.
        - **HTML Template:** `<template>`과`<slot>` 엘리먼트는 렌더링된 페이지에 나타나지 않는 마크업 템플릿을 작성할 수 있게 한다. 그 후, 커스텀 엘리먼트의 구조를 기반으로 여러번 재사용 가능

### Web Component 구현 방법
- Web Component 기능을 명시하는 Class 생성
- `CustomElementRegistry.define()` 메소드를 사용해 새로운 커스텀 엘리먼트 등록, 엘리먼트 이름, 클래스, 상속받은 엘리먼트를 전달
- 필요한 경우, `Element.attachSahdow()` 메소드를 사용해 shadow DOM을 커스텀 엘리먼트에 추가한다. 일반적인 DOM 메소드를 사용해 자식 엘리먼트, 이벤트 리스터 등을 shadow DOM에 추가
- 필요한 경우, `<template>`과`<slot>`을 사용해 HTML 템플릿을 정의. 다시 일반적인 DOM 메소드를 사용해 템플릿을 클론하고 shadow DOM에 추가.
- 일반적인 HTML 엘리먼트처럼, 페이지의 원하는 어느곳이든 엘리먼트를 사용할 수 있다.

## Shadow-DOM
- Shadow DOM API는 캡슐화의 핵심 파트이며, 숨겨진 분리된 DOM을 요소에 부착할 때 사용한다.
- 예를들어 `<video>` 요소에서 DOM에서 보이는 모든 것은 `<video>`요소지만, 일련의 버튼든과 다른 컨트롤들은 이것의 shadow DOM 내부에 포함하고 있다.
- Element.attachShadow() 메서드를 사용해서 어떤 요소에 shadow root를 부착할 수 있고, **mode** 옵션을 가지고 있다.
```javascript
    let shadow = elementRef.attachShadow({ mode: 'open'});
    let shadow = elementRef.attachShadow({ mode: 'closed'});
```

- **open**은 메인 페이지 맥락에서 작성된 JavaSciprt를 사용하여 shadow DOM에 접근할 수 있음을 의미
```javascript
    let myShadowDom = myCustomElem.shadowRoot;
```

- **mode: closed**로 사용자 정의 요소에 shadow root를 부착했다면, 외부로부터 shadow DOM에 접근할 수 없다.


## Virtual-Dom

## Web-Component




