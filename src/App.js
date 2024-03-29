import Register from './pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import React from 'react';

import "./App.css"
import Password from './components/Password';

import Notes from './components/Notes';
import Trash from './components/Trash';
import PersonalInfo from './components/PersonalInfo';


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Password" element={<Password />} />
      
      <Route path="/Notes" element={<Notes />} />
      <Route path="/Trash" element={<Trash />} />
      <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
     
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
