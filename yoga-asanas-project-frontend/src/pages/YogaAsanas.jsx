import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const YogaAsanas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="asana-page">
      
    <h2 className="page-title">Yoga Asanas</h2>
    <div className="card-container">
  
      {data.map((set)=>(
        <div className="yoga-card" key={set.id}>
          <h3>{set.category}</h3>
        <Link to={`/asana-details/${set.id}`}>
          <img src={set.image} alt={set.category} className="card-image"/>
        </Link>
       </div>
      ))}
    </div>
    <div className="add-button-container">
    <Link to="/addAsana" className="add-asana-btn">Add new Asana</Link>
    </div>
    </main>
  );
};
export default YogaAsanas;
