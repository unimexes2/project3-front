import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";

function EditDogPage() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [description, setDescription] = useState("");

  const { dogId } = useParams();      
  const navigate = useNavigate();   

  useEffect(() => {                                  
    axios
      .get(`http://localhost:3000/dogs/${dogId}`)
      .then((response) => {

        const oneDog = response.data;
        setName(oneDog.name);
        setBreed(oneDog.breed);
        setAge(oneDog.age);
        setWeight(oneDog.weight);
        setDescription(oneDog.description);
      })
      .catch((error) => console.log(error));
    
  }, [dogId]);

  const handleFormSubmit = (e) => {                     
    e.preventDefault();
    const requestBody = { name, breed, age, weight, description };
 
    axios
      .put(`http://localhost:3000/dogs/${dogId}`, requestBody)
      .then((response) => {

        navigate(`/dogs/${dogId}`)
      });
  };

  return (
    <div className="EditDogPage">
      <h3>Edit {name}</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Breed:</label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditDogPage;
