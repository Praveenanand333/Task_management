import react, { useEffect, useState } from 'react';
import React, { ReactDOM } from 'react';
import Loginform from './loginform';
import Createacc from './createacc'
import Tasks from './tasks';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './style.css'
import './bootstrap.css'
let count=1;
const Callapi1=(props)=>{
    const [task,setTask]=useState("")
    const search=useLocation().search;
     global.username=new URLSearchParams(search).get('username')
    
     fetch("http://localhost:9000/users?username="+global.username)
     .then(res=>res.text())
     .then(res=>setTask((res)))
     const length=task.length;
     var text1;
if(length!=0){
     text1=task.split('\n').map(str=><p>{str}  <div style={{display:"inline-block"}}><form action="http://localhost:9000/deletetask" method='post'><button  class='btn btn-danger'  type='submit'>Delete</button><input type='hidden' name='task' value={str}></input><input type='hidden' name='username' value={global.username}></input></form></div> </p>)
}
else{
  text1="NO TASKS AVAILABLE"
}
     return(
        <>
            {text1}
            </>
     )
    
}
const Getusername=()=>{
    const search=useLocation().search;
     var username=new URLSearchParams(search).get('username')
     global.username=username;
     return (
      <>
        <input class='hidden' type='text' name='username' value={global.username} readOnly/>
      </>
     )
}

class Users extends React.Component{
    constructor(props){
        super(props);
        
        <>
        <Callapi1/>
        <Getusername/>  
        </>
       
    };
   
   
    
    render(){
     return <> 

     <div class='container-fluid bg-primary text-white' >
    <h1 class='head'>YOUR TODOLIST</h1>
    <div style={{display:"inline-block",marginLeft:"80%"}}>
     <a href='http://localhost:3000' class='btn btn-danger'>Logout</a> </div>
     
     <hr/>
     </div>
     <div class='taskdiv'>
    
      <h3 class='tasks' ><Callapi1/></h3>
    
      </div>
      <div style={{float:"center"}}>
      <form action='http://localhost:9000/createtask' method="POST" class='form-group'>
      <br/>
      <div class='addtask_div'>
        <h5>Add new task:</h5><input type='text' class='form-control-lg' name='newtask'/>
    
      
    
        <button style={{marginLeft:"2%"}} type='submit' class='btn btn-primary'>ADD</button>
        </div>
        <h1>{<Getusername/>}</h1>
    </form>
    </div>
      </>
    
    };
    
    
}
export default Users;