
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../pictures/logosite.png"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
function MyNavbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
console.log(isLoggedIn)
  return (
  
    
    
      <Navbar className="navbar">
      
        <Nav.Link href="/"><img className ="logo"src={logo}/></Nav.Link>

     
        <Nav className="me-auto">
           
           
           
          {isLoggedIn
        ? (<>
          
            <Nav.Link className="menulinkadmin" onClick={logOutUser}>LOGOUT {user.name}</Nav.Link>
           
             <Nav.Link href="/add" className="menulinkadmin">
              ADD ANIMAL
            </Nav.Link>
            <Nav.Link href="/addmap" className="menulinkadmin">
              ADD MAP
            </Nav.Link>
            
            <Nav.Link href="/addstories" className="menulinkadmin">
              ADD STORY
            </Nav.Link>

          </>)
        : 
        (<></>)
      }
           
           
            <Nav.Link href="/cats" className="menulink">GATOS</Nav.Link>

            <Nav.Link href="/dogs" className="menulink">PERROS</Nav.Link>
            <Nav.Link href="/stories" className="menulink">HISTORIAS</Nav.Link>
            <Nav.Link href="/stories" className="menulink">YA TIENEN FAMILIA</Nav.Link>
            <Nav.Link href="/donate" className="menulink">DONACIONES</Nav.Link>
            <Nav.Link href="/map" className="menulink"> UBICACION </Nav.Link>
            <Nav.Link href="/login" className="menulink"> CONTACTOS </Nav.Link>
          </Nav>
    
      </Navbar>

        
      
     

     

  );
}

export default MyNavbar;