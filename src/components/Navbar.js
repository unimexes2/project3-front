import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../pictures/logosite.png"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
console.log(isLoggedIn)
  return (
  
    <div>
    
      <Navbar className="navbar">
      
        <Nav.Link href="/"><img className ="logo"src={logo}/></Nav.Link>

     
        <Nav className="me-auto">
        
           
           
            <Nav.Link href="/cats" className="menulink">GATOS</Nav.Link>

            <Nav.Link href="/dogs" className="menulink">PERROS</Nav.Link>
            <Nav.Link href="/stories" className="menulink">HISTORIAS</Nav.Link>



            <NavDropdown className="menulink" title="ADOPTADOS" id="basic-nav-dropdown">
              <NavDropdown.Item className="menulink"href="/dogadopted" >PERROS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="menulink" href="#action/3.3">GATOS</NavDropdown.Item>
            </NavDropdown>









           
           
            <Nav.Link href="/donate" className="menulink">DONACIONES</Nav.Link>
            <Nav.Link href="/map" className="menulink"> UBICACION </Nav.Link>
            <Nav.Link href="/contacts" className="menulink"> CONTACTOS </Nav.Link>
          </Nav>
    
      </Navbar>

      {isLoggedIn
        ? (<>

<Navbar className="w3-bar w3-blue" style={{fontFamily:"sans-serif", marginBottom:"10px"}}>

   
           
           

          
            <Nav.Link className="w3-bar-item w3-button" onClick={logOutUser}>LOGOUT {user.name}</Nav.Link>
           
             <Nav.Link href="/add" className="w3-bar-item w3-button">
              ADD ANIMAL
            </Nav.Link>
            <Nav.Link href="/addmap" className="w3-bar-item w3-button">
              ADD MAP
            </Nav.Link>
            
            <Nav.Link href="/addcontact" className="w3-bar-item w3-button">
              ADD CONTACT
            </Nav.Link>
            <Nav.Link href="/addstories" className="w3-bar-item w3-button">
              ADD STORY
            </Nav.Link>
            </Navbar>


          </>)
        : 
        (<></>)
      }










      </div>        
      
     

     

  );
}

export default MyNavbar;