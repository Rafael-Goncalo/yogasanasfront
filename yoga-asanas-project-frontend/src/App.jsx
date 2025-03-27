import React from "react";
import NavBar from "./components/NavBar";
//import Asana from "./components/Asana";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutYoga from "./pages/AboutYoga";
import YogaAsanas from "./pages/YogaAsanas";
import HomePage from "./pages/HomePage";
import AsanaDetails from "./pages/AsanaDetails";
import { AsanaProvider } from "./context/AsanaContext";
import SequenceAsana from "./pages/SequenceAsana.jsx";
import UpdateAsana from "./pages/UpdateAsana.jsx";
import AddAsana from "./components/AddAsana.jsx";

const App = () => {
  return (
    <AsanaProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/asanas" element={<YogaAsanas />} />
          <Route path="/about" element={<AboutYoga />} />
          <Route path="/asana-details/:id" element={<AsanaDetails />} />
          <Route path="/sequence-asanas" element={<SequenceAsana />} />
          <Route path="/edit-asana/:asanaId" element={<UpdateAsana />} />
          <Route path="/addAsana" element={<AddAsana />} />
        </Routes>
      </Router>
    </AsanaProvider>
  );
};
export default App;
