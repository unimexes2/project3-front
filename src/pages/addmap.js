import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
    
        axios.post("http://localhost:3000/" + addStr, body).then((response) => {
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
              type="text"
              name="mapCode"
              onChange={(e) => setMapCode(e.target.value)}
              value={mapCode}
            />
             </div>
         
          <div className="displayColumn"style={{"max-width":"600px"}}>
            <label className="labelLeftBold">Description</label>
            <textarea
             rows="4"
              cols="50"
              className="form-control"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              style={{"heigth":"600px"}}
            />
             </div>
             <button type="submit" className="btn-success">
          Save to server
        </button>

        </form>




        </div>



        )







}
export default AdMap;