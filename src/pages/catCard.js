 import axios from "axios";
 import { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 const API_URL = "http://localhost:5005"; 
 function CatCard (props) {
   const [catId, setCatId] = useState(null);
    return (
     <div className="CatDetails">
       {catId && (
         <>
           <h1>{props.catId.title}</h1>
           <p>{props.catId.description}</p>
         </>       )}

 
       <Link to="/cats">
         <button>Back to list</button>
       </Link>
     </div>
   );
 }
 
 export default CatCard;
