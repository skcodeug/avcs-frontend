import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class UserDetails2 extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      bank: "",
      branch: "",
      accountNumber: "",
      village: "",
      currentAddress: "",
      permanentAddress: "",
      fatherNames: "",
      motherNames: "",
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
        .post("https://avcs-platform.herokuapp.com/userDetails2", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            bank: "",
            branch: "",
            accountNumber: "",
            village: "",
            currentAddress: "",
            permanentAddress: "",
            fatherNames: "",
            motherNames: "",
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
      <Container>
        <Card.Body>
          <Form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <NavBar /> <br />
            <h1>User details II</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="staffId">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.staffId}
                  onChange={this.changeHandler}
                  name="staffId"
                  required
                  isInvalid={this.state.errors.staffId}
                  placeholder="Staff ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.staffId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="fullName">
                <Form.Label>fullname</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.fullName}
                  onChange={this.changeHandler}
                  name="fullName"
                  required
                  isInvalid={this.state.errors.fullName}
                  placeholder="fullName"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="relationship">
                <Form.Label>Relationship</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.relationship}
                  onChange={this.changeHandler}
                  name="relationship"
                  required
                  isInvalid={this.state.errors.relationship}
                  placeholder="E.g Sister"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.relationship}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="dob">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.dob}
                  onChange={this.changeHandler}
                  name="dob"
                  required
                  isInvalid={this.state.errors.dob}
                  placeholder="dob"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.dob}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="phoneNumber">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.changeHandler}
                  name="phoneNumber"
                  required
                  isInvalid={this.state.errors.phoneNumber}
                  placeholder="E.g 0771232332"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button id="add-button" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Container>
    );
  }
}
export default UserDetails2;
