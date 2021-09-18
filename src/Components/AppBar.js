import { Navbar, Nav } from "react-bootstrap";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        position: "fixed",
        zIndex: "1",
        right: "0",
        left: "19%",
        backgroundColor: "white",
        boxShadow: "0 3px 15px rgb(110, 110, 110,0.2)",
        height: "12vh",
      }}
    >
      <Navbar.Brand
        style={{
          paddingLeft: "2%",
          fontWeight: "bold",
          fontSize: "1.5rem",
          paddingTop: "0.8%",
          paddingBottom: "0.8%",
          color: "rgba(0,0,0, 0.75)",
        }}
      >
        Dashboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto"
          style={{
            position: "fixed",
            right: "5%",
            top: "3%",
          }}
        >
          <Nav.Link
            href="/settings"
            style={{ color: "rgb(100,100,100)", textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faCog} size="1x" color="blue" />
            {/* Settings */}
          </Nav.Link>
        </Nav>
        <Nav
          style={{
            position: "fixed",
            right: "2%",
            top: "3%",
          }}
        >
          <Nav.Link
            eventKey={2}
            href="/logout"
            style={{ color: "rgb(100,100,100)", textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} color="blue" />
            {/* Logout */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default AppBar;
