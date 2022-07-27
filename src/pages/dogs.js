import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { Link } from "react-router-dom";

function DogsList(props) {
  var [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/dogs").then((response) => {
      setDogs([...response.data]);
      setSearch([...response.data]);
    });
  }, []);

  const doSearchByBreed = (element) => {
    dogs = [...search];
    console.log("serch", search);
    let searchResult = dogs.filter((dog) => {
      if (dog.breed.toLowerCase().includes(element.toLowerCase())) {
        return dog;
      }
    });

    setDogs(searchResult);
  };

  const doSearchBySize = (element) => {
    dogs = [...search];
    console.log("search", search);
    let searchResult = dogs.filter((dog) => {
      let dogWeight = dog.weight;
      switch (element) {
        case "pequeño":
          return dogWeight < 5;

        case "mediano":
          return dogWeight > 5 && dogWeight < 10;

        case "grande":
          return dogWeight > 10;

        default:
          return dogWeight;
      }
    });

    setDogs(searchResult);
  };

  const doSearchByAge = (element) => {
    dogs = [...search];
    console.log("search", search);
    let searchResult = dogs.filter((dog) => {
      let dogAge = dog.age;
      switch (element) {
        case "cachorro":
          return dogAge < 5;

        case "joven":
          return dogAge > 5 && dogAge < 10;

        case "adulto":
          return dogAge > 10;

        default:
          return dogAge;
      }
    });

    setDogs(searchResult);
  }

  const doSearchBySex = (element) => {
    dogs = [...search];
    console.log("search", search);
   if( element!=="todos"){
    let searchResult = dogs.filter((dog) => {
  if(dog.sex==element){return element}     
      })
   

    setDogs(searchResult);}
   else{ setDogs(dogs)}
  };

  const deleteDog = (id) => {
    console.log(id, "llega");
    axios
      .delete(`http://localhost:3000/dogs/` + id.target.id)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    flexDirection: "row",
    allignItem: "center",
    overflow: "scroll",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="w3-container w3-teal"
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "10px solid rgb(212, 212, 212)",
        }}
      >
        <label>Buscar por raza</label>
        <input
          name="Search"
          onChange={(e) => doSearchByBreed(e.target.value)}
        ></input>

        <label>Buscar por tamaño</label>
        <select
          id="size"
          list="size"
          name="Size"
          onChange={(e) => doSearchBySize(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>

        <label>Buscar por edad</label>
        <select
          id="age"
          list="age"
          name="Age"
          onChange={(e) => doSearchByAge(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="cachorro">Cachorro</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto</option>
        </select>

        <label>Buscar por sexo</label>
        <select
          id="sex"
          list="sex"
          name="Sex"
          onChange={(e) => doSearchBySex(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
      </div>

      <div
        className="list-group"
        style={{
          height: "600px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {dogs.map((dog) => {
          if (dog.isAdopted) {
            return;
          }

          return (
            <form onSubmit={deleteDog} id={dog._id}>
              <div className="w3-container w3-teal" style={{ margin: "20px" }}>
                <h1>{dog.name}</h1>
              </div>

              <div className="w3-content">
                <div className="w3-row w3-margin">
                  <div className="w3-third">
                    <Link to={"/dog/" + dog._id}>
                      <img
                        src={dog.pictures[0]} 
                        style={{ width: "100%", minheight: "200px",boxShadow: "10px 10px 5px lightblue" }}
                      />
                    </Link>
                  </div>
                  <div className="w3-twothird w3-container">
                  <div style={{textTransform: "uppercase"}}>
                    <h6>Raza: {dog.breed}</h6>
                    <h6>Peso: {dog.weight} Kg.</h6>
                    <h6>Edad: {dog.age} years</h6>
                    <h6>Sexo: {dog.sex}</h6>
                    </div>
                    <p>{dog.description}</p>
                  </div>
                </div>
              </div>

              <div>
                <h6></h6>

                {isLoggedIn ? <button className="btn btn-danger" style={{ margin:"10px" , fontFamily:"fantasy"}} type="submit">Borrar Perro</button> : <></>}
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
}

export default DogsList;
