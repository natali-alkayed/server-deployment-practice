'use strict';

const express = require("express");
const app = express();

const stamper = require('./middlewares/stamper');

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

app.get('/', (req, res) => {
    res.send("hello from home route");
});

app.get('/data', stamper, sendRes)

// app.get('/data', stamper, (req, res) => {
//     res.json({
//         id: 1,
//         name: "malek",
//         email: "malek@ltuc.com",
//         time: req.timeStamp,
//     });
// });
app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    })
    res.send(result);
})


app.use('*', notFoundHandler);
app.use(errorHandler)

function sendRes(req, res) {
    res.json({
        id: 1,
        name: "malek",
        email: "malek@ltuc.com",
        time: req.timeStamp,
    });
}


function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}