import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
function EditDogPage() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState(0);
  const [description, setDescription] = useState("");

  const { dogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL+"/dogs/${dogId}")
      .then((response) => {
        const oneDog = response.data;
        setName(oneDog.name);
        setBreed(oneDog.breed);
        setAge(oneDog.age);
        setSex(oneDog.sex);
        setWeight(oneDog.weight);
        setDescription(oneDog.description);
      })
      .catch((error) => console.log(error));
  }, [dogId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, breed, age, sex, weight, description };

    axios
      .put(API_URL+"/dogs/${dogId}", requestBody)
      .then((response) => {
        navigate(`/dogs/${dogId}`);
        navigate(`/dog/${dogId}`);
      });
  };

  return (
    <div className="EditDogPage">
      <h3>Editar {name}</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Raza:</label>
        <input
          type="text"
          name="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <label>Edad:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Sexo:</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="hembra" defaultValue>
            Hembra
          </option>
          <option value="macho">Macho</option>
        </select>

        <label>Peso:</label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>Descripcion:</label>
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
