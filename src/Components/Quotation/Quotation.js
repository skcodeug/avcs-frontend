import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class Quotations extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      clientId: "",
      prospectReferenceId: "",
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
        .post("https://avcs-platform.herokuapp.com/quotations", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            clientId: "",
            prospectReferenceId: "",
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
            <h1>Quotations</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="endDate">
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
              <Form.Group as={Col} controlId="clientId">
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
              <Form.Group as={Col} controlId="prospectReferenceId">
                <Form.Label>Prospect reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.prospectReferenceId}
                  onChange={this.changeHandler}
                  name="prospectReferenceId"
                  required
                  isInvalid={this.state.errors.prospectReferenceId}
                  placeholder="Prospect reference ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.prospectReferenceId}
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
export default Quotations;
