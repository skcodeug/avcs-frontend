import { Nav } from "react-bootstrap";
import styles from "./AdminNav.css";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            window.location.pathname === "/users" ? "blue" : "rgb(100,100,100)"
          }`,
          fontWeight: `${window.location.pathname === "/users" ? "bold" : ""}`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/users"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/users" ? "5px solid blue" : "none"
          }`,
        }}
        href="/users"
      >
        Users
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/approvals"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/approvals" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/approvals"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/approvals"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/approvals"
      >
        Approvals
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/consultants"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/consultants" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/consultants"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/consultants"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/consultants"
      >
        Consultants
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/invoices"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/invoices" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/invoices"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/invoices" ? "5px solid blue" : "none"
          }`,
        }}
        href="/invoices"
      >
        Invoices
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/payments"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/payments" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/payments"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/payments" ? "5px solid blue" : "none"
          }`,
        }}
        href="/payments"
      >
        Payments
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/receipts"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/receipts" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/receipts"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/receipts" ? "5px solid blue" : "none"
          }`,
        }}
        href="/receipts"
      >
        Receipts
      </Nav.Link>

      <Nav.Link
        style={{
          color: `${
            window.location.pathname === "/requisitions"
              ? "blue"
              : "rgb(100,100,100)"
          }`,
          fontWeight: `${
            window.location.pathname === "/requisitions" ? "bold" : ""
          }`,
          textDecoration: "none",
          paddingLeft: "15%",
          lineHeight: "4.5vh",
          background: `${
            window.location.pathname === "/requisitions"
              ? "rgb(51, 153, 255, 0.2)"
              : "rgb(247, 249, 252)"
          }`,
          borderRight: `${
            window.location.pathname === "/requisitions"
              ? "5px solid blue"
              : "none"
          }`,
        }}
        href="/requisitions"
      >
        Requisitions
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
        className={styles.nav_link}
      >
        Annual Leave
      </Nav.Link>
    </Nav>

    /* <Nav.Link href="/users">Users</Nav.Link>
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
          <Nav.Link href="/userrelations">User Relations</Nav.Link> */
  );
}
export default AdminNav;
