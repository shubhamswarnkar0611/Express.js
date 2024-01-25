const express = require('express');

const loginRouter = require('./routes/login');
const messageRouter = require('./routes/message');

const app= express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))


app.use(messageRouter);
app.use(loginRouter);



app.use("/",(req, res, next) => {
    res.status(404).send("<h2>Page Not Found</h2>")
})


app.listen(3000);
