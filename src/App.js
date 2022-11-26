import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import Login from "./pages/login";
import Done from './pages/Done';


function App() {
  return (
    <div>
      <Router>
            <Routes>
              
                <Route path="/"               element={ <Home/>} />
                <Route path="/Signup"         element={<SignUp/>} /> 
                <Route path="/Login"          element={<Login/>} />
                <Route path="/Done"           element={<Done/>} />
            </Routes>
        </Router>
    
    </div>
  );
}


export default App;
