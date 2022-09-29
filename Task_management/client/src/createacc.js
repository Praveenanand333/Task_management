import react,{useState} from 'react';
import  ReactDOM  from 'react-dom';
import './bootstrap.css';
import './style.css';
import App from './App'
import Loginform from './loginform';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Outlet,Link } from 'react-router-dom';
import {redirect} from 'react-router-dom'
const Createacc=()=>{
   
const [username,setusername]=useState("");
const [password,setpassword]=useState("");
const [confirmpassword,setconfirmpassword]=useState("");
    return(
        <html >
            <body >
        <br/>
           <form class="form-group" method='POST' action='http://localhost:9000/createacc'>
            Enter your username: <input type="text" onInput={(e)=>{setusername(e.target.value)}} class="form-control-lg" name="username" value={username}/><br/><br/>
            Enter your password: <input type="text" onInput={(e)=>{setpassword(e.target.value)}} class="form-control-lg" name="password" value={password}/><br/><br/>
            Confirm your password: <input type="text" onInput={(e)=>{setconfirmpassword(e.target.value)}} class="form-control-lg" name="confirmpassword" value={confirmpassword}/> <br/><br/>
            <button  class="btn btn-danger" type='submit'>Create</button>
            <button style={{marginLeft:"10%"}} class="btn btn-danger" onClick={(e)=>{e.preventDefault();setusername("");setpassword("");setconfirmpassword("")}}>Clear</button>
           <Link to='/' style={{marginLeft:"13%"}} class="btn btn-danger" >Back</Link>
           </form>
           </body>
        </html>
    )
}
export default Createacc