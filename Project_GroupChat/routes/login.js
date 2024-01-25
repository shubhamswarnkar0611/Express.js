const express = require('express');
let obj


const router= express.Router();

router.post("/login",(req, res, next)=>{
    res.redirect("/message");
})

router.get("/login",(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('userName', document.getElementById('userName').value)" action="/login" method="POST">
    <b>Name: </b><input id="userName" type="text" name="userName" /><br>
    <b>Password: </b><input type="text"/><br>
    <button type="submit">Login</button></form>`);
})



module.exports = router