
import './App.css';

import { Routes,Route } from 'react-router-dom';
import { Fragment, useState } from 'react';


import Home from './components/Home/Home';
import UserForm from './components/UserForm/UserForm';
import DisplayForm from './components/DisplayForm/DisplayForm';



function App() {
  const [userdetails,setuserdetails] = useState('');
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path="UserForm" element={<UserForm userdetailsG = {setuserdetails}/>}/>   
          <Route path="DisplayForm" element={<DisplayForm userdetailsG = {userdetails}/>}/>  
        </Route> 
    </Routes>
    </Fragment>    
  );
}

export default App;
