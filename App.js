import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Api from './components/Api';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
   
  
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Login/>}/>
    <Route path='/Api' element={<Api/>}/>

   </Routes>
   </BrowserRouter> 
   
    </div>
    
  );
}

export default App; 