

import { useState, useEffect } from "react";

import React from "react";

import axios from "axios";
const AdSettings = () => {
    const [foto, setFoto] = useState("")
    const fotoArr = [];
    const [fotoCarusel, setFotoCarusel] = useState([])
    const fotoArrCar = [];


    const [logo, setHeader] = useState("");
    const [navbarlogo, setDescription] = useState("");
   

    

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
          navbarlogo: foto,
           
        };

        axios.post("http://localhost:3000/settings", body).then((response) => {
            console.log(response, "resp")
         
            

        });

        setFoto("")

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
            setFoto(response.data.fileUrl)
          })
    
          .catch(err => console.log("Error while uploading the file: ", err));
      };
    
    
      useEffect(() => {
    
      }, [foto])
    


    return (<div className="inputreturn">
        <form className="displaystory" onSubmit={handleSubmit}>
           <input
              className="form-upload"
              type="file"
              name="pictures"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileUpload(e)}
            />
  
              <div className="img-wrap" id={foto}>
                <span
                  onClick={deletePrevImg} className="close" id={foto}>&times;</span>
                <img className="preview" src={foto} />

              </div>



<button type="submit" className="btn btn-primary" style={{margin :"auto" ,color:"white",  marginBottom:"10px"}}>
                Save to server
            </button>

        </form>




    </div>



    )







}
export default AdSettings;