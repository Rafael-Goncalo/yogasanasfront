import {useContext} from "react";
import {AsanaContext} from "../context/AsanaContext";


function Asana({asana,onDelete,onEdit}){
  const {selectAsana}=useContext(AsanaContext);
    return(
        <div className="asana-card">
            <img src={asana.image} alt={asana.name} className="asana-image" />
            <div className="asana-content">
                <h3>{asana.name}</h3>
                <p><strong>Benefits</strong>{asana.benefits}</p>
                <div className="instruction-list">
                <strong>Instructions:</strong>
                <ul>
                 {Array.isArray(asana.instruction)?(
                    asana.instruction.map((step,index)=>(
                        <p key={index}>{step}</p>
                    ))
                ):(
                    <p>{asana.instruction}</p>
                 )}
                </ul>
                </div>

                <div className="asana-buttons">
                    {onDelete &&(
                        <button className="delete-btn" onClick={()=>onDelete(asana.id)}>
                            Delete
                        </button>
                    )}
                     {onEdit &&(
                        <button className="edit-btn" onClick={()=>onEdit(asana.id)}>
                            Edit
                        </button>
                    )}
                    <button className="select-btn" onClick={()=>selectAsana(asana)}>Select</button>

                </div>
            </div>
        </div>
    );
};
export default Asana;