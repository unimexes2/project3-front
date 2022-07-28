import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function Donation() {
  console.log("hello");
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  var [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/donations").then((response) => {
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
    <div class="row w-150">
      <div class="col-lg-6 my-4" style={{padding:"100px"}}>
        <p>
          L'associació Amics dels Animals de Palafolls és una entitat sense ànim
          de lucre constituida al 2007 amb el propòsit de donar atenció a
          aquells gossos i gats que han estat abandonats a Palafolls i
          proporcinar-los-hi una nova llar i siguin tractats de la manera que
          els corresponen: amb atenció i estima. Som voluntaries que realitzem
          aquesta tasca desinteressadament, invertint el nostre temps personal
          intentant sol·lucionar els problemes dels abandonaments,
          maltractaments i accidents dels animals de la nostra població. El
          nostre e-mail de contecte és: amicsanimalspalafolls@gmail.com El
          nostre número de contacte és el : 665 72 84 00 Si ens voleu ajudar amb
          alguna donació que sempre és benvinguda: CaixaBank ES59 2100 4490 3613
          0000 6938
        </p>
      </div>

      <div class="col-lg-6 my-4 d-flex align-items-center">
        <div
          className="list-group"
          style={{
            height: "600px",
            display: "flex",
            margin: "auto",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {contacts.map((contact) => {
            return (
              <form
                onSubmit={deleteContact}
                id={contact._id}
                style={{
                  backgroundColor: "#3498DB",
                  color: "white",
                  width: "350px",
                }}
              >
                <div className="w3-container">
                  <h3>Banco: {contact.bankName}</h3>
                </div>

                <div className="w3-content">
                  <h3>CUENTA:</h3>
                  <h5>{contact.account}</h5>

                  <h3>Paypal</h3>
                  <a href={contact.paypal}>
                    <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" />
                  </a>

                  <h3>Teaming: </h3>
                  <a href={contact.bizum}>
                    <img
                      style={{
                        backgroundColor: "white",
                        boxShadow: "10px 10px 5px lightblue",
                        marginBottom: "25px",
                      }}
                      src="https://djg5cfn4h6wcu.cloudfront.net/resources/images_new/logotipo_teaming.png"
                    />
                  </a>
                </div>

                <div>
                  <h6></h6>

                  {isLoggedIn ? (
                    <button type="submit">Delete Bank Details</button>
                  ) : (
                    <></>
                  )}
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Donation;
