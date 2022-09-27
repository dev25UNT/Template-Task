import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTemplate from "./pages/CreateTemplate";
import { useState } from "react";

function App() {
  const [data,setData]=useState([]);
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home/>} />
         {/* Route for Create Table Page */}  
        <Route path="/create" element={<CreateTemplate data={data} setData={setData}/>} />
      </Routes>
    </Router>
  );
}

export default App;
