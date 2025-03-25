import {useContext,useState} from "react";//useContext is used to access global context
import {AsanaContext} from "../context/AsanaContext";
import Asana from "../components/Asana";
import {useNavigate} from "react-router-dom";

function SequenceAsana(){
    const {selectedAsanas,removeAsana,selectedYogaSetId}=useContext(AsanaContext);// that shows selected asanas and lets us update and delete
    const [asanas,setAsanas]=useState(selectedAsanas);
    const [editingId,setEditingId]=useState();

    const navigate=useNavigate();

    

    const handleDelete=(asanaId)=>{
        const updated=asanas.filter((a)=>a.id!==asanaId);
        setAsanas(updated);
        removeAsana(asanaId);//function to delete using remove which updates context and re-renders the list
    };
    const handleEdit=(asana)=>{
       navigate("/edit-asana",{
        state:{
            asana,
            yogaSetId:selectedYogaSetId//editing a selected yoga id
        }
       })
};


    return(
        <div className="sequence-asanas-page">
            <h2>Selected Asanas</h2>
            {asanas.length===0?(
                <p>No asanas selected yet.</p>
            ):(
              asanas.map((asana)=>(//renders them using asana components
                    <Asana
                    key={asana.id}
                    asana={asana}
                    onDelete={handleDelete}
                    onEdit={handleEdit} />
                    
                ))
        )}
        </div>
    );
}
export default SequenceAsana;