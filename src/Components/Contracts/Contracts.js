import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import NavBar from "../NavBar";

class Contracts extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      quotationReferenceId: "",
      clientId: "",
      prospectDetailsId: "",
      startDate: "",
      endDate: "",
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
        .post("https://avcs-platform.herokuapp.com/contracts", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            quotationReferenceId: "",
            clientId: "",
            prospectDetailsId: "",
            startDate: "",
            endDate: "",
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
            <h1>Contracts</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.date}
                  onChange={this.changeHandler}
                  name="date"
                  required
                  isInvalid={this.state.errors.date}
                  placeholder="First Name"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="quotationReferenceId">
                <Form.Label>Quotation reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.quotationReferenceId}
                  onChange={this.changeHandler}
                  name="quotationReferenceId"
                  required
                  isInvalid={this.state.errors.quotationReferenceId}
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.quotationReferenceId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="clientId">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.clientId}
                  onChange={this.changeHandler}
                  name="clientId"
                  required
                  isInvalid={this.state.errors.clientId}
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.clientId}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="prospectDetailsId">
                <Form.Label>Prospect details ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.prospectDetailsId}
                  onChange={this.changeHandler}
                  name="prospectDetailsId"
                  required
                  isInvalid={this.state.errors.prospectDetailsId}
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.prospectDetailsId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.startDate}
                  onChange={this.changeHandler}
                  name="startDate"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Enter date"
                  required
                  isInvalid={this.state.errors.startDate}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.startDate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.endDate}
                  onChange={this.changeHandler}
                  name="endDate"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Enter date"
                  required
                  isInvalid={this.state.errors.endDate}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.endDate}
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
export default Contracts;
