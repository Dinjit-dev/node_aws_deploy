const express = require('express');

const app = express();

app.get('/api/get',(req,res)=>{
   res.send({message:"hii welocome over deployment"})
})
app.listen(9000,(req,res)=>{
    console.log("server running ")
}) 