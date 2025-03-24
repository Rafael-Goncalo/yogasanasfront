import React from "react";
import NavBar from "./components/NavBar";
//import Asana from "./components/Asana";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import AboutYoga from "./pages/AboutYoga";
import YogaAsanas from "./pages/YogaAsanas";
import HomePage from "./pages/HomePage";
import AsanaDetails from "./pages/AsanaDetails";
import {AsanaProvider} from "./context/AsanaContext";
import SequenceAsana from "./pages/SequenceAsana.jsx";

const App=()=>{
  return(
    <AsanaProvider>
    <Router>
      <NavBar />
     
      <Routes>
        
      <Route path="/" element={<HomePage />} />  
    <Route path="/asanas" element={<YogaAsanas />} />
    <Route path="/about" element={<AboutYoga />} />
    <Route path="/asana-details/:id" element={<AsanaDetails/>} />
    <Route path="/sequence-asanas" element={<SequenceAsana />}/>
     </Routes>
    </Router>
    </AsanaProvider>
  );
};
export default App;