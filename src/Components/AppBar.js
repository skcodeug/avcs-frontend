import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Navbar, Nav } from "react-bootstrap";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppBar() {
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState();
  const history = useHistory();

  const handleChange = (event) => {
    localStorage.setItem("role", event.target.value);
    switch (event.target.value) {
      case "Admin":
        history.push({ pathname: "/clients" });
        break;
      case "HR":
        history.push({ pathname: "/users" });
        break;
      case "Finance":
        history.push({ pathname: "/invoices" });
        break;
      case "Sales":
        history.push({ pathname: "/clients" });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const temp = localStorage.getItem("roles").split(",");
    setRole(localStorage.getItem("role"));
    setRoles(temp);
  }, [role]);

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
        // boxShadow: "0 0px 0px rgb(110, 110, 110,0.2)",
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
        {roles.length > 1 && (
          <span
            className="me-auto"
            style={{
              position: "fixed",
              right: "5%",
              top: "4%",
            }}
          >
            <select name="role" onChange={handleChange}>
              <option value={localStorage.getItem("role").replace(/"/g, "")}>
                {localStorage.getItem("role").replace(/"/g, "")}
              </option>
              {roles &&
                roles.map((roleItem, index) =>
                  roleItem !==
                  localStorage.getItem("role").replace(/"/g, "") ? (
                    <option key={index} value={roleItem}>
                      {roleItem}
                    </option>
                  ) : null
                )}
            </select>
          </span>
        )}

        {/* <Nav
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
            Settings
          </Nav.Link>
        </Nav> 
        */}

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
