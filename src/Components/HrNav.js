import { Nav } from "react-bootstrap";

function HrNav() {
  return (
    <Nav
      defaultActiveKey="/home"
      style={{
        height: "100%",
        width: "19%",
        marginTop: "5%",
        paddingBottom: "8%",
        paddingTop: "1%",
        overflowX: "hidden",
        overflowY: "auto",
        position: "fixed",
        zIndex: "1",
        top: "0",
        left: "0",
        display: "block",
      }}
    >
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link href="/clients">Clients</Nav.Link>
      <Nav.Link href="/consultants">Consultants</Nav.Link>
      <Nav.Link href="/annualleave">Annual Leave</Nav.Link>
      <Nav.Link href="/requisitions">Requisitions</Nav.Link>
      <Nav.Link href="/interviewevaluation">Interview Evaluation</Nav.Link>
      <Nav.Link href="/staffverifications">Staff Verifications</Nav.Link>
    </Nav>
  );
}
export default HrNav;
