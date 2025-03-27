import React, { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/config.js";



const YogaAsanas = () => {
  const [data, setData] = useState([]);
  const [createdId,setCreatedId]=useState();
  const location=useLocation();

  useEffect(()=>{
    if(location.state && location.state.createdId){
      setCreatedId(location.state.createdId);
    }
  },[location.state]);

  useEffect(() => {
    axios
      .get(`${API_URL}/users`)
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);

  const handleDelete=(id)=>{
    axios.delete(`${API_URL}/users/${id}`)
    .then(()=>{
      alert("deleted");
      setData((prev)=>prev.filter((item)=>item.id!==id));
      if(id===createdId){
      setCreatedId();
      }
    }).catch(err=>console.log(err))
  };

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
        {set.id===createdId &&(
        <button className="delete-btn" onClick={()=>handleDelete(set.id)}>delete</button>
      )}
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
