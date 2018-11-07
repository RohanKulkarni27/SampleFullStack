const express = require('express');

const app = express();
const mysql = require('mysql');
const morgan = require('morgan');
app.use(express.static('./Public'));
app.use(morgan('combined'));


// Service for returning specific user
//app.get("/user/:id/:name",(req,res)=>{
    app.get("/user/:id",(req,res)=>{
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        database:'LBTA_mysql'
    })
    const userID=req.params.id;
    const name=req.params.name;
  
    const query = "Select * from users where id="+userID
   // const query = "Select * from users where FirstName='"+name+"'";

    connection.query(query,(err,rows,field)=>{
    if(err){
        console.log("There is some error:"+err);
        res.sendStatus(500);
        return
    }
    else{
        res.json(rows)
    }

    })
})


app.get("/user/name/:name",(req,res)=>{

    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        database:'LBTA_mysql'
    })
   // const userID=req.params.id;
    const name=req.params.name;
  
    //const query = "Select * from users where id="+userID
   const query = "Select * from users where FirstName='"+name+"'";

    connection.query(query,(err,rows,field)=>{
    if(err){
        console.log("There is some error:"+err);
        res.sendStatus(500);
        return
    }
    else{
        res.json(rows)
    }

    })
});


app.get("/",(req,res)=>{
    console.log("Responding to roor router");
    res.send("Hello from the router");
});



app.get("/user",(req,res)=>{
  const query = "Select * from users";
  const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'LBTA_mysql'
})

connection.query("Select * from users",(err,rows,field)=>{
    console.log("I Think we fetched users successfully");
    res.json(rows)
    })
    //res.send("Nodemon says hello");
})

app.listen(3003,()=>{
    console.log("Server is up and listening on 3003")
})