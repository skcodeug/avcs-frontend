import React from "react";
import { Form, Button, Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Operations extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "",
      contractReferenceId: "",
      consultantId: "",
      startDate: "",
      endDate: "",
      projecStatusId: "",
      errors: {},
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/operations", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            clientId: "",
            contractReferenceId: "",
            consultantId: "",
            startDate: "",
            endDate: "",
            projecStatusId: "",
            errors: {},
          }));
          event.target.className = "needs-validation";
        })
        .catch((error) => console.log(error));
    } else {
      let errors = findFormErrors(this.state);
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: errors,
        };
      });
    }
  };

  render() {
    return (
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
            <Nav.Link href="/dashboard/users">Users</Nav.Link>
            <Nav.Link href="/dashboard/operations">Operations</Nav.Link>
            <Nav.Link href="/dashboard/clients">Clients</Nav.Link>
            <Nav.Link href="/dashboard/maritalstatus">Marital Status</Nav.Link>
            <Nav.Link href="/dashboard/annualleave">Annual Leave</Nav.Link>
            <Nav.Link href="/dashboard/annualleavedepartments">
              Annual Leave Departments
            </Nav.Link>
            <Nav.Link href="/dashboard/annualleavemds">
              Annual Leave Mds
            </Nav.Link>
            <Nav.Link href="/dashboard/annualleaverecommenders">
              Annual Leave Recommenders
            </Nav.Link>
            <Nav.Link href="/dashboard/approvals">Approvals</Nav.Link>
            <Nav.Link href="/dashboard/biodata">Bio data</Nav.Link>
            <Nav.Link href="/dashboard/clientcategories">
              Client Categories
            </Nav.Link>
            <Nav.Link href="/dashboard/consultantfirmconsultants">
              Consultant Firm Consultants
            </Nav.Link>
            <Nav.Link href="/dashboard/consultantcategories">
              Consultant Categories
            </Nav.Link>
            <Nav.Link href="/dashboard/consultantfirms">
              Consultant Firms
            </Nav.Link>
            <Nav.Link href="/dashboard/consultants">Consultants</Nav.Link>
            <Nav.Link href="/dashboard/corporateclients">
              Corporate Clients
            </Nav.Link>
            <Nav.Link href="/dashboard/departments">Departments</Nav.Link>
            <Nav.Link href="/dashboard/individualclients">
              Individual Clients
            </Nav.Link>
            <Nav.Link href="/dashboard/individualconsultants">
              Individual Consultants
            </Nav.Link>
            <Nav.Link href="/dashboard/interviewevaluation">
              Interview Evaluation
            </Nav.Link>
            <Nav.Link href="/dashboard/invoices">Invoices</Nav.Link>
            <Nav.Link href="/dashboard/nextofkin">Next of Kin</Nav.Link>
            <Nav.Link href="/dashboard/payments">Payments</Nav.Link>
            <Nav.Link href="/dashboard/projectstatus">Project Status</Nav.Link>
            <Nav.Link href="/dashboard/prospects">Prospects</Nav.Link>
            <Nav.Link href="/dashboard/qualifications">Qualifications</Nav.Link>
            <Nav.Link href="/dashboard/quotation">Quotation</Nav.Link>
            <Nav.Link href="/dashboard/quotationdetails">
              Quotation Details
            </Nav.Link>
            <Nav.Link href="/dashboard/receipts">Receipts</Nav.Link>
            <Nav.Link href="/dashboard/requisitions">Requisitions</Nav.Link>
            <Nav.Link href="/dashboard/staffverifications">
              Staff Verifications
            </Nav.Link>
            <Nav.Link href="/dashboard/userdetails1">User Details I</Nav.Link>
            <Nav.Link href="/dashboard/userdetails2">User Details II</Nav.Link>
            <Nav.Link href="/dashboard/userrelations">User Relations</Nav.Link>
          </Nav>
          <Container>
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
              style={{
                marginLeft: "15%",
                paddingTop: "2%",
                marginTop: "8%",
                marginBottom: "10%",
              }}
            >
              <h1>Operations</h1>
              <Form.Group controlId="clientId">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.clientId}
                  onChange={this.changeHandler}
                  name="clientId"
                  required
                  isInvalid={this.state.errors.clientId}
                  placeholder="Client ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.clientId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="contractReferenceId">
                <Form.Label>Contract reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.contractReferenceId}
                  onChange={this.changeHandler}
                  name="contractReferenceId"
                  required
                  isInvalid={this.state.errors.contractReferenceId}
                  placeholder="Contract reference ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.contractReferenceId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="consultantId">
                <Form.Label>Consultant ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.consultantId}
                  onChange={this.changeHandler}
                  name="consultantId"
                  required
                  isInvalid={this.state.errors.consultantId}
                  placeholder="Consultant ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.consultantId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="startDate">
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.startDate}
                  onChange={this.changeHandler}
                  name="startDate"
                  required
                  isInvalid={this.state.errors.startDate}
                  placeholder="Start Date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.startDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.endDate}
                  onChange={this.changeHandler}
                  name="endDate"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Date Of Birth"
                  required
                  isInvalid={this.state.errors.endDate}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.endDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="projectStatusId">
                <Form.Label>Project status ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.projectStatusId}
                  onChange={this.changeHandler}
                  name="projectStatusId"
                  placeholder="Project Status ID"
                  required
                  isInvalid={this.state.errors.projectStatusId}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.projectStatusId}
                </Form.Control.Feedback>
              </Form.Group>
              <Button id="add-button" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}
export default Operations;