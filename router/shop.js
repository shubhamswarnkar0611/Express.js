const express= require('express');
const path = require('path');
const router= express.Router();

router.use("/shop",(req, res, next) => {
    res.sendFile(path.join(__dirname,"../","view","shop.html"));
    // console.log("hello i am middleware");
});


module.exports = router;