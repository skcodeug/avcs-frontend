import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";

class ApprovalsReport extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  fetchData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/approvals", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          console.log(res.data);
          return {
            ...prevState,
            data: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return this.state.users ? (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ position: "fixed", zIndex: "1", right: "0", left: "0" }}
        >
          <Navbar.Brand href="/dashboard/users">AVCS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard/users">Dashboard</Nav.Link>
              <Nav.Link href="/reports/users">Reports</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/logout">
                Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ display: "flex" }}>
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
            <Nav.Link href="/reports/users">Users</Nav.Link>
            <Nav.Link href="/reports/operations">Operations</Nav.Link>
            <Nav.Link href="/reports/clients">Clients</Nav.Link>
            <Nav.Link href="/reports/maritalstatus">Marital Status</Nav.Link>
            <Nav.Link href="/reports/annualleave">Annual Leave</Nav.Link>
            <Nav.Link href="/reports/annualleavedepartments">
              Annual Leave Departments
            </Nav.Link>
            <Nav.Link href="/reports/annualleavemds">Annual Leave Mds</Nav.Link>
            <Nav.Link href="/reports/annualleaverecommenders">
              Annual Leave Recommenders
            </Nav.Link>
            <Nav.Link href="/reports/approvals">Approvals</Nav.Link>
            <Nav.Link href="/reports/biodata">Bio data</Nav.Link>
            <Nav.Link href="/reports/clientcategories">
              Client Categories
            </Nav.Link>
            <Nav.Link href="/reports/consultantfirmconsultants">
              Consultant Firm Consultants
            </Nav.Link>
            <Nav.Link href="/reports/consultantcategories">
              Consultant Categories
            </Nav.Link>
            <Nav.Link href="/reports/consultantfirms">
              Consultant Firms
            </Nav.Link>
            <Nav.Link href="/reports/consultants">Consultants</Nav.Link>
            <Nav.Link href="/reports/corporateclients">
              Corporate Clients
            </Nav.Link>
            <Nav.Link href="/reports/departments">Departments</Nav.Link>
            <Nav.Link href="/reports/individualclients">
              Individual Clients
            </Nav.Link>
            <Nav.Link href="/reports/individualconsultants">
              Individual Consultants
            </Nav.Link>
            <Nav.Link href="/reports/interviewevaluation">
              Interview Evaluation
            </Nav.Link>
            <Nav.Link href="/reports/invoices">Invoices</Nav.Link>
            <Nav.Link href="/reports/nextofkin">Next of Kin</Nav.Link>
            <Nav.Link href="/reports/payments">Payments</Nav.Link>
            <Nav.Link href="/reports/projectstatus">Project Status</Nav.Link>
            <Nav.Link href="/reports/prospects">Prospects</Nav.Link>
            <Nav.Link href="/reports/qualifications">Qualifications</Nav.Link>
            <Nav.Link href="/reports/quotation">Quotation</Nav.Link>
            <Nav.Link href="/reports/quotationdetails">
              Quotation Details
            </Nav.Link>
            <Nav.Link href="/reports/receipts">Receipts</Nav.Link>
            <Nav.Link href="/reports/requisitions">Requisitions</Nav.Link>
            <Nav.Link href="/reports/staffverifications">
              Staff Verifications
            </Nav.Link>
            <Nav.Link href="/reports/userdetails1">User Details I</Nav.Link>
            <Nav.Link href="/reports/userdetails2">User Details II</Nav.Link>
            <Nav.Link href="/reports/userrelations">User Relations</Nav.Link>
          </Nav>
          <Container>
            <div
              style={{
                marginLeft: "15%",
                paddingTop: "2%",
                marginTop: "8%",
                marginBottom: "10%",
              }}
            >
              {this.state.data.map((item) => (
                <li>{item.approverId}</li>
              ))}
            </div>
          </Container>
        </div>
      </>
    ) : null;
  }
}
export default ApprovalsReport;
