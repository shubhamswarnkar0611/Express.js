const express = require('express');

const addProductRouter= require('./router/add-product');
const shopRouter= require('./router/shop');
const contactUsRouter= require('./router/contact-us');

const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: false}));

app.use(addProductRouter);
app.use(contactUsRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h2> Page Not Found</h2>');
})

app.listen(3000);

