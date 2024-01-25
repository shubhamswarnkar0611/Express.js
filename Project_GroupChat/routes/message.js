const express= require('express');
const fs = require('fs');
const router = express.Router();

router.use("/message",(req,res,next)=>{
    fs.readFile("chat.txt",(err, data)=>{
    res.send(`
    <p>${data}</p>
    <form action="/send" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('userName')">
    <b>Message:</b>
    <input type="text" name="message" />
    <input type="hidden" name="userName" id="username" />
    <button type="submit">Send</button>
    </form>
    `);
 })
}
);

router.use("/send",(req,res,next)=>{
   
    
    // fs.writeFile("./chat.txt",)
    fs.writeFile("chat.txt",`${req.body.userName}: ${req.body.message}`,{flag:'a'},(err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Data written to file successfully.');
        } 
    })
    res.redirect('/message');
});

module.exports = router;