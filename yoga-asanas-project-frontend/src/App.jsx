import React from "react";
import NavBar from "./components/NavBar";
//import Asana from "./components/Asana";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import AboutYoga from "./pages/AboutYoga";
import YogaAsanas from "./pages/YogaAsanas";
import HomePage from "./pages/HomePage";
import AsanaDetails from "./pages/AsanaDetails";

const App=()=>{
  return(
    <Router>
      <NavBar />
     
      <Routes>
        
      <Route path="/" element={<HomePage />} />  
    <Route path="/asanas" element={<YogaAsanas />} />
    <Route path="/about" element={<AboutYoga />} />
    <Route path="/asana-details/:id" element={<AsanaDetails/>} />
     </Routes>
    </Router>
  );
};
export default App;