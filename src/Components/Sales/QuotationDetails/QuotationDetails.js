import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class QuotationDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      quotationReferenceId: "",
      position: 0,
      detail: "",
      unitRate: 0,
      quantity: 0,
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
        .post("https://avcs-platform.herokuapp.com/quotationDetails", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            quotationReferenceId: "",
            position: 0,
            detail: "",
            unitRate: 0,
            quantity: 0,
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
            <NavBar />
            <br />
            <h1>Quotation details</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="quotationReferenceId">
                <Form.Label>Quotation reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.quotationReferenceId}
                  onChange={this.changeHandler}
                  name="quotationReferenceId"
                  required
                  isInvalid={this.state.errors.quotationReferenceId}
                  placeholder="Quotation reference ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.quotationReferenceId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="position">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.position}
                  onChange={this.changeHandler}
                  name="position"
                  required
                  isInvalid={this.state.errors.position}
                  placeholder="Position"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.position}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="detail">
                <Form.Label>Detail</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.detail}
                  onChange={this.changeHandler}
                  name="detail"
                  required
                  isInvalid={this.state.errors.detail}
                  placeholder="Detail"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.detail}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="unityRate">
                <Form.Label>Unity rate</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.unityRate}
                  onChange={this.changeHandler}
                  name="unityRate"
                  required
                  isInvalid={this.state.errors.unityRate}
                  placeholder="Unity rate"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.unityRate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.quantity}
                  onChange={this.changeHandler}
                  name="quantity"
                  required
                  isInvalid={this.state.errors.quantity}
                  placeholder="Quantity"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.quantity}
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
export default QuotationDetails;
