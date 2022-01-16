# portfolio

zoom start

chatroom process

1. app - handleMessageSubmit()
2. server - socket.on("new_message")
3. app - socket.on()

Adapter가 기본적으로 하는 일은 다른 서버들 사이에 실시간 어플리케이션을 동기화 하는것이다.

socket은 private room이 존재해서 해당 socket id로 private message를 보낼 수 있다.

map.set(key, value)
map.forEach((value, key) => console.log(key, value))

Json코드 이쁘게 적용하기 
Ctrl + K, Ctrl + F

모두에게 소켓 전송
io.sockets.emit("hi","everyone");

챌린지
1. 닉네임 입력 받고 방 입장하게 만들기