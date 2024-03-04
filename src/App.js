import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarstick from "./components/navbar";
import Main from "./components/main";
import Dashboard from "./container/dashboard";
import User from "./container/user";
function App() {



  return (
    <div className="App">
        <BrowserRouter>
    <NavBarstick/>
          <Routes>
            <Route path="/" element={<Main/>} />
             <Route path="/dashboard" element={<Dashboard/>}/>  
             <Route path="/user" element={<User/>}/>

          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
