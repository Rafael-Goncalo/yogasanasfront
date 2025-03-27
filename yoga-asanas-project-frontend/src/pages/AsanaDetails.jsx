import { API_URL } from "../config/config.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Asana from "../components/Asana";
import { Link } from "react-router-dom";

function AsanaDetails(){
    const {id}=useParams();
    const [yogaSet, setYogaSet]=useState();

    useEffect(()=>{
        axios.get(`${API_URL}/users/${id}`)
        .then((response)=>{
            setYogaSet(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id]);
   

if(!yogaSet){
    return <p>Loading</p>
}

  return (
    <div className="asana-details-container">
        <h2>{yogaSet.category}</h2>
        {yogaSet.asanas.map(asana=>(
            <Asana 
            key={asana.id}
            asana={asana}
            yogaSetId={yogaSet.id}
            />
        

        ))}
        <div className="sequence-link-container">
            {/* <Link to="/sequence-asanas" className="view-sequence-btn">View Sequence</Link> */}
        </div>
    </div>
  );
}
export default AsanaDetails;
