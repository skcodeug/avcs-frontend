import React from "react";
import { Form, Button, Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class BioData extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      residence: "",
      nextOfKinId: "",
      employmentExperiences: "",
      responsibilitiesBefore: "",
      personalSkills: "",
      periodOfAvailability: "",
      expectedDate: "",
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
        .post("https://avcs-platform.herokuapp.com/biodata", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            residence: "",
            nextOfKinId: "",
            employmentExperiences: "",
            responsibilitiesBefore: "",
            personalSkills: "",
            periodOfAvailability: "",
            expectedDate: "",
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
              <h1>BioData</h1>

              <Form.Group controlId="staffId">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.staffId}
                  onChange={this.changeHandler}
                  name="staffId"
                  required
                  isInvalid={this.state.errors.staffId}
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.staffId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="residence">
                <Form.Label>Residence</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.residence}
                  onChange={this.changeHandler}
                  name="residence"
                  required
                  isInvalid={this.state.errors.residence}
                  placeholder="e.g Muyenga"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.residence}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="nextOfKinId">
                <Form.Label>Next of kin ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nextOfKinId}
                  onChange={this.changeHandler}
                  name="nextOfKinId"
                  required
                  isInvalid={this.state.errors.nextOfKinId}
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.nextOfKinId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="employmentExperiences">
                <Form.Label>Employment experiences</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.employmentExperiences}
                  onChange={this.changeHandler}
                  name="employmentExperiences"
                  required
                  isInvalid={this.state.errors.employmentExperiences}
                  placeholder="e.g I was a leader ..."
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.employmentExperiences}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="responsibilitiesBefore">
                <Form.Label>Responsibilities before</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.responsibilitiesBefore}
                  onChange={this.changeHandler}
                  name="responsibilitiesBefore"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Enter your esponsibilities before"
                  required
                  isInvalid={this.state.errors.responsibilitiesBefore}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.responsibilitiesBefore}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="personalSkills">
                <Form.Label>Personal skills</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.personalSkills}
                  onChange={this.changeHandler}
                  name="personalSkills"
                  placeholder="e.g Communication"
                  required
                  isInvalid={this.state.errors.personalSkills}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.personalSkills}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="periodOfAvailability">
                <Form.Label>Period of availability</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.changeHandler}
                  name="periodOfAvailability"
                  required
                  isInvalid={this.state.errors.periodOfAvailability}
                  placeholder="e.g 6 months"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.periodOfAvailability}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="expectedDate">
                <Form.Label>Expected date</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.expectedDate}
                  onChange={this.changeHandler}
                  name="expectedDate"
                  required
                  isInvalid={this.state.errors.expectedDate}
                  placeholder="e.g CM12347634KDFJ"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.expectedDate}
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
export default BioData;
