import react, { useEffect, useState } from 'react';
import './bootstrap.css';
import './style.css'
import { Outlet,Link } from 'react-router-dom';
import React from 'react';



class Loginform extends React.Component{
   constructor(props){
    super(props);
    this.state={username:"",password:""};
   }
    static getDerivedStateFromProps(props,state){
        if(props.credentials=="invalid"){
            alert("incorrect username/password");
        }
        if(props.credentials=="acccreated"){
            alert("account created successfully");
        }
    }
  
   render(){ return(
        <><div >
<div class="container-fluid pt-4 bg-primary text-white" style={{marginBottom:-7}}>
        <center>
        <h1  >WELCOME TO TASK MANAGEMENT TOOL</h1><br/>
        
        <h5 >
            The ultimate tool to manage your tasks
           
        </h5><br></br></center>
        </div>
        
        <div class="container-fluid pt-3 bg-info text-white" style={{paddingBottom:100}} ><center>
            <img src={require("./images/index.jpg") }/>
            <form action="http://localhost:9000/login" method="POST" autocomplete="off" style={{display:"inline-block",marginTop:-200}}class="form-group">
Username<br/> <input class="form-control-lg"  onInput={(e)=>{this.state.username=(e.target.value)}} type="text" name="username" /><br/><br/>
Password<br/> <input class="form-control-lg"  onInput={(e)=>{this.state.password=(e.target.value)}} type="password" name="password"/><br/><br/>
<button class="btn btn-primary" type="submit">Login</button>
            </form>
            <p>New user?click  below to create an account</p>
        
           <a href='/createacc' > <button class="btn btn-primary"  >create account</button></a>
           </center>
           <h1>
            {this.state.username}
           </h1></div>
           </div>  </>
    )
}}
export default Loginform;