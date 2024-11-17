import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navb() {

  const userType = localStorage.getItem("userType");
  return (
    <Navbar expand="lg" className="bg-white">
      <Container className="mx-auto" style={{ maxWidth: "1500px" }}>
        <Navbar.Brand href="#home">
          <h1 className="text-3xl font-extrabold">
            <span className="text-blue-400">Art</span>
            <span className="text-purple-700">G</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/digA/home">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="/digA/profile">
              <b>Profile</b>
            </Nav.Link>
            {
              userType=="artist"  ? <Nav.Link href="/digA/Admin/ArtworkAdd">
              <b>Add Artwork</b>
            </Nav.Link> :  <Nav.Link href="/digA/profile">
              <b>Profile</b>
            </Nav.Link>
            }
            <Nav.Link href="#link">
              <b>About</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
