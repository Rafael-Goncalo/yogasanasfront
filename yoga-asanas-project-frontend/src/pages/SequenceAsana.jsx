import {useContext,useState} from "react";
import {AsanaContext} from "../context/AsanaContext";
import Asana from "../components/Asana";

function SequenceAsana(){
    const {selectedAsanas,removeAsana}=useContext(AsanaContext);
    const [asanas,setAsanas]=useState(selectedAsanas);

    const handleDelete=(asanaId)=>{
        const updated=asanas.filter((a)=>a.id!==asanaId);
        setAsanas(updated);
        removeAsana(asanaId);
    };
    const handleEdit=(asana)=>{

    }

    return(
        <div className="sequence-asanas-page">
            <h2>Selected Asanas</h2>
            {asanas.length===0?(
                <p>No asanas selected yet.</p>
            ):(
              asanas.map((asana)=>(
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