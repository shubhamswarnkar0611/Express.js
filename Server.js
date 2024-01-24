const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product",(req, res, next) => {
    
    res.send("<form method='POST' action='/product'><h5>Product</h5><input type='text' name='title'/></br><h5>Size</h5><input type='number' name='size'/><button type='submit'>Add Product</button></form>");
});

app.post("/product",(req, res, next) => {
    console.log(req.body)
    res.redirect('/add-product');
});

app.use("/",(req, res, next) => {
    res.send("<h1>hello i am express.js</h1>")
    // console.log("hello i am middleware");
});

app.listen(3000);

