import React from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      surname: "",
      otherNames: "",
      client: "",
      dateOfBirth: "",
      gender: "",
      employer: "",
      emailAddress1: "",
      physicalAddress: "",
      townCity: "",
      ccontactPerson: "",
      cphone1: "",
      cemail1: "",
      cphysicalAddress: "",
      cTownCity: "",
      knowAboutAVCS: "",
      errors: {},
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/clients", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            firstName: "",
            otherNames: "",
            surname: "",
            client: "",
            dateOfBirth: "",
            gender: "",
            employer: "",
            emailAddress1: "",
            physicalAddress: "",
            townCity: "",
            ccontactPerson: "",
            cphone1: "",
            cemail1: "",
            cphysicalAddress: "",
            cTownCity: "",
            knowAboutAVCS: "",
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

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderSelectedForm(param) {
    switch (param) {
      case "individual":
        return (
          <div name="individual" id="individual">
            <Form.Row>
              <Form.Group as={Col} controlId="dob">
                <Form.Label>dob</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.dob}
                  onChange={this.changeHandler}
                  name="dob"
                  required
                  isInvalid={this.state.errors.dob}
                  placeholder="Enter date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.dob}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="gender">
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
              <Form.Group as={Col} controlId="maritalStatusId">
                <Form.Label>Marital Status</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.changeHandler}
                  name="maritalStatusId"
                  required
                  isInvalid={this.state.errors.maritalStatusId}
                >
                  <div className="invalid-feedback">Enter Prospect Date!</div>
                  <option value="" selected="selected">
                    --
                  </option>
                  {this.state.maritalStatusGroup &&
                    this.state.maritalStatusGroup.map((maritalStatus) => (
                      <option value={maritalStatus.id}>
                        {maritalStatus.name}
                      </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.maritalStatusId}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="nationalIdNumber">
                <Form.Label>NIN</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nationalIdNumber}
                  onChange={this.changeHandler}
                  name="nationalIdNumber"
                  required
                  isInvalid={this.state.errors.nationalIdNumber}
                  placeholder="National Id Numner"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.nationalIdNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter work email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  name="email"
                  required
                  isInvalid={this.state.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="phoneNumbers">
                <Form.Label>Phone numbers</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.phoneNumbers}
                  onChange={this.changeHandler}
                  name="phoneNumbers"
                  required
                  isInvalid={this.state.errors.phoneNumbers}
                  placeholder="Enter phone numbers e.g. 0700237434, 0779883527"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumbers}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="addresses">
                <Form.Label>Addresses</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.addresses}
                  onChange={this.changeHandler}
                  name="addresses"
                  required
                  isInvalid={this.state.errors.addresses}
                  placeholder="Enter addresses"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.addresses}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="employer">
                <Form.Label>Employer</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.employer}
                  onChange={this.changeHandler}
                  name="employer"
                  required
                  isInvalid={this.state.errors.employer}
                  placeholder="Enter employer"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.employer}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.city}
                  onChange={this.changeHandler}
                  name="city"
                  required
                  isInvalid={this.state.errors.city}
                  placeholder="Enter city"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="avcsDiscovery">
                <Form.Label>AVCS discovery</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.avcsDiscovery}
                  onChange={this.changeHandler}
                  name="avcsDiscovery"
                  required
                  isInvalid={this.state.errors.avcsDiscovery}
                  placeholder="Enter avcs discovery"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.avcsDiscovery}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </div>
        );
      case "corporate":
        return (
          <div name="corporate" id="corporate">
            <Form.Row>
              <Form.Group as={Col} controlId="tinNo">
                <Form.Label>TIN No</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.tinNo}
                  onChange={this.changeHandler}
                  name="tinNo"
                  required
                  isInvalid={this.state.errors.tinNo}
                  placeholder="Enter tin number"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.tinNo}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="contactsNames">
                <Form.Label>Contacts names</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.contactsNames}
                  onChange={this.changeHandler}
                  name="contactsNames"
                  required
                  isInvalid={this.state.errors.contactsNames}
                  placeholder="Enter contacts names"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.contactsNames}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="emails">
                <Form.Label>Emails</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.emails}
                  onChange={this.changeHandler}
                  name="emails"
                  required
                  isInvalid={this.state.errors.emails}
                  placeholder="emails"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.emails}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="phoneNumbers">
                <Form.Label>Phone numbers</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.phoneNumbers}
                  onChange={this.changeHandler}
                  name="phoneNumbers"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Enter phone numbers"
                  required
                  isInvalid={this.state.errors.phoneNumbers}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumbers}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.address}
                  onChange={this.changeHandler}
                  name="address"
                  required
                  isInvalid={this.state.errors.address}
                  placeholder="Enter address"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={this.state.city}
                  onChange={this.changeHandler}
                  name="city"
                  required
                  isInvalid={this.state.errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="avcsDiscovery">
                <Form.Label>AVCS discovery</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.avcsDiscovery}
                  onChange={this.changeHandler}
                  name="avcsDiscovery"
                  required
                  isInvalid={this.state.errors.avcsDiscovery}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.avcsDiscovery}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </div>
        );
      case "form_name3":
        return <form name="individual" id="form_name3"></form>;
      default:
        return null;
    }
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12}>
            <Card.Body>
              <Form
                className="needs-validation"
                onSubmit={this.submitHandler}
                noValidate
              >
                <h1>Clients</h1>
                <Form.Row>
                  <Form.Group as={Col} controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.firstName}
                      onChange={this.changeHandler}
                      name="firstName"
                      required
                      placeholder="First Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.surname}
                      onChange={this.changeHandler}
                      name="surname"
                      required
                      placeholder="Surname"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.surname}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="othernames">
                    <Form.Label>Other Names</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.otherNames}
                      onChange={this.changeHandler}
                      name="otherNames"
                      required
                      placeholder="Other Names"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.otherNames}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="clientcategoryid">
                    <Form.Label>Client category ID</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.clientCategoryId}
                      onChange={this.changeHandler}
                      name="clientCategoryId"
                      required
                      placeholder="Enter ID"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.clientCategoryId}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      value={this.state.selectedValue}
                      onChange={this.handleChange}
                    >
                      <option value="" selected="selected">
                        --Select One--
                      </option>
                      <option value="individual">Individual</option>
                      <option value="corporate">Corporate</option>
                    </Form.Control>
                  </Form.Group>
                  <Col>{this.renderSelectedForm(this.state.selectedValue)}</Col>
                </Form.Row>

                <Button id="add-button" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default Clients;
