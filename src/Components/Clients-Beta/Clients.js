import React from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
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
      case "form_name1":
        return (
          <div name="form_name1" id="form_name1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                value={this.state.dateOfBirth}
                onChange={this.changeHandler}
                name="dateOfBirth"
                id="defaultFormRegisterPasswordEx4"
                placeholder="Date Of Birth"
                required
              />
              <div className="invalid-feedback">Enter Date Of Birth!</div>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.gender}
                  onChange={this.changeHandler}
                  name="gender"
                  placeholder="Gender"
                  required
                >
                  <div className="invalid-feedback">Enter Prospect Date!</div>
                  <option value="" selected="selected">
                    --
                  </option>
                  <option value="form_name1">Male</option>
                  <option value="form_name2">Female</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                value={this.state.employer}
                onChange={this.changeHandler}
                name="employer"
                id="defaultFormRegisterPasswordEx4"
                required
                placeholder="Employer"
              />
              <div className="invalid-feedback">Employer is Required!</div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address 1</Form.Label>
              <Form.Control
                type="email"
                value={this.state.emailAddress1}
                onChange={this.changeHandler}
                name="emailAddress1"
                id="defaultFormRegisterPasswordEx4"
                required
                placeholder="Email 1"
              />
              <div className="invalid-feedback">Enter Valid Email!</div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address 2</Form.Label>
              <Form.Control type="email" placeholder="Email 2" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Physical Address</Form.Label>
              <Form.Control
                type="text"
                value={this.state.physicalAddress}
                onChange={this.changeHandler}
                name="physicalAddress"
                required
                placeholder="Physical Address"
              />
              <div className="invalid-feedback">
                Provide your physical address!
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Town/City</Form.Label>
              <Form.Control
                type="text"
                value={this.state.townCity}
                onChange={this.changeHandler}
                name="townCity"
                id="defaultFormRegisterPasswordEx4"
                required
                placeholder="Town/city"
              />
              <div className="invalid-feedback">Provide your Town or City!</div>
            </Form.Group>
          </div>
        );
      case "form_name2":
        return (
          <div name="form_name1" id="form_name2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contact Persons</Form.Label>
              <Form.Control
                type="text"
                value={this.state.ccontactPerson}
                onChange={this.changeHandler}
                name="ccontactPerson"
                id="defaultFormRegisterPasswordEx4"
                placeholder="Contact Person"
                required
              />
              <div className="invalid-feedback">
                Who is your Contact Person!
              </div>
              <br></br>
              <Form.Control placeholder="2nd Contact Person" type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tel No 1</Form.Label>
              <Form.Control
                type="text"
                value={this.state.cphone1}
                onChange={this.changeHandler}
                name="cphone1"
                required
                placeholder="Tel No 1"
              />
              <div className="invalid-feedback">
                Enter your primary phone number!
              </div>
              <br></br>
              <Form.Control type="text" placeholder="Tel No 2" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address 1</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email 1"
                value={this.state.cemail1}
                onChange={this.changeHandler}
                name="cemail1"
              />
              <div className="invalid-feedback">
                Enter a valid email address!
              </div>
              <br></br>
              <Form.Control type="email" placeholder="Email 2" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address 2</Form.Label>
              <Form.Control type="email" placeholder="Email 2" />
              <br></br>
              <Form.Control type="email" placeholder="Email 2" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Physical Address</Form.Label>
              <Form.Control
                type="text"
                value={this.state.cphysicalAddress}
                onChange={this.changeHandler}
                name="cphysicalAddress"
                required
                placeholder="Physical Address"
              />
              <div className="invalid-feedback">Enter Physical Address!</div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Town/City</Form.Label>
              <Form.Control
                type="text"
                value={this.state.cTownCity}
                onChange={this.changeHandler}
                name="cTownCity"
                required
                placeholder="Town/City"
              />
              <div className="invalid-feedback">Enter Prospect Date!</div>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>How did you get to know about AVCS</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.knowAboutAVCS}
                onChange={this.changeHandler}
                name="knowAboutAVCS"
                required
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </div>
        );
      case "form_name3":
        return <form name="form_name1" id="form_name3"></form>;
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
                  <Form.Group as={Col} controlId="formBasicEmail">
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

                  <Form.Group as={Col} controlId="formBasicEmail">
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

                  <Form.Group as={Col} controlId="formBasicPassword">
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
                      <option value="form_name1">Individual</option>
                      <option value="form_name2">Corporate</option>
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
