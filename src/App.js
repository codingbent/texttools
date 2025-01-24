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

    const removebodyclasses =()=>{
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
    }
    const removetextcolor =()=>{
      document.body.classList.remove('text-white');
      document.body.classList.remove('text-black');
    }
    var togglemode = (cls)=>{
        // if(cls!=null){
          removebodyclasses();
          document.body.classList.add('bg-'+cls);
          if(cls==='dark'){
            removetextcolor();
            document.body.classList.add('text-white');
          }
          if(cls==='light'){
            removetextcolor();
            document.body.classList.add('text-black');
          }
        // }
          // if(mode === 'dark'){
          //     setMode('light');
          //     document.body.style.backgroundColor='white';
          //     document.body.style.color='#212529';
          //     // showAlert("light mode enabled","success");
          // }
          // if(mode === 'light'){
          //     setMode('dark');
          //     document.body.style.backgroundColor='#353e43';
          //     document.body.style.color='white';
          //     // showAlert("dark mode enabled","success");
          // }
        }
  return (
    <>
    <Router>
      <Nav title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} ></Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
