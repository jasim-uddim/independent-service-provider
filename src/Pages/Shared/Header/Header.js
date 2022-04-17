import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    if (user) {
      signOut(auth);
    }
  };
  if (error) {
    return (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="home#home">The Best Gym Trainer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Personal</Nav.Link>
              <Nav.Link href="home#group">Group</Nav.Link>
              <Nav.Link href="home#online">Online</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About me
              </Nav.Link>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-link text-white text-decoration-none"
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
