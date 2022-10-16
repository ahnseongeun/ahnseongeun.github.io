# State-management

## redux
- JavaSciprt의 상태관리 라이브러리
    - Redux의 세가지 원칙
    1. Single source of truth
        - 동일한 데이터는 항상 같은 곳에서 가지고 온다.
        - 즉, 스토어라는 하나뿐인 데이터 공간이 있다는 의미
    2. State is read-only
        - 리액트에서는 setState 메소드를 활용해야만 상태 변경이 가능
        - 리덕스에서도 액션이라는 객체를 통해서만 상태를 변경할 수 있다.
    3. Changes are made with pure functions
        - 변경은 순수함수로만 가능
        - Reducer와 연관되는 개념
        - Store - Action - Reducer
    - Action을 Reducer에 전달하기 위해서는 dispatch() 메소드를 사용해야한다.
### Redux 구현 방법
- mapStateToProps()
- Redux hooks

## redux-vanilla
- vanilla script에 redux를 이용해서 값을 저장하는 실습

