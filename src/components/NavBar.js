// NavBar.js

import { Link } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';

const NavigationBar = ({ cartItemCount }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">YourAppName</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          {isAuthenticated && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
          <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/cart">
            Cart <Badge bg="secondary">{cartItemCount}</Badge>
          </Nav.Link>
          {isAuthenticated ? (
            <Nav.Link as="button" onClick={logout}>Logout</Nav.Link>
          ) : (
            <>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
