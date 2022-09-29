import react from 'react';
import { ReactDOM } from 'react';
import Loginform from './loginform';
import Createacc from './createacc'
import Tasks from './tasks';
import Users from './users'
import {BrowserRouter,Routes,Route} from "react-router-dom";
const App=()=>{
    return(
<>
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Loginform credentials="valid"/> }/>
    <Route path='/home' element={<Loginform/> }/>
        <Route path='/createacc' element={<Createacc />}/>
        <Route path='/invalid' element={<Loginform credentials="invalid"/>}/>
        <Route path='/acccreated' element={<Loginform credentials="acccreated"/>}/>
        <Route path='/tasks' element={<Tasks />}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
</BrowserRouter>
</>
    )
}
export default App;