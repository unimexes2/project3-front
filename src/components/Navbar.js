
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../pictures/logosite.png"
function MyNavbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
    
    
      <Navbar bg="primary-light" variant="light">
        <Container>
        <Nav.Link href="/"><img className ="logo"src={logo}/></Nav.Link>

     
          <Nav className="me-auto">
           
           
           
            {isLoggedIn
        ? (<>
            <Nav.Link href="/projects">
              <p>Projects</p>
            </Nav.Link>
            <p onClick={logOutUser}>Logout</p>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Nav.Link href="/signup"> Signup </Nav.Link>
          <Nav.Link href="/login"> Login </Nav.Link>
        </>)
      }
           
           
            <Nav.Link href="/cats">GATOS</Nav.Link>
            <Nav.Link href="#pricing">PERROS</Nav.Link>
            <Nav.Link href="/login"> UBICACION </Nav.Link>
            <Nav.Link href="/login"> CONTACTOS </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        
      
     

     
    </nav>
  );
}

export default MyNavbar;