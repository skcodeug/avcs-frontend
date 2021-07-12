import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import NavBar from "../NavBar";

class AnnualLeaveRecommenders extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      annualLeaveReferenceId: "",
      recommenderId: "",
      acknowledgement: "",
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
        .post(
          "https://avcs-platform.herokuapp.com/annualLeaveRecommenders",
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
            date: "",
            annualLeaveReferenceId: "",
            recommenderId: "",
            acknowledgement: "",
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
            <h1>Annual Leave Recommenders</h1>
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
                  placeholder="Enter date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="annualLeaveReferenceId">
                <Form.Label>Annual Leave Reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.annualLeaveReferenceId}
                  onChange={this.changeHandler}
                  name="annualLeaveReferenceId"
                  required
                  isInvalid={this.state.errors.annualLeaveReferenceId}
                  placeholder="annualLeaveReferenceId"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.annualLeaveReferenceId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="recommenderId">
                <Form.Label>Recommender ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.recommenderId}
                  onChange={this.changeHandler}
                  name="recommenderId"
                  required
                  isInvalid={this.state.errors.recommenderId}
                  placeholder="Recommender ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.recommenderId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="acknowledgement">
                <Form.Label>Acknowledgement</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.acknowledgement}
                  onChange={this.changeHandler}
                  name="acknowledgement"
                  required
                  isInvalid={this.state.errors.acknowledgement}
                  placeholder="Other Names"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.acknowledgement}
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
export default AnnualLeaveRecommenders;
