import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";   
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { Link } from "react-router-dom";

function Stories() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  var [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/stories")
      .then((response) => {

      
        setStories([...response.data]);
        debugger
      });


    }, []);
 
    return (
      
      <div style={{ display: 'flex' ,flexDirection:"column"}}>



<div className="list-group" style={{ height: '600px', display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>

{stories.map((story) => {


  return (   

<form onSubmit={story} id={story._id}>
<div className="w3-container"style={{margin:"20px",backgroundColor:"#3498DB",color:"white" }}>
<h1 style={{backgroundColor:"#3498DB" }} >{story.header}</h1>
</div>

<div className="w3-content" >

<div className="w3-row w3-margin">

<div className="w3-third" >

</div>
<div className="w3-twothird w3-container">

  <p>
  {story.description}
  </p>
</div>

{story.pictures.map((pic) => {



return ( 
  <div className="w3-third" >

    <img src={pic}style={{width:"100%", minheight:"200px"}}/>
 
  </div>  )})
  
  }





</div>
</div>


    <div>

      
    
      

      <h6></h6>
   
      

      {isLoggedIn
?(<button type="submit">Delete hisrory</button>

):<></>}
      </div>
      </form>
  );

})}




</div>








    </div>


























    );
  }
  
  export default Stories;
  