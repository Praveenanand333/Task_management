import react from 'react';
import { ReactDOM } from 'react';
import Loginform from './loginform';
import Createacc from './createacc'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import react, { useEffect, useState } from 'react';
import React, { ReactDOM } from 'react';
import Loginform from './loginform';
import Createacc from './createacc'
import Tasks from './tasks';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// const Users=()=>{
//     const [tasks,settasks]=useState("")
//     const search=useLocation().search;
//     const username=new URLSearchParams(search).get('username')
    
//         const headers={'Content-Type':'application/json'};

//  fetch("http:localhost:9000/users?username="+username,{headers})
//  .then(response=>{response.json()})
//  .then(response=>settasks(response))
// ;



// return(
//     <>
//     <h1>hello from user</h1>
//         <h1>{tasks}</h1>
        
//     </>
// )

// }
global.username=""
const Callapi1=()=>{
    const search=useLocation().search;
     global.username=new URLSearchParams(search).get('username')
     alert(global.username+"call")
    
    
    
}
class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={apiresponse:"",username:global.username};
        <Callapi1/>
       
    }
    callApi(){
    
     
        fetch("http://localhost:9000/users?username="+global.username)
        // .then((res)=>res.text())
        .then(res=>res.json())
        .then(res=>this.setState({apiresponse:res}));
        alert(global.username+"api")
       
    }
    componentWillMount(){
        this.callApi();
        
    };
    render(){
     return <>  <Callapi1/><h1>hello from user {global.username}</h1><h1>{this.state.apiresponse}</h1></>
    };
    
    
}
export default Users;