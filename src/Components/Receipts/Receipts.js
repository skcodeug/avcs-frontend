import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class Receipts extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      clientId: "",
      invoiceReferenceId: "",
      amountPaid: 0,
      amountInWords: "",
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
        .post("https://avcs-platform.herokuapp.com/receipts", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            clientId: "",
            invoiceReferenceId: "",
            amountPaid: 0,
            amountInWords: "",
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
            <h1>Receipts</h1>
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
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.date}
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

              <Form.Group as={Col} controlId="paid">
                <Form.Label>Paid</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.paid}
                  onChange={this.changeHandler}
                  name="paid"
                  required
                  isInvalid={this.state.errors.paid}
                  placeholder="E.g 55000"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.paid}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="balance">
                <Form.Label>Balance</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.balance}
                  onChange={this.changeHandler}
                  name="balance"
                  required
                  isInvalid={this.state.errors.balance}
                  placeholder="E.g 15000"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.balance}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="paidInWords">
                <Form.Label>Paid in words</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.paidInWords}
                  onChange={this.changeHandler}
                  name="paidInWords"
                  required
                  isInvalid={this.state.errors.paidInWords}
                  placeholder="E.g 45000"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.paidInWords}
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
export default Receipts;
