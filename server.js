const express = require('express') // import express from express

const app = express();

app.use(express.json());

const PORT = 4000
const tab = ['a','b',1,2,4,8]
// app.get('/user',(req,res)=>{
//     return res.send({tab})
// })

app.listen(PORT,(error)=>{
if(error) throw console.error(error); 
console.log('server listen to ' + PORT)
})
