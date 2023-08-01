import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >The Movie Recommender</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/popular">Popular</Link>
            <Link className="nav-link" to="/">Tv Shows</Link>
            <NavDropdown title="Genres" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/">Action</Link>
            <Link className="dropdown-item" to="/">Comedy</Link>
            <Link className="dropdown-item" to="/">Drama</Link>
            <Link className="dropdown-item" to="/">Horror</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;