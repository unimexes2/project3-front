import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

function DogDetails() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
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

  function handleAdopt() {
    let isAdopted = true;
    const requestBody = { isAdopted };
    axios
      .put(`http://localhost:3000/dogs/${dogId}`, requestBody)
      .then((response) => {
        navigate(`/dogs`);
      });
  }

  useEffect(() => {
    getDog(dogId);
  }, []);

  return (
    <div className="dogDetails">
      {dog ? (
        <div className="dogDetails">
                  <div>

         <h1 style={{color:"white"}} >{dog.name}</h1>
        
        <h6>Raza:{dog.breed}</h6>
     
   
      
      <h6>Peso: {dog.weight} Kg.</h6>
      <h6>Edad: {dog.age} years</h6>
      <h6>Sexo: {dog.sex}</h6>
      {dog.pictures.map((elem)=>{
       return <img className="imgtmbl" src={elem} />
      })}
          
         
         
         
         
          {isLoggedIn ?   
          <div>
          <button className="btn btn-success" style={{color:"white",  margin:"10px" , fontFamily:"fantasy"}} onClick={handleAdopt}>ADOPTADO</button>
          <Link to="/dogs">
        <button className="btn btn-warning" style={{ margin:"10px" , fontFamily:"fantasy"}}>Volver al listado</button>
      </Link>

      <Link to={`/dogs/edit/${dogId}`}>
        <button className="btn btn-primary" style={{color:"white",  margin:"10px" , fontFamily:"fantasy"}}>Editar Perro</button>
      </Link>
      </div>
               :<></>}
      
      </div>

         
      
          <div style={{width:600, height:400}}> 
          
          <h1 style={{color:"white"}}>Descripcion:</h1> <p>{dog.description}</p>
          </div>
         

        </div>
      ) : (
        <></>
      )}

      
    </div>
  );
}

export default DogDetails;
