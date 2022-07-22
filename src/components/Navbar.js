
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

  return (
  
    
    
      <Navbar className="navbar">
      
        <Nav.Link href="/"><img className ="logo"src={logo}/></Nav.Link>

     
        <Nav className="me-auto">
           
           
           
      {/*      {isLoggedIn
        ? (<>
            <Nav.Link href="/projects">
              <p className="menulink">Projects</p>
            </Nav.Link>
            <p className="menulink" onClick={logOutUser}>Logout</p>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Nav.Link href="/signup" className="menulink"> Signup </Nav.Link>
          <Nav.Link href="/login"className="menulink"> Login </Nav.Link>
        </>)
      }*/}
           
           
            <Nav.Link href="/cats" className="menulink">GATOS</Nav.Link>
            <Nav.Link href="#pricing" className="menulink">PERROS</Nav.Link>
            <Nav.Link href="/login" className="menulink"> UBICACION </Nav.Link>
            <Nav.Link href="/login" className="menulink"> CONTACTOS </Nav.Link>
          </Nav>
    
      </Navbar>

        
      
     

     

  );
}

export default MyNavbar;