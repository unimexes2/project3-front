

import { useState, useEffect } from "react";

import React from "react";

import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const AdSettings = () => {
    const [foto, setFoto] = useState("")
    const fotoArr = [];
    const [fotoCarusel, setFotoCarusel] = useState([])
    const fotoArrCar = [...fotoCarusel];


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
      

        axios.post(API_URL+"/settings", body).then((response) => {
            console.log(response, "resp")
          

        });

        setFoto("")

    };







    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        axios.post(API_URL+"/upload", uploadData, {
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
/////////////////////////////////////////////////////

const handleSubmitCar = (e) => {
  e.preventDefault();
  const body = {
    carusel: fotoCarusel,
     
  };

 
  axios.put(API_URL+"/carousel", body).then((response) => {
      console.log(response, "resp")
    

  });

  setFotoCarusel([])

};








      const handleFileUploadCarousel = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        axios.post(API_URL+"/upload", uploadData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            console.log("server says", response)
            fotoArrCar.push(response.data.fileUrl)
            setFotoCarusel(foto => [...fotoArrCar])
    
          }
    
          )
          .catch(err => console.log("Error while uploading the file: ", err));
      };
    
      useEffect(() => {
    
      }, [fotoCarusel])





      const deletePrevImgCar = ((event) => {
        console.log("event", event.target.id)
        let deletedArr = fotoCarusel.filter((el) => {
          console.log("elem", el)
    
          if (el === event.target.id) { } else { return el }
    
        })
    
        setFotoCarusel([...deletedArr])
      })






    return (
    <>
    <div className="inputreturn">
        <form className="displaystory" onSubmit={handleSubmit}>
         
         <h6>SITE LOGO CHANGE</h6>
         
           <input
              className="form-upload"
              type="file"
              name="pictures2"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileUpload(e)}
            />
  {foto?
              <div className="img-wrap" id={foto}>
                <span
                  onClick={deletePrevImg} className="close" id={foto}>&times;</span>
              
                <img className="preview" src={foto} />

              </div>
              
              
              :<></>
               }


<button type="submit" className="btn btn-primary" style={{margin :"auto" ,color:"white",  marginBottom:"10px"}}>
                Save to server
            </button>

        </form>




    </div>


    <div className="inputreturn">
        <form className="displaystory" onSubmit={handleSubmitCar}>
         
         <h6>CAURUSEL IMAGES CHANGE</h6>
         
           <input
              className="form-upload"
              type="file"
              name="pictures"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileUploadCarousel(e)}
            />

{fotoCarusel.map((image) => {
            return (
              <div className="img-wrap" id={image}>
                <span
                  onClick={deletePrevImgCar} className="close" id={image}>&times;</span>
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


    )







}
export default AdSettings;