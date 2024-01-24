const express = require('express');

const adminRouter= require('./router/admin');
const shopRouter= require('./router/shop');

const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRouter);
app.use('/admin',shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h2> Page Not Found</h2>');
})

app.listen(3000);

