const express = require('express');
const app = express();

app.use((req, res, next) => {
    // res.send("<h1>hello i am express.js</h1>")
    console.log("hello i am middleware");
    next();
});

app.use((req, res, next) => {
    console.log("hello i am another middleware");
    res.send("<h1>hello i am another middleware</h1>");
});

app.listen(3000);