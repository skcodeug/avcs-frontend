import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import NavBar from "../NavBar";

class AnnualLeaveMds extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      annualLeaveDepartmentReferenceId: "",
      cooMdId: "",
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
        .post("https://avcs-platform.herokuapp.com/annualLeaveMds", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            annualLeaveDepartmentReferenceId: "",
            cooMdId: "",
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
            <h1>Annual Leave Mds</h1>
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

              <Form.Group as={Col} controlId="cooMdId">
                <Form.Label>Coo MD ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.cooMdId}
                  onChange={this.changeHandler}
                  name="cooMdId"
                  required
                  isInvalid={this.state.errors.cooMdId}
                  placeholder="Coo MD ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.cooMdId}
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
export default AnnualLeaveMds;
