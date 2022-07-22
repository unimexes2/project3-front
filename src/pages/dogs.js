import { useState, useEffect } from "react";
import axios from "axios";
function DogsList(props) {
  var [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState([])


  useEffect(() => {
    axios
      .get("http://localhost:3000/dogs")
      .then((response) => {

        setDogs([...response.data]);
        setSearch([...response.data]);
      });
  }, []);


  const doSearchByBreed = (element) => {
    dogs = [...search];
    console.log("serch", search)
    let searchResult = dogs.filter((dog) => {
      if (dog.breed.toLowerCase().includes(element.toLowerCase())) {
        return dog
      }

    })

    setDogs(searchResult);

  };

  const doSearchBySize = (element) => {
    dogs = [...search];
    console.log("search", search)
    let searchResult = dogs.filter((dog) => {
      let dogWeight = dog.weight
      switch (element) {
          case 'pequeño':
            return dogWeight < 5;
            break;
          case 'mediano':
            return dogWeight > 5 && dogWeight < 10;
            break;
          case 'grande':
              return dogWeight > 10;
            break;
          default:
            return dogWeight
            break;
        }

    })

    setDogs(searchResult);

  };

  const doSearchByAge = (element) => {
    dogs = [...search];
    console.log("search", search)
    let searchResult = dogs.filter((dog) => {
      let dogAge = dog.age
      switch (element) {
          case 'cachorro':
            return dogAge < 5;
            break;
          case 'joven':
            return dogAge > 5 && dogAge < 10;
            break;
          case 'adulto':
            return dogAge > 10
            break;
          default:
            return dogAge;
            break;
        }

    })

    setDogs(searchResult);

  };



  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    flexDirection: 'row',
    allignItem: "center",
    overflow: 'scroll',

  };
  return (
    <div style={{ display: 'flex', }}>
      <div style={{ backgroundColor:"white", border:"5px solid red" }}>

        <label>Buscar por raza</label>
        <input name="Search" onChange={(e) => doSearchByBreed(e.target.value)}>
        </input>

         <label>Buscar por tamaño</label>
          <select id="size" list="size" name="Size" onChange={(e) => doSearchBySize(e.target.value)}>  
            <option value="all">All</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>


       <label>Buscar por edad</label>
        <select id="age" list="age" name="Age" onChange={(e) => doSearchByAge(e.target.value)}>  
          <option value="all">All</option>
          <option value="cachorro">Cachorro</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto</option>
        </select>
  

      </div>



      <div className="list-group" style={{ height: '600px', display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>

        {dogs.map((dog) => {








          return (
            <div>
              <img className="imgtmbl" src={dog.profilePicture} />
              <a href={"/dog/" + dog._id}>  
              <h4>{dog.name}</h4></a>
              <h6>Breed: {dog.breed}</h6>
              <h6>Description:{dog.description}</h6>
              <h6>Weight:{dog.weight}</h6>
              <h6>Age:{dog.age}</h6>
            </div>
          );

        })}




      </div>




    </div>
  )
}

export default DogsList;
