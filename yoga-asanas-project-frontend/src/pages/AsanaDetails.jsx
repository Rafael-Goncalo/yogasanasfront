import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import Asana from "../components/Asana";
import {Link} from "react-router-dom";

function AsanaDetails(){
    const {id}=useParams();//grabs id from the url
    const [yogaSet, setYogaSet]=useState();//holdds data for one yoga set

    useEffect(()=>{
        axios.get(`http://localhost:4000/users/${id}`)//gets one yoga set by id
        .then((response)=>{
            setYogaSet(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id]);
   

if(!yogaSet){
    return <p>Loading</p>//show loaing until data is fetched
}

 return(
    <div className="asana-details-container">
        <h2>{yogaSet.category}</h2>
        {yogaSet.asanas.map(asana=>(//loops through asanas array and renders an asana card for each
            <Asana 
            key={asana.id}// since It contain asana.jsx component s this page automatically gets submit button
            asana={asana}
            yogaSetId={yogaSet.id}
            />
           

        ))}
        
        <div className="sequence-link-container">
            <Link to="/sequence-asanas" className="view-sequence-btn">View Sequence</Link>
        </div>
    </div>
 );
};
export default AsanaDetails;