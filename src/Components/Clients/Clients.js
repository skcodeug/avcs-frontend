import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
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
      clientCategoryId: "",
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
            surname: "",
            otherNames: "",
            clientCategoryId: "",
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
            <Button id="add-button" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Container>
    );
  }
}
export default Clients;
