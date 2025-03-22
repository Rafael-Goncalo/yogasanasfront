import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import Asana from "../components/Asana";

function AsanaDetails(){
    const {id}=useParams();
    const [yogaSet, setYogaSet]=useState();

    useEffect(()=>{
        axios.get(`http://localhost:4000/users/${id}`)
        .then((response)=>{
            setYogaSet(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id]);
    const handleDelete=(asanaId)=>{
        const updatedAsanas=yogaSet.asanas.filter(a=>a.id!==asanaId);
        const updatedYogaSet={...yogaSet,asanas:updatedAsanas};

        axios.put(`http://localhost:4000/users/${id}`,updatedYogaSet)
        .then(()=>{
            setYogaSet(updatedYogaSet);
        })
        .catch((error)=>console.log(error));
    };


const handleEdit=(asana)=>{
    alert(`Editing ${asana.name}`);
    };
    if(!yogaSet) return <p>Loading...</p>;
 return(
    <div className="asana-details-container">
        <h2>{yogaSet.category}</h2>
        {yogaSet.asanas.map(asana=>(
            <Asana 
            key={asana.id}
            asana={asana}
            onDelete={handleDelete}
            onEdit={handleEdit}
            />

        ))}
    </div>
 );
};
export default AsanaDetails;