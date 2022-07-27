import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

  function handleAdopt() {
    let isAdopted = true;
    const requestBody = { isAdopted };
    axios
      .put(`http://localhost:3000/cats/${catId}`, requestBody)
      .then((response) => {
        navigate(`/cats`);
      });
  }

  useEffect(() => {
    getCat(catId);
  }, []);

  return (
    <div className="catDetails">
      {cat ? (
        <>
          <h1>Nombre: {cat.name}</h1>
          <div>
            <p>Raza:</p>{" "}
          </div>
          <h6>{cat.breed}</h6>
          <p>Descripcion: {cat.description}</p>
          <p>Peso: {cat.weight} Kg.</p>
          <p>Edad: {cat.age} years</p>
          <p>Sexo: {cat.sex}</p>
          <img className="imgtmbl" src={cat.pictures[0]} />{" "}
          <button onClick={handleAdopt}>ADOPTADO!!!</button>
        </>
      ) : (
        <></>
      )}

      <Link to="/cats">
        <button>Volver al listado</button>
      </Link>

      <Link to={`/cats/edit/${catId}`}>
        <button>Editar Gato</button>
      </Link>
    </div>
  );
}

export default CatDetails;
