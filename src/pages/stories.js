
import { useState, useEffect } from "react";
import axios from "axios";
function Stories() {
  
  var [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/stories")
      .then((response) => {

      
        setStories([...response.data]);
      });
  }, []);
 
    return (
      
      <div className="main-container">
   
   <div className="w3-container w3-teal">
<h1>{stories.header}</h1>
</div>

<div className="w3-content">

<div className="w3-row w3-margin">


<div className="w3-twothird w3-container">

  <p>
  {stories.description}
  </p>
</div>

</div>
</div>













  
       </div>
       






    );
  }
  
  export default Stories;
  