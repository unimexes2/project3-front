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
          <h1>Name: {dog.name}</h1>
          <div><p>Breed:</p> </div>
                    <h6>{dog.breed}</h6>
          <p>Description: {dog.description}</p>
          <p>Weight: {dog.weight}</p>
          <p>Age: {dog.age}</p>
          
          <img className="imgtmbl" src={dog.pictures[0]} />  <button  onClick={handleAdopt}>YA ADOPTED</button>
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
