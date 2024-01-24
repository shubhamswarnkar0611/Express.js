const express= require('express');
const router= express.Router();

router.use("/",(req, res, next) => {
    res.send("<h1>hello i am express.js</h1>")
    // console.log("hello i am middleware");
});


module.exports = router;