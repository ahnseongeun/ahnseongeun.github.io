const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

 const fs = require('fs');
// const { json } = require('body-parser');
const dbPath = path.join(__dirname, './frontend/static/data/data.json');


app.use("/static", express.static(path.resolve(__dirname,"frontend")));
app.use(cors());

app.post("/board-save", (req, res) => {
    console.log("hi there!");
    const posts = getData();
    console.log(posts);
    posts.push(req.body);
    setData(posts);
    res.send();
})

app.get("/board", (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw alert('error 발생!');
        const boardata  = JSON.parse(data);
        res.json(boardata);
    })
})

function getData() {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw alert('error 발생!');
        const boardata  = JSON.parse(data);
        res.json(boardata);
    })   
}
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "static", "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));
