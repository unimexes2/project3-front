import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const AdMap =()=>{

    const [mapCode, setMapCode] = useState("");
    const [description, setDescription] = useState("");
   
   
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        let addStr = "addmap"
       
        const body = {
            mapCode:  mapCode,
            description: description,
         
        };
    
        axios.post("http://localhost:3000/" + addStr, body).then((response) => {
            console.log(response, "resp")
            setDescription("");
            setMapCode("");
            
          });
        };


        return(<div>
           <div className="displayColumn">
            <label className="labelLeftBold">Google map link string </label>
            <input
              className="form-control"
              type="text"
              name="mapCode"
              onChange={(e) => setMapCode(e.target.value)}
              value={mapCode}
            />
             </div>
         
          <div className="displayColumn">
            <label className="labelLeftBold">Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
             </div>




        </div>



        )







}
export default AdMap;