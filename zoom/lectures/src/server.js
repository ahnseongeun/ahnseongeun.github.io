import http from "http";
//import WebSocket from "ws";
import express from "express";
import SocketIO from "socket.io";
import { count } from "console";


const app = express();

console.log("server start");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home")); 
app.get("/*", (req, res) => res.redirect("/"));


//http와 Websocket 서버 둘다 만들기
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

function getPublicRooms() {

  //const sids = wsServer.socket.adapter.sids;
  //const rooms = wsServer.socket.adapter.rooms;
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
      if(sids.get(key) === undefined) {
          publicRooms.push(key);
      }
  });
  return publicRooms;
}

function countRoom(roomName) {
    return wsServer.sockets.adapter.rooms.get(roomName).size;
}

wsServer.on("connection", (socket) => {
    socket["nickname"] = "Anonymous"
    socket.onAny((event) => { 
        //console.log(wsServer.sockets.adapter);
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        //console.log(socket.id);
        //console.log(socket.rooms);
        socket.join(roomName);
        done();
        //하나의 소켓에만 메시지를 보내기
        socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName));
        //모든 소켓에 메시지 보내기
        wsServer.sockets.emit("room_change", getPublicRooms());
    });

    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) => 
            socket.to(room).emit("bye", socket.nickname, countRoom(room) - 1)
        );
    });
    socket.on("disconnect", () => {
        wsServer.sockets.emit("room_change", getPublicRooms());
    })
    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        done();
    });
    socket.on("nickname", (nickname) => {
        socket["nickname"] = nickname
    });
});

httpServer.listen(3000, () => console.log(`Listening on http://localhost:3000`));
/*
const wss = new WebSocket.Server( { server });
const sockets = [];
wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Anonymous";
    console.log("Connected to Browser ");
    socket.on("close", () => console.log("Disconntected Browser"));
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch(message.type){
            case "new_message":
                sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));
                break;
            case "nickname":    
                socket["nickname"] = message.payload;
                break;
            default:
        }
    });
});
*/