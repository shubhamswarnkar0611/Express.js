const express= require('express');
const path = require('path');
const router= express.Router();

router.use("/contact-us",(req, res, next) => {
    res.sendFile(path.join(__dirname,"../","view","contact-us.html"));
    // console.log("hello i am middleware");
});

router.post("/success",(req, res, next) => {
    res.send("<h1>Form successfuly filled</h1>")
})


module.exports = router;