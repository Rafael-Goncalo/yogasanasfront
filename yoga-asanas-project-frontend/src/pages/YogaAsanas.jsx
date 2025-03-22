import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";

const YogaAsanas=()=>{
  const[data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/users")
    .then(res=>res.json())
    .then(json=>setData(json))
    .catch(err=>console.log(err));

  },[]);
  return(
    <main className="asana-page">
    <h2 className="page-title">Yoga Asanas</h2>
    <div className="card-container">
  
      {data.map((set)=>(
        <div className="yoga-card" key={set.id}>
          <h3>{set.category}</h3>
        <Link to={`/asanas/${set.id}`}>
          <img src={set.image} alt={set.category} className="card-image"/>
        </Link>
        </div>
      ))}
    </div>
    </main>
  );
};
export default YogaAsanas;