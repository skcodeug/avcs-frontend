import { Nav } from "react-bootstrap";

function FinanceNav() {
  return (
    <Nav
      defaultActiveKey="/home"
      style={{
        height: "100%",
        width: "19%",
        marginTop: "6%",
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
      <Nav.Link href="/invoices">Invoices</Nav.Link>
      <Nav.Link href="/receipts">Receipts</Nav.Link>
      <Nav.Link href="/payments">Payments</Nav.Link>
      <Nav.Link href="/approvals">Approvals</Nav.Link>
      <Nav.Link href="/interviewevaluation">Interview Evaluation</Nav.Link>
      <Nav.Link href="/staffverifications">Staff Verifications</Nav.Link>
    </Nav>
  );
}
export default FinanceNav;
