const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get("/user",(req,res)=>{
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
  });


  //For Specific user

  router.get("/user/:id",(req,res)=>{
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
});

//For Specific Name

router.get("/user/name/:name",(req,res)=>{

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

  module.exports = router;
