import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AdminNav() {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); // Navigate to login page
  };

  return (
    <Navbar expand="lg" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <Container className="mx-auto" style={{ maxWidth: "1500px" }}>
        {/* Brand */}
        <Navbar.Brand href="#home" className="text-white">
          <h1 className="text-3xl font-extrabold">
            <span className="text-blue-200">Art</span>
            <span className="text-yellow-300">G</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto items-center">
            <Nav.Link href="/digA/home" className="text-white hover:underline mx-2">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="/digA/profile" className="text-white hover:underline mx-2">
              <b>Profile</b>
            </Nav.Link>
    
              <Nav.Link href="/digA/Admin/ArtworkAdd" className="text-white hover:underline mx-2">
                <b>Add Artwork</b>
              </Nav.Link>
            
            <Nav.Link href="/digA/Admin/myArtwork" className="text-white hover:underline mx-2">
              <b>My Artworks</b>
            </Nav.Link>
            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              variant="outline-light"
              className="ml-4 py-2 px-4 text-sm font-bold rounded-lg shadow-lg hover:bg-white hover:text-blue-500 transition duration-300"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;