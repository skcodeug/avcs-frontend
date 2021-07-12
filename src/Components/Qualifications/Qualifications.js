import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class Qualifications extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      year: "",
      name: "",
      insitution: "",
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
        .post("https://avcs-platform.herokuapp.com/qualifications", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            year: "",
            name: "",
            insitution: "",
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
            <h1>Qualifications</h1>
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

              <Form.Group as={Col} controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.year}
                  onChange={this.changeHandler}
                  name="year"
                  required
                  isInvalid={this.state.errors.year}
                  placeholder="E.g 2020"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.year}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.changeHandler}
                  name="name"
                  required
                  isInvalid={this.state.errors.name}
                  placeholder="E.g MBA"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="institution">
                <Form.Label>Institution</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.institution}
                  onChange={this.changeHandler}
                  name="institution"
                  required
                  isInvalid={this.state.errors.institution}
                  placeholder="E.g Makerere University Business School"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.institution}
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
export default Qualifications;
