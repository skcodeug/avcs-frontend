import { Nav } from "react-bootstrap"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AdminNav(props) {
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
        backgroundColor: "rgb(247, 249, 252)"
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
          color: "#0d6efd"
        }}
      >
        AVCS
      </h1>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          backgroundColor: "lightblue"
        }}
        href="/users"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Users
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/operations"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Operations
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/clients"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Clients
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/annualleave"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Annual Leave
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/approvals"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Approvals
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/consultants"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Consultants
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/invoices"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Invoices
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/payments"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Payments
      </Nav.Link>
      <Nav.Link
        href="/prospects"
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Prospects
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/quotations"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Quotation
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/receipts"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Receipts
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/requisitions"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Requisitions
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/staffverifications"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Staff Verifications
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/interviewevaluation"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Interview Evaluation
      </Nav.Link>
      <Nav.Link
        style={{
          color: "black",
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh"
        }}
        href="/contracts"
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ color: "black", marginRight: "7%" }}
        />
        Contracts
      </Nav.Link>
      {/* <Nav.Link href="/users">Users</Nav.Link>
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
      <Nav.Link href="/userrelations">User Relations</Nav.Link> */}
    </Nav>
  )
}
export default AdminNav
