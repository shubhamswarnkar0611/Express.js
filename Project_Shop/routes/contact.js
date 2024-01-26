const express= require('express');
const path = require('path');
const router= express.Router();
const controContact=require('../controller/contact-contro')

router.use("/contact-us",controContact.getContact);

router.post("/success",controContact.postContact);


module.exports = router;