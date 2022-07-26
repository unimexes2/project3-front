import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function DogDetails() {
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

   useEffect(()=> {
    getDog(dogId);
   }, [] );

 

  return (
    <div className="DogDetails">
      {dog ? (
        <>
          <h1>Name: {dog.name}</h1>
          <p>Breed: {dog.breed}</p>
          <p>Description: {dog.description}</p>
          <p>Weight: {dog.weight}</p>
          <p>Age: {dog.age}</p>
          <img className="imgtmbl" src={dog.pictures[0]} />
        </>
      ) : (
        <></>
      )}

      <Link to="/dogs">
        <button>Back to list</button>
      </Link>

      <Link to={`/dogs/edit/${dogId}`}>
        <button>Edit Dog</button>
      </Link>
    </div>
  );
}

export default DogDetails;
