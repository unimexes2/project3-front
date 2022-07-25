import CarouselBasement  from "../components/carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import protectlogo from "../pictures/protectora.png"
function Map() {
  const [mapId, setMap] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/map")
      .then((response) => {

        console.log(response.data[0].mapCode)

        setMap(response.data[0].mapCode);
        
      });
  }, []);

    return (
      
      <div className="main-container">
   

   <iframe src={mapId} width="640" height="480"></iframe>




       
       
  
  
      </div>
    );
  }
  
  export default Map;
  