const express = require('express');
const router = express.Router();

router.use("/add-product",(req, res, next) => {
    
    res.send("<form style='background-color: slateblue; padding: 20px; color: white; text-align: center;' method='POST' action='/admin/product'><b>Product: </b><input type='text' name='title'/><br><b style='padding:13.5px'>Size: </b><input type='number' name='size'/><br><button style='margin: 10px;background: cornflowerblue;border: none;padding: 6px;border-radius:15px;font-weight:600;' type='submit'>Add Product</button></form>");
});

router.post("/product",(req, res, next) => {
    console.log(req.body)
    res.redirect('/admin/');
});



module.exports = router;

