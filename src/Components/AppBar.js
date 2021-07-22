import { Navbar, Nav } from "react-bootstrap";

function AppBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ position: "fixed", zIndex: "1", right: "0", left: "0" }}
    >
      <Navbar.Brand href="/users">AVCS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/users">Dashboard</Nav.Link>
          <Nav.Link href="/users">Reports</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/logout">
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default AppBar;
