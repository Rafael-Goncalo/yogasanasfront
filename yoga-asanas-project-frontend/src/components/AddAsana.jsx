import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useState} from "react";
import { API_URL } from "../config/config.js";


function AddAsana(){
    const [formData,setFormData]=useState({
        name:"",
        description:"",
        image:"",
        category:""
    });

   
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
            const res=await axios.post(`${API_URL}/users`,formData);
            alert("New asana added");
            navigate("/asanas",{state:{createdId:res.data.id}});
        }catch(error){
            console.log(error);
            alert("something went wrong");
        }
    }



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


        </main>
    );
}
export default AddAsana;