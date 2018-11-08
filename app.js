const express = require('express');

const app = express();
const mysql = require('mysql');
const morgan = require('morgan');
app.use(express.static('./Public'));
app.use(morgan('combined'));


// Service for returning specific user
//app.get("/user/:id/:name",(req,res)=>{
   


app.get("/",(req,res)=>{
    console.log("Responding to roor router");
    res.send("Hello from the router");
});


const routerUser = require('./Routes/user.js');

app.use(routerUser);



app.listen(3003,()=>{
    console.log("Server is up and listening on 3003")
})