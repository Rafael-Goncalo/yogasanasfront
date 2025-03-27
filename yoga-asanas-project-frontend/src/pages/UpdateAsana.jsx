import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/config.js";

function UpdateAsana() {
  const { asanaId } = useParams();
  console.log("created", asanaId);
  const location = useLocation();
  const navigate = useNavigate();
  const { asana, yogaSetId } = location.state || {};

  const [updatedAsana, setUpdatedAsana] = useState({
    id: "",
    name: "",
    benefits: "",
    instruction: "",
    image: "",
  });

  // Pre-fill the form with selected asana details
  useEffect(() => {
    axios
      .get(`${API_URL}/users/${asanaId[0]}`)
      .then((res) => {
        const yogaSet = res.data.asanas.find(
          (oneAsana) => oneAsana.id == asanaId
        );
        console.log("yoga id", yogaSet);
        setUpdatedAsana(yogaSet);
      })
      .catch((err) => console.log(err));
  }, [asana]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAsana((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    /*const formattedAsana = {
...updatedAsana,
instruction: updatedAsana.instruction
? updatedAsana.instruction.split("\n")
: []
};*/

    axios.get(`${API_URL}/users/${asanaId[0]}`).then((res) => {
      const yogaSet = res.data;
      const updatedAsanas = yogaSet.asanas.map((a) => {
        if (a.id == asanaId) {
          return updatedAsana;
        } else {
          return a;
        }
      });
      
      const updatedYogaSet = {
        ...yogaSet,
        asanas: updatedAsanas,
      };

      axios
        .put(`${API_URL}/users/${asanaId[0]}`, updatedYogaSet)
        .then(() => {
          alert("Asana updated!");
          navigate("/sequence-asanas");
        })
        .catch((err) => console.error("PUT error:", err));
    });
  };

  return (
    <div className="edit-asana-page">
      <h2>Edit Asanas:</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={updatedAsana.name || ""}
        onChange={handleChange}
      />

      <label>Benefits:</label>
      <input
        type="text"
        name="benefits"
        value={updatedAsana.benefits || ""}
        onChange={handleChange}
      />

      <label>Instructions (one per line):</label>
      <textarea
        name="instruction"
        value={updatedAsana.instruction || ""}
        onChange={handleChange}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default UpdateAsana;
