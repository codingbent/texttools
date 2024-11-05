// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About.js';
import Nav from './components/Nav.js'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,
Route,
Routes}
from "react-router-dom";


function App() {

  var [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);
    
    const showAlert= (message,type)=>{
      setAlert({
        msg:message,
        tpye:type
      })
      setTimeout(() => {
        setAlert(null,null);
      }, 3000);
    }
    var togglemode = ()=>{
      if(mode === 'dark'){
          setMode('light');
          document.body.style.backgroundColor='white';
          document.body.style.color='#212529';
          showAlert("light mode enabled","success");
      }
      else if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor='#353e43';
          document.body.style.color='white';
          showAlert("dark mode enabled","success");
  }
}
  return (
    <>
      <Router>
  <Nav title="TextUtils" mode={mode} togglemode={togglemode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm heading="Enter text to analyze" />} />
    </Routes>
  </div>
</Router>

    </>
  );
}

export default App;
