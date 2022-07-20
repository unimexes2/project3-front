import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function MyNavbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
    
    
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
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
           
           
            <Nav.Link href="#features">GATOS</Nav.Link>
            <Nav.Link href="#pricing">PERROS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        
      
     

     
    </nav>
  );
}

export default MyNavbar;