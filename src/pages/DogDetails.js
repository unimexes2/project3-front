
 import { useState, useEffect } from "react";
 import { Link, useParams } from "react-router-dom";
 import axios from "axios";
 
 function DogDetails () {
   const [dog, setDog] = useState(null);
   const { dogId } = useParams();
debugger
  function getDog (id) {
    axios
      .get("http://localhost:3000/dogs/" + id)
      .then((response) => {
        const oneDog = response.data;
        setDog(oneDog);
        console.log("PERRRRRRRROOOOOO:", dog)

      })
      .catch((error) => console.log(error));
    };

    // useEffect(()=> { 
    //   DogDetails();
    // }, [] );

    getDog(dogId);

    return (
     <div className="DogDetails">
       {dog ? (
         <>
           <h1>{dog.name}</h1>
           <p>{dog.breed}</p>
         </>       ): <></>}

 
       <Link to="/dogs">
         <button>Back to list</button>
       </Link>
     </div>
   );
 }
 
 export default DogDetails;
