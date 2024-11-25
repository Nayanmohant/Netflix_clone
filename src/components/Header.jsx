import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent ">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              width="120"
              height="40"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto ">
            <Nav.Link className='text-white' href="#features ">Home</Nav.Link>
            <Nav.Link href="#pricing" className='text-white' >Tv shows</Nav.Link>
            <Nav.Link href="#pricing" className='text-white' >Movies</Nav.Link>
            <Nav.Link href="#pricing" className='text-white' >New & Popular</Nav.Link>
            <Nav.Link href="#pricing" className='text-white' >My list</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='text-white' ><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-white' >
              KIDS
            </Nav.Link>
            <Nav.Link href="#deets" className='text-white' >DVD</Nav.Link>
            <Nav.Link href="#deets" className='text-white' ><FontAwesomeIcon icon={faBell} /></Nav.Link>
            <Nav.Link href="#deets" className='text-white' >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;