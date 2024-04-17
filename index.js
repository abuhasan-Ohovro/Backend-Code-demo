require('dotenv').config()
const express = require("express");
const send = require("send");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/goggle',(req,res)=>{
  res.send("hasan")
});

app.get('/login',(req,res) =>{
    res.send('<h1> I will be a Millionaire before 2030 </h1>')
});

app.get('/youtube',(req,res) =>{
   res.send("<h2> www.youtube.com</h2>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
