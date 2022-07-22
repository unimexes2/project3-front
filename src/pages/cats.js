import { useState, useEffect } from "react";
import axios from "axios";
function CatsList(props) {
  var [cats, setCats] = useState([]);
  const [search, setSearch] = useState([])


  useEffect(() => {
    axios
      .get("http://localhost:3000/cats")
      .then((response) => {

        setCats([...response.data]);
        setSearch([...response.data]);
      });
  }, []);


  const doSearchByBreed = (element) => {
    cats = [...search];
    console.log("serch", search)
    let searchResult = cats.filter((cat) => {
      // console.log(cat.name, "cat name", element)
      if (cat.breed.toLowerCase().includes(element.toLowerCase())) {
        return cat
      }

    })

    setCats(searchResult);

  };

  const doSearchBySize = (element) => {
    cats = [...search];
    console.log("search", search)
    let searchResult = cats.filter((cat) => {
      let catWeight = cat.weight
      switch (element) {
          case 'pequeño':
            return catWeight < 5;
            break;
          case 'mediano':
            return catWeight > 5 && catWeight < 10;
            break;
          case 'grande':
              return catWeight > 10;
            break;
          default:
            return catWeight
            break;
        }

    })

    setCats(searchResult);

  };

  const doSearchByAge = (element) => {
    cats = [...search];
    console.log("search", search)
    let searchResult = cats.filter((cat) => {
      let catAge = cat.age
      switch (element) {
          case 'cachorro':
            return catAge < 5;
            break;
          case 'joven':
            return catAge > 5 && catAge < 10;
            break;
          case 'adulto':
            return catAge > 10
            break;
          default:
            return catAge;
            break;
        }

    })

    setCats(searchResult);

  };



  console.log(cats)
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

        {cats.map((cat) => {








          return (
            <div>
              <img className="imgtmbl" src={cat.profilePicture} />
              <a href={"/cat/" + cat._id}>  
              <h4>{cat.name}</h4></a>
              <h6>Breed: {cat.breed}</h6>
              <h6>Description:{cat.description}</h6>
              <h6>Weight:{cat.weight}</h6>
              <h6>Age:{cat.age}</h6>
            </div>
          );

        })}




      </div>




    </div>
  )
}

export default CatsList;