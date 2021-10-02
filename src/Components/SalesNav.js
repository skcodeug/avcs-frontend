import { Nav } from "react-bootstrap";

function SalesNav() {
  return (
    <Nav
      defaultActiveKey="/home"
      style={{
        height: "100%",
        width: "19%",
        // marginTop: "5.8%",
        paddingBottom: "8%",
        paddingTop: "1%",
        overflowX: "hidden",
        overflowY: "auto",
        position: "fixed",
        zIndex: "1",
        top: "0",
        left: "0",
        display: "block",
        borderRight: "1px solid rgb(220,220,220)",
        backgroundColor: "rgb(247, 249, 252)",
        // backgroundColor: "rgba(27, 36, 48, 0.9)"
      }}
    >
      <h1
        style={{
          paddingLeft: "6%",
          marginTop: "5%",
          marginBottom: "10%",
          fontWeight: "bolder",
          fontSize: "2rem",
          color: "#0d6efd",
        }}
      >
        AVCS
      </h1>
      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/clients"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/clients" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          backgroundColor: `${
            window.location.pathname === "/clients"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/clients" ? "5px solid blue" : "none"
          }`,
        }}
        href="/clients"
      >
        Clients
      </Nav.Link>

      <Nav.Link
        href="/prospects"
        style={{
          color: `${
            window.location.pathname === "/prospects"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/prospects" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/prospects"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/prospects"
              ? "5px solid blue"
              : "none"
          }`,
        }}
      >
        Prospects
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/quotations"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/quotations" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/quotations"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/quotations"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/quotations"
      >
        Quotation
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/contracts"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/contracts" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/contracts"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/contracts"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/contracts"
      >
        Contracts
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/operations"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/operations" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/operations"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/operations"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/operations"
      >
        Operations
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/staffverifications"
              ? "blue"
              : "black"
          }`,
          fontWeight: `${
            window.location.pathname === "/staffverifications" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/staffverifications"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/staffverifications"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/staffverifications"
      >
        Staff Verifications
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/interviewevaluation"
              ? "blue"
              : "black"
          }`,
          fontWeight: `${
            window.location.pathname === "/interviewevaluation" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/interviewevaluation"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/interviewevaluation"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/interviewevaluation"
      >
        Interview Evaluation
      </Nav.Link>

      <hr
        style={{
          color: "rgba(0,0,0, 0.3)",
          height: "2px",
          margin: "12% 0% 15% 0",
        }}
      ></hr>
      <h6
        style={{
          margin: "0 0 6% 12%",
          textTransform: "uppercase",
          fontSize: "0.8rem",
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Personal Settings
      </h6>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/annualleave"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/annualleave" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/annualleave"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/annualleave"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/annualleave"
      >
        Annual Leave
      </Nav.Link>
    </Nav>
  );
}
export default SalesNav;
