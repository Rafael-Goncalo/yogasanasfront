import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import AboutYoga from "./pages/AboutYoga";
import YogaAsanas from "./pages/YogaAsanas";

const App=()=>{
  return(
    <Router>
      <NavBar />
      <Routes>
   
     <Route path="/about" element={<AboutYoga />} />
     </Routes>
    </Router>
  );
};
export default App;