import { Nav } from "react-bootstrap";

function SalesNav() {
  return (
    <Nav
      defaultActiveKey="/home"
      style={{
        height: "100%",
        width: "19%",
        marginTop: "5.8%",
        paddingBottom: "8%",
        paddingTop: "1%",
        overflowX: "hidden",
        overflowY: "auto",
        position: "fixed",
        zIndex: "1",
        top: "0",
        left: "0",
        display: "block",
        backgroundColor: "rgba(27, 36, 48, 0.9)",
      }}
    >
      <Nav.Link href="/clients">Clients</Nav.Link>
      <Nav.Link href="/prospects">Prospects</Nav.Link>
      <Nav.Link href="/quotation">Quotation</Nav.Link>
      <Nav.Link href="/contracts">Contracts</Nav.Link>
      <Nav.Link href="/operations">Operations</Nav.Link>
      <Nav.Link href="/interviewevaluation">Interview Evaluation</Nav.Link>
      <Nav.Link href="/staffverifications">Staff Verifications</Nav.Link>
    </Nav>
  );
}
export default SalesNav;
