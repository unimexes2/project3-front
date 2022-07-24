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

        setMap([...response.data]);
        
      });
  }, []);
 console.log(mapId)
    return (
      
      <div className="main-container">
   
  

   <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rxO2NbzzPb1LoN5OhNJLP0dEBT3KNCI&ehbc=2E312F" width="640" height="480"></iframe>




       
       
  
  
      </div>
    );
  }
  
  export default Map;
  