import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const AdMap =()=>{

    const [mapCode, setMapCode] = useState("");
    const [description, setDescription] = useState("");
   
   
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        let addStr = "addmap"
       let mapCode1= mapCode.replace( /https:\/\/www\.google\.com\//i,'')
       console.log("mapstring", mapCode)
       debugger
       const body = {
            mapCode:  mapCode1,
            description: description,
         
        };
    
        axios.post(API_URL+ addStr, body).then((response) => {
            console.log(response, "resp")
            setDescription("");
            setMapCode("");
            
          });
        };


        return(<div className="inputreturn">
             <form className="addanimal" onSubmit={handleSubmit}>
           <div className="displayColumn" style={{"max-width":"600px"}}>
            <label className="labelLeftBold">Google map link string </label>
            <input
              className="form-control"
              style={{width:"300px"}}
              type="text"
              name="mapCode"
              onChange={(e) => setMapCode(e.target.value)}
              value={mapCode}
            />
             </div>
         
          <div className="displayColumn"style={{"max-width":"600px"}}>
            <label className="labelLeftBold">Description</label>
            <textarea
            className="form-textarea"
             rows="4"
              cols="50"
             
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              style={{heigth:"600px", width:"300px"}}
            />
             </div>
             <button type="submit" className="btn btn-primary" style={{margin :"auto" ,color:"white",  marginBottom:"10px"}}>
          Save to server
        </button>

        </form>




        </div>



        )







}
export default AdMap;