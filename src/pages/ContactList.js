import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";   
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { Link } from "react-router-dom";

function ContactList() {
    console.log("hello")
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  var [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/contacts")
      .then((response) => {

      
        setContacts([...response.data]);
      });


    }, []);

    const deleteContact = (id) => {
      console.log(id, "llega");
      axios
        .delete(`http://localhost:3000/contacts/` + id.target.id)
        .then(() => {})
        .catch((err) => console.log(err));
    };
 
    return (
      
      <div style={{ display: 'flex' ,flexDirection:"column"}}>
<h1 style={{backgroundColor:"#3498DB" }} >CONTACTOS</h1>


<div className="list-group" style={{ height: '600px', display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>

{contacts.map((contact) => {


  return (   

<form onSubmit={deleteContact} id={contact._id}>
<div className="w3-container"style={{margin:"20px",backgroundColor:"#3498DB",color:"white" }}>
<h1 style={{backgroundColor:"#3498DB" }} >{contact.header}</h1>
</div>

<div className="w3-content" >

<div className="w3-row w3-margin">

<div className="w3-third" >

</div>
<div className="w3-twothird w3-container">

  <p>Nombre: {contact.firstName}</p>
  <p>Apellido: {contact.lastName}</p>
  <p>Email: {contact.email}</p>
  <p>Telefono: {contact.phone}</p>
</div>

{contact.foto.map((pic) => {



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
?(<button type="submit">Delete Contact</button>

):<></>}
      </div>
      </form>
  );

})}




</div>








    </div>


























    );
  }
  
  export default ContactList;
  