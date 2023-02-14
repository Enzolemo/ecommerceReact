import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidwet from './CartWidget/CartWidget';

function Menu(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Primer Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Niños</Nav.Link>
            <Nav.Link href="#features">Hombres</Nav.Link>
            <Nav.Link href="#pricing">Mujeres</Nav.Link>
            <Nav.Link href="#home"><CartWidwet /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      </>
    )
}

export default Menu
