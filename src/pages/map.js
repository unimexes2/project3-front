import CarouselBasement from "../components/carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import protectlogo from "../pictures/protectora.png";
const API_URL = process.env.REACT_APP_API_URL;
function Map() {
  const [mapId, setMap] = useState(null);
  const [desc, setDesc] = useState(null);
  useEffect(() => {
    axios.get(API_URL+"/map").then((response) => {
      debugger;
      console.log(response.data[0].mapCode, "response");
      setDesc(response.data[0].description);
      setMap(response.data[0].mapCode);
      //
    });
  }, []);

  return (
    <div className="main-container">
      <div class="row w-150" >
        <div  class="col-lg-6 my-4">
          {mapId ? (
            <iframe
              src={
                "https://www.google.com/" + mapId + 'width="640" height="480"'
              }
              class="w-100"
              height="400"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          ) : (
            <></>
          )}
        </div>
        <div class="col-lg-6 my-4 d-flex align-items-center">
          <div className="textDescription">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
