import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditContactPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");

  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/contacts/${contactId}`)
      .then((response) => {
        const oneContact = response.data;
        setFirstName(oneContact.firstName);
        setLastName(oneContact.lastName);
        setPhone(oneContact.phone);
        setEmail(oneContact.email);
      })
      .catch((error) => console.log(error));
  }, [contactId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { firstName, lastName, phone, email };

    axios
      .put(`http://localhost:3000/contacts/${contactId}`, requestBody)
      .then((response) => {
        navigate(`/contacts/${contactId}`);
        navigate(`/contacts`);
      });
  };

  return (
    <div className="EditContactPage">
      <h3>Editar {firstName} {lastName}</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Apellido:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Telefono:</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditContactPage;