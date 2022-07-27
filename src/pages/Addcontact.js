import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AddContact = () => {


  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [foto, setFoto] = useState([])
  const fotoArr = [];

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
    const body = {
        firstName: firstName,
        lastName: lastName,
        phone:phone,
        email: email,
        foto: foto,
       };
console.log(body)



    axios.post("http://localhost:3000/addcontact" , body).then((response) => {
      console.log(response, "resp")
     
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
    



    <div className="inputreturn">
      <form className="addanimal" onSubmit={handleSubmit}>
       
        <div className="addForm">
         
      


          <div className="displayColumn">
            <label className="labelLeftBold">Name: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Breed: </label>
            <input
              className="form-control"
              type="text"
              name="breed"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Age: </label>
            <input
              className="form-controlTA"
              type="text"
              name="age"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="displayColumn">
            <label className="labelLeftBold">Weight </label>
            <input
              className="form-controlTA"
              type="text"
              name="weight"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          
 
       
          <div className="displayColumn">
            <label className="labelLeftBold">Pictures: </label>

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

        </div>
        <button type="submit" className="btn-success">
          Save to server
        </button>
      </form>


    </div>

  );
};

export default AddContact;
