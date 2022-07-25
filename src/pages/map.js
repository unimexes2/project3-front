import CarouselBasement  from "../components/carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import protectlogo from "../pictures/protectora.png"
function Map() {
  const [mapId, setMap] = useState(null);
  const [desc, setDesc]= useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/map")
      .then((response) => {
debugger
        console.log(response.data[0].mapCode,"response")
        setDesc(response.data[0].description);
        setMap(response.data[0].mapCode);
        //
      });
  }, []);

    return (
      
      <div className="main-container">
   <p>  {desc}           </p>
   
   {mapId?<iframe style={{width:600, height:400}}src={"https://www.google.com/"+mapId+ 'width="640" height="480"'}></iframe>:<></>

    }


       
       
  
  
      </div>
    );
  }
  
  export default Map;
  