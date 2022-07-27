import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCatPage() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState(0);
  const [description, setDescription] = useState("");

  const { catId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cats/${catId}`)
      .then((response) => {
        const oneCat = response.data;
        setName(oneCat.name);
        setBreed(oneCat.breed);
        setAge(oneCat.age);
        setSex(oneCat.sex);
        setWeight(oneCat.weight);
        setDescription(oneCat.description);
      })
      .catch((error) => console.log(error));
  }, [catId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, breed, age, sex, weight, description };

    axios
      .put(`http://localhost:3000/cats/${catId}`, requestBody)
      .then((response) => {
        navigate(`/cats/${catId}`);
        navigate(`/cat/${catId}`);
      });
  };

  return (
    <div className="EditCatPage">
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

export default EditCatPage;