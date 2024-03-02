import logo from "./logo.svg";
import "./App.css";

import {useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarstick from "./components/navbar";
import Main from "./components/main";
import Dashboard from "./components/dashboard";
function App() {



  return (
    <div className="App">
    <NavBarstick/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={    <Main/>} />
             <Route path="/dashboard" element={<Dashboard/>}/>  
          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
