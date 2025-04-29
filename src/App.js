import React, { useState } from 'react';

import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alertSate, setAlert] = useState(null)
  
  const showAlert = (type,message)=> {
    setAlert({
      type: type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success","Light Mode Enabled")
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#010520";
      showAlert("danger","Dark Mode Enabled")
    }
  };

  return (
    // <>
    //   <Navbar title="TextUtills" aboutTitle="About" mode={mode} toggleMo={toggleMode} />
    //      <Alert  alert={alertSate}/>
    
    //   <>
    //     <Routes>
    //         <Route path="/about">
    //           <About />
    //         </Route>
    //         <Route path="/">
    //         <div className="container my-3">
    //           <Textform heading="Enter Text here" mode={mode} showAlert={showAlert}/>
    //         </div>
    //         </Route>
    //       </Routes>
    //     </>
    // </>
    <>
    <Navbar title="TextUtills" aboutTitle="About" mode={mode} toggleMo={toggleMode} />
    <Alert alert={alertSate} />
  
    <Routes>
      <Route exact path="/about" element={<div className="container my-3"><About /></div>} />
      <Route exact
        path="/"
        element={
          <div className="container my-3">
            <Textform heading="Enter Text here" mode={mode} showAlert={showAlert} />
          </div>
        }
      />
    </Routes>
  </>
  );
}

export default App;
