var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.listen(3001,function () {
    console.log("3001번 포트 서버 시작됨");
})