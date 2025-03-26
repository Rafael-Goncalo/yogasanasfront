import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useState} from "react";


function AddAsana(){
    const [formData,setFormData]=useState({
        name:"",
        description:"",
        image:"",
        category:""
    });

    const [createdAsana, setCreatedAsana] = useState ()
    const navigate=useNavigate();

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    
    async function handleSubmit(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:4000/users',formData);
            alert("New asana added");
            navigate("/asanas");
        }catch(error){
            console.log(error);
            alert("something went wrong");
        }
    }
const handleDelete = (id) => {
    if (!createdAsana)
        return ;
    axios.delete(`http://localhost:4000/users/${createdAsana.id}`)
    .then (()=>{
        alert("Deleted Successful")
        setCreatedAsana ();
    });
    
    };


    return(
        <main className="add-page">
        <div className="add-asana-container">
            <h2>Add new Asana</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Asana name" value={formData.name} onChange={handleChange} />
                <input type="text" name="image" placeholder="Image url" value={formData.image} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <button type="submit">Add Asana</button>
            </form>
           </div>

           {createdAsana &&(
            <div className="single-created-asana">
                <h3>{createdAsana.name}</h3>
                <img src={createdAsana.image} alt={createdAsana}/>
                <p>{createdAsana.category}</p>
                <p>{createdAsana.description}</p>
                <button className="delete-btn" onClick={()=>handleDelete(createdAsana.id)}>Delete</button>
            </div>
           )}


        </main>
    );
}
export default AddAsana;