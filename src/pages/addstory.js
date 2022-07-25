

import { useState, useEffect } from "react";

import React from "react";

import axios from "axios";
const AdStories = () => {
    const [foto, setFoto] = useState([])
    const fotoArr = [];

    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");
    const [contactPerson, setPerson] = useState("");

    let addStr = "addstory"

    const deletePrevImg = ((event) => {
        console.log("event", event.target.id)
        let deletedArr = foto.filter((el) => {
          console.log("elem", el)
    
          if (el === event.target.id) { } else { return el }
    
        })
    
        setFoto([...deletedArr])
    
    
    
    
    
    
      })









    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            header: header,
            description: description,
            contactPerson: contactPerson,
            pictures: foto
        };

        axios.post("http://localhost:3000/" + addStr, body).then((response) => {
            console.log(response, "resp")
            setDescription("");
            setHeader("");
            setPerson("");
            setFoto([])

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
    


    return (<div className="displaystory">
        <form className="displaystory" onSubmit={handleSubmit}>
          
            <div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">Header</label>
                <textarea
                    className="form-control2"
                    type="text"             
                    name="header"
                    onChange={(e) => setHeader(e.target.value)}
                    value={header}
                />
            </div>

            <div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">Description</label>
                <textarea
                    rows="4"
                    cols="50"
                    className="form-control2"
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    style={{ "heigth": "600px" }}
                />
            </div>

        
            <input
              className="form-upload"
              type="file"
              name="pictures"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileUpload(e)}
            />
  {foto.map((image) => {
            return (
              <div className="img-wrap" id={image}>
                <span
                  onClick={deletePrevImg} className="close" id={image}>&times;</span>
                <img className="preview" src={image} />

              </div>


            );



          })}

            <button type="submit" className="btn-success">
                Save to server
            </button>

        </form>




    </div>



    )







}
export default AdStories;