import { Nav } from "react-bootstrap";

function AdminNav() {
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
      <Nav.Link href="/operations">Operations</Nav.Link>
      <Nav.Link href="/clients">Clients</Nav.Link>
      <Nav.Link href="/maritalstatus">Marital Status</Nav.Link>
      <Nav.Link href="/annualleave">Annual Leave</Nav.Link>
      <Nav.Link href="/annualleavedepartments">
        Annual Leave Departments
      </Nav.Link>
      <Nav.Link href="/annualleavemds">Annual Leave Mds</Nav.Link>
      <Nav.Link href="/annualleaverecommenders">
        Annual Leave Recommenders
      </Nav.Link>
      <Nav.Link href="/approvals">Approvals</Nav.Link>
      <Nav.Link href="/biodata">Bio data</Nav.Link>
      <Nav.Link href="/clientcategories">Client Categories</Nav.Link>
      <Nav.Link href="/consultantfirmconsultants">
        Consultant Firm Consultants
      </Nav.Link>
      <Nav.Link href="/consultantcategories">Consultant Categories</Nav.Link>
      <Nav.Link href="/consultantfirms">Consultant Firms</Nav.Link>
      <Nav.Link href="/consultants">Consultants</Nav.Link>
      <Nav.Link href="/corporateclients">Corporate Clients</Nav.Link>
      <Nav.Link href="/departments">Departments</Nav.Link>
      <Nav.Link href="/individualclients">Individual Clients</Nav.Link>
      <Nav.Link href="/individualconsultants">Individual Consultants</Nav.Link>
      <Nav.Link href="/interviewevaluation">Interview Evaluation</Nav.Link>
      <Nav.Link href="/invoices">Invoices</Nav.Link>
      <Nav.Link href="/nextofkin">Next of Kin</Nav.Link>
      <Nav.Link href="/payments">Payments</Nav.Link>
      <Nav.Link href="/projectstatus">Project Status</Nav.Link>
      <Nav.Link href="/prospects">Prospects</Nav.Link>
      <Nav.Link href="/qualifications">Qualifications</Nav.Link>
      <Nav.Link href="/quotation">Quotation</Nav.Link>
      <Nav.Link href="/quotationdetails">Quotation Details</Nav.Link>
      <Nav.Link href="/receipts">Receipts</Nav.Link>
      <Nav.Link href="/requisitions">Requisitions</Nav.Link>
      <Nav.Link href="/staffverifications">Staff Verifications</Nav.Link>
      <Nav.Link href="/userdetails1">User Details I</Nav.Link>
      <Nav.Link href="/userdetails2">User Details II</Nav.Link>
      <Nav.Link href="/userrelations">User Relations</Nav.Link>
    </Nav>
  );
}
export default AdminNav;
