import { Navbar, Nav } from "react-bootstrap";

function AppBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        position: "fixed",
        zIndex: "1",
        right: "0",
        left: "0",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <Navbar.Brand
        style={{ paddingLeft: "6%", fontWeight: "bolder", fontSize: "2rem" }}
      >
        AVCS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto"
          style={{ position: "fixed", right: "12%", top: "1.5%" }}
        >
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
        <Nav style={{ position: "fixed", right: "5%", top: "1.5%" }}>
          <Nav.Link eventKey={2} href="/logout">
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default AppBar;
