import React from "react";
import { Form, Button, Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import NavBar from "../NavBar";

class ConsultantFirmConsultants extends React.Component {
  constructor() {
    super();
    this.state = {
      consultantId: "",
      firstName: "",
      surname: "",
      otherNames: "",
      dob: "",
      gender: "",
      maritalStatuId: "",
      nationalIdNumber: "",
      email: "",
      phoneNumber: "",
      consultancyRate: "",
      maritalStatusGroup: [],
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
      delete temp.maritalStatusGroup;
      console.log(temp);

      axios
        .post(
          "https://avcs-platform.herokuapp.com/consultantFirmConsultants",
          temp,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, ""),
            },
          }
        )
        .then(() => {
          this.setState(() => ({
            consultantId: "",
            firstName: "",
            surname: "",
            otherNames: "",
            dob: "",
            gender: "",
            maritalStatuId: "",
            nationalIdNumber: "",
            email: "",
            phoneNumber: "",
            consultancyRate: "",
            maritalStatusGroup: [],
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

  fetchUsers = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/maritalStatus")
      .then((...res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            maritalStatusGroup: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchUsers();
  }

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
              <h1>Consultant Firm Consultants</h1>

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

              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                  name="firstName"
                  required
                  isInvalid={this.state.errors.firstName}
                  placeholder="e.g John"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.surname}
                  onChange={this.changeHandler}
                  name="surname"
                  required
                  isInvalid={this.state.errors.surname}
                  placeholder="e.g Doe"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.surname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="othernames">
                <Form.Label>Other Names</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.otherNames}
                  onChange={this.changeHandler}
                  name="otherNames"
                  required
                  isInvalid={this.state.errors.otherNames}
                  placeholder="e.g Steve"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.otherNames}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="dob">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.dob}
                  onChange={this.changeHandler}
                  name="dob"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Date Of Birth"
                  required
                  isInvalid={this.state.errors.dob}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.dob}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.gender}
                  onChange={this.changeHandler}
                  name="gender"
                  placeholder="Gender"
                  required
                  isInvalid={this.state.errors.gender}
                >
                  <div className="invalid-feedback">Enter Prospect Date!</div>
                  <option value="" selected="selected">
                    --
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.gender}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="maritalstatus">
                <Form.Label>Marital Status</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.changeHandler}
                  name="maritalStatusId"
                  required
                  isInvalid={this.state.errors.maritalStatusId}
                >
                  <option value="" defaultValue>
                    --
                  </option>
                  {this.state.maritalStatusGroup &&
                    this.state.maritalStatusGroup.map((maritalstatus) => (
                      <option value={maritalstatus.id}>
                        {maritalstatus.name}
                      </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.maritalStatusId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="nin">
                <Form.Label>NIN</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nationalIdNumber}
                  onChange={this.changeHandler}
                  name="nationalIdNumber"
                  required
                  isInvalid={this.state.errors.nationalIdNumber}
                  placeholder="e.g CM12345678UEBC"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.nationalIdNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter  email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  name="email"
                  required
                  placeholder="e.g abc@avcs.ug"
                  isInvalid={this.state.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="phonenumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.changeHandler}
                  name="phoneNumbers"
                  required
                  isInvalid={this.state.errors.phoneNumber}
                  placeholder="e.g. 0700237434, 0779883527"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="consultancyRate">
                <Form.Label>Consultancy rate</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.consultancyRate}
                  onChange={this.changeHandler}
                  name="consultancyRate"
                  required
                  isInvalid={this.state.errors.consultancyRate}
                  placeholder="e.g. 0700237434, 0779883527"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.consultancyRate}
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
export default ConsultantFirmConsultants;
