
function Asana({asana,onDelete,onEdit}){
  
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
                    <button className="delete-btn" onClick={()=>onDelete(asana.id)}>Delete</button>
                    <button className="eidt-btn" onClick={()=>onEdit(asana)}>Edit</button>

                </div>
            </div>
        </div>
    );
};
export default Asana;