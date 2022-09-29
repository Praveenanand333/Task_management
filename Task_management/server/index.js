import  express  from "express";
const app=express();
import bodyParser from 'body-parser';
import cors from 'cors';
app.use(cors());
import url from 'url'
import mysql from 'mysql';
import { request } from "http";
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mernapp"
});
app.get('/',(req,res)=>{
    res.end("hello from nodejs");
})
app.get('/users',(req,res)=>{
    var text="";
     var username=req.query.username;
     con.connect(function(err){
        con.query("select tasks from tasks where username='"+username+"'",function(err,result,fields){
            var count=1;
            for(var x in result){
               text+=(count)+"."+result[x].tasks+"\n";
               count+=1;
          
            }  
            var index=text.lastIndexOf("\n")
            text=text.substring(0,index); 
            res.send(text);
        });

     })
    
})
app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"mernapp"
    });
    con.connect(function(err){if(err) throw err;
con.query("select password from user where username='"+username+"'",function(err,result,fields){
    if(password==result[0].password){
        res.redirect("http://localhost:3000/users?username="+username)
    
}
else{
    res.redirect('http://localhost:3000/invalid');
}
});
    
    
    });
    
    
})
app.post('/createtask',(req,res)=>{
   const task=req.body.newtask;
   const username=req.body.username;
   console.log(username)
   console.log(task)
   var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mernapp"
});

con.connect(function(err){
    if(err) throw err;
var sql="insert into tasks values('"+username+"','"+task+"')";
con.query(sql,function(err,result){
    if (err) throw err;
})
})

//res.send(username)
res.redirect("http://localhost:3000/users?username="+username)
})
app.post('/createacc',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const confirmpassword=req.body.confirmpassword;
    if(password==confirmpassword){
    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"mernapp"
    });
    con.connect(function(err){
        if(err) throw err;
        var sql="insert into user values('"+username+"','"+password+"')";
        con.query(sql,function(err,result){
            if(err) throw err;
            console.log("inserted");
            res.redirect("http://localhost:3000/acccreated");
        })
        
    })
}

})
app.post('/deletetask',(req,res)=>{
    var task=req.body.task;
    task=task.substring(2);
    var username=req.body.username;
    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"mernapp"
    });
    con.connect(function(err){
        if(err) throw err;
        var sql="delete from tasks where tasks='"+task+"'";
       
        con.query(sql,function(err,result){
         
            console.log("deleted");
            res.redirect("http://localhost:3000/users?username="+username);
        })
        
    })

    
})
app.listen(9000,()=>{
    console.log("server is running on port 9000")
})