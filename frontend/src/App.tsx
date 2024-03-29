import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
