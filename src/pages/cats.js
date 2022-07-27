import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { Link } from "react-router-dom";

function CatsList(props) {
  var [cats, setCats] = useState([]);
  const [search, setSearch] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/cats").then((response) => {
      setCats([...response.data]);
      setSearch([...response.data]);
    });
  }, []);

  const doSearchByBreed = (element) => {
    cats = [...search];
    console.log("serch", search);
    let searchResult = cats.filter((cat) => {
      if (cat.breed.toLowerCase().includes(element.toLowerCase())) {
        return cat;
      }
    });

    setCats(searchResult);
  };

  const doSearchBySize = (element) => {
    cats = [...search];
    console.log("search", search);
    let searchResult = cats.filter((cat) => {
      let catWeight = cat.weight;
      switch (element) {
        case "pequeño":
          return catWeight < 5;

        case "mediano":
          return catWeight > 5 && catWeight < 10;

        case "grande":
          return catWeight > 10;

        default:
          return catWeight;
      }
    });

    setCats(searchResult);
  };

  const doSearchByAge = (element) => {
    cats = [...search];
    console.log("search", search);
    let searchResult = cats.filter((cat) => {
      let catAge = cat.age;
      switch (element) {
        case "cachorro":
          return catAge < 5;

        case "joven":
          return catAge > 5 && catAge < 10;

        case "adulto":
          return catAge > 10;

        default:
          return catAge;
      }
    });

    setCats(searchResult);
  };

  const deleteCat = (id) => {
    console.log(id, "llega");
    axios
      .delete(`http://localhost:3000/cats/` + id.target.id)
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
          <option value="todos">Todos</option>
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
          <option value="todos">Todos</option>
          <option value="cachorro">Cachorro</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto</option>
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
        {cats.map((cat) => {
          if (cat.isAdopted) {
            return;
          }
          
          return (
            <form onSubmit={deleteCat} id={cat._id}>
            <div className="w3-container w3-teal" style={{ margin: "20px" }}>
                <h1>{cat.name}</h1>
              </div>

              <div className="w3-content">
                <div className="w3-row w3-margin">
                  <div className="w3-third">

                  <Link to={"/cat/" + cat._id}>
                      <img
                        src={cat.pictures[0]}
                        style={{ width: "100%", minheight: "200px" }}
                      />
                    </Link>
                  </div>
                  <div className="w3-twothird w3-container">
                    <h6>Breed: {cat.breed}</h6>
                    <h6>Weight: {cat.weight} Kg.</h6>
                    <h6>Age: {cat.age} years</h6>
                    <h6>Sex: {cat.sex}</h6>
                    <p>{cat.description}</p>
                  </div>
                </div>
              </div>

              <div>
                <h6></h6>

                {isLoggedIn ? <button type="submit">Delete Cat</button> : <></>}
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
}

export default CatsList;