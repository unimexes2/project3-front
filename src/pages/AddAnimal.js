import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AddAnimal = () => {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");
  const [sex, setSex] = useState("hembra");
  const [description, setDescription] = useState("");
  const [admitionDate, setAdmitionDate] = useState("");
  const [views, setViews] = useState(0);
  const [type, setType] = useState("dog");
  const [foto, setFoto] = useState([])
  const fotoArr = [];

  const handleSelect = e => {
    setType(e.target.value);
    console.log("selected", e.target.value);
  };

  const handleSelectSex = e => {
    console.log("selected", e.target.value);
    setSex(e.target.value);
    
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("type is", type);

    let addStr = ""
    if (type === "dog") { addStr = "adddog" } else { addStr = "addcat" }
    
    const body = {
      name: name,
      breed: breed,
      sex:sex,
      age: age,
      weight: weight,
      profilePicture: profilePicture,
      pictures: foto,
      description: description,
      admitionDate: admitionDate,
      views: views,
      isAdopted:false,
    };


console.log(body)



    axios.post("http://localhost:3000/" + addStr, body).then((response) => {
      console.log(response, "resp")
      setType("")
      setName("");
      setBreed("");
      setAge("");
      setWeight("");
      setProfilePicture("");
      setDescription("");
      setAdmitionDate("");
      setViews("");
      setFoto([]);
      setSex([])
    });
  };


  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    axios.post("http://localhost:3000/upload", uploadData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log("server says", response)
        fotoArr.push(response.data.fileUrl)
        setFoto(foto => [...foto, response.data.fileUrl])

      }

      )
      .catch(err => console.log("Error while uploading the file: ", err));
  };


  useEffect(() => {

  }, [foto])

  const deletePrevImg = ((event) => {
    console.log("event", event.target.id)
    let deletedArr = foto.filter((el) => {
      console.log("elem", el)

      if (el === event.target.id) { } else { return el }

    })

    setFoto([...deletedArr])






  })

  return (
    <>
    <div className="inputreturn">
      <form className="addanimal" onSubmit={handleSubmit}>
               
          <div className="selectAnimal">
            <label>Select add new Cat or Dog:</label>
            <select value={type} onChange={handleSelect}>
              <option value="dog" >Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>


          <div className="selectSex">
            <label>Select Sex</label>
            <select value={sex} onChange={handleSelectSex}>
              <option value="hembra">Female</option>
              <option value="macho">Male</option>
            </select>
          </div>

          <div className="displayColumn">
            <label className="labelLeftBold">Name: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Breed: </label>
            <input
              className="form-control"
              type="text"
              name="breed"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Age: </label>
            <input
              className="form-control"
              type="number"
              name="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Weight </label>
            <input
              className="form-control"
              type="number"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
        
      

          <div className="displayColumn">
            <label className="labelLeftBold">Description: </label>
            <textarea
              className="form-textarea"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Admition Date: </label>
            <input
              className="form-control"
              type="date"
              name="admitionDate"
              onChange={(e) => setAdmitionDate(e.target.value)}
              value={admitionDate}
            />
          </div>
         
          <div className="displayColumn">
            <label className="labeCenterBold">Pictures: </label>

            <input
            
              className="form-upload"
              type="file"
              name="pictures"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileUpload(e)}
            />

          </div>



          <label>Your pictures</label>



          {foto.map((image) => {
            return (
              <div className="img-wrap" id={image}>
                <span
                  onClick={deletePrevImg} className="close" id={image}>&times;</span>
                <img className="preview" src={image} />

              </div>


            );



          })}


      <button type="submit" className="btn btn-primary" style={{margin :"auto" ,color:"white",  marginBottom:"10px"}}>
          Save to server
        </button>

      
      </form>


    </div>
    </>
  );
};

export default AddAnimal;
