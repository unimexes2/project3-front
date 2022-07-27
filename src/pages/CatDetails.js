import { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function CatDetails() {
  const navigate = useNavigate();
  const [cat, setCat] = useState(null);
  const { catId } = useParams();

  function getCat(id) {
    axios
      .get("http://localhost:3000/cats/" + id)
      .then((response) => {
        const oneCat = response.data;
        setCat(oneCat);
      })
      .catch((error) => console.log(error));
  }

  function handleAdopt(){
    let isAdopted= true;
    const requestBody = { isAdopted };
    axios
    .put(`http://localhost:3000/cats/${catId}`, requestBody)
    .then((response) => {

      navigate(`/cats`)
    });
};

   useEffect(()=> {
    getCat(catId);
   }, [] );

 

  return (
    <div className="catDetails">
      {cat ? (
        <>
          <h1>Name: {cat.name}</h1>

          <div><p>Breed:</p> </div>
                    <h6>{cat.breed}</h6>

          <p>Description: {cat.description}</p>
          <p>Weight: {cat.weight} Kg.</p>
          <p>Age: {cat.age} years</p>
          <p>Sex: {cat.sex}</p>

          <img className="imgtmbl" src={cat.pictures[0]} />  <button  onClick={handleAdopt}>YA ADOPTED</button>

        </>
      ) : (
        <></>
      )}

      <Link to="/cats">
        <button>Back to list</button>
      </Link>

      <Link to={`/cats/edit/${catId}`}>
        <button>Edit Cat</button>
      </Link>
    </div>
  );
}

export default CatDetails;