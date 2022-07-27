import { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function DogDetails() {
  const navigate = useNavigate();
  const [dog, setDog] = useState(null);
  const { dogId } = useParams();

  function getDog(id) {
    axios
      .get("http://localhost:3000/dogs/" + id)
      .then((response) => {
        const oneDog = response.data;
        setDog(oneDog);
      })
      .catch((error) => console.log(error));
  }

  function handleAdopt(){
    let isAdopted= true;
    const requestBody = { isAdopted };
    axios
    .put(`http://localhost:3000/dogs/${dogId}`, requestBody)
    .then((response) => {

      navigate(`/dogs`)
    });
};

   useEffect(()=> {
    getDog(dogId);
   }, [] );

 

  return (
    <div className="dogDetails">
      {dog ? (
        <>
          <h1>Nombre: {dog.name}</h1>

          <div><p>Raza:</p> </div>
                    <h6>{dog.breed}</h6>

          <p>Descripcion: {dog.description}</p>
          <p>Peso: {dog.weight} Kg.</p>
          <p>Edad: {dog.age} years</p>
          <p>Sexo: {dog.sex}</p>
          
          <img className="imgtmbl" src={dog.pictures[0]} />  <button  onClick={handleAdopt}>ADOPTADO!!!</button>


        </>
      ) : (
        <></>
      )}

      <Link to="/dogs">
        <button>Volver al listado</button>
      </Link>

      <Link to={`/dogs/edit/${dogId}`}>
        <button>Editar Perro</button>
      </Link>
    </div>
  );
}

export default DogDetails;
