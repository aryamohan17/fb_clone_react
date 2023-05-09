const express = require('express')
const logic = require('./service/logic') 
const server = express()

const cors = require('cors')
server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())

server.listen(8200,()=>{
    console.log("server start at 8200");
})

server.post('/register',(req,res)=>{
    logic.register(req.body.firstname,req.body.lastname,req.body.email,req.body.password,req.body.dob,req.body.profilepic).then(result=>{
        res.status(result.statusCode).json(result)

    })
})

server.post('/login',(req,res)=>{
    logic.register(req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)

    })
})