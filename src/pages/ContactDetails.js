import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ContactDetails() {
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const { contactId } = useParams();

  function getContact(id) {
    axios
      .get("http://localhost:3000/contacts/" + id)
      .then((response) => {
        const oneContact = response.data;
        setContact(oneContact);
      })
      .catch((error) => console.log(error));
      
  }

  useEffect(() => {
    getContact(contactId);
  }, []);

  return (
    <div className="contactDetails">
      {contact ? (
        <>
          <h1>Nombre: {contact.firstName}</h1>
          <h1>Apellido: {contact.lastName}</h1>
    
          <h6>Phone: {contact.phone}</h6>
          <h6>Email: {contact.email}</h6>
          <img className="imgtmbl" src={contact.foto} />{" "}
        </>
      ) : (
        <></>
      )}

      <Link to="/contacts">
        <button>Volver al listado</button>
      </Link>

      <Link to={`/contacts/edit/${contactId}`}>
        <button>Editar Contacto</button>
      </Link>
    </div>
  );
}

export default ContactDetails;
