import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class ClientCategories extends React.Component {
  state = {
    name: "",
    errors: {},
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  findFormErrors = () => {
    const errors = {};
    let validateName = () => {
      if (this.state.name === "") {
        errors.name = "Please provide a marital status";
      }
    };
    validateName();

    return errors;
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(this.findFormErrors()).length === 0) {
      event.target.className += " was-validated";
      let temp = { ...this.state };
      delete temp.errors;

      axios
        .post("https://avcs-platform.herokuapp.com/maritalStatus", temp)
        .then(() => {
          this.setState(() => ({ name: "" }));
          event.target.className = "needs-validation";
        })
        .catch((error) => console.log(error));
    } else {
      let errors = this.findFormErrors();
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
      <>
        <Container>
          <Card.Body>
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <h1>Marital Status</h1>
              <Form.Row>
                <Form.Group as={Col} lg="3" controlId="maritalstatus">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.name}
                    name="name"
                    required
                    placeholder="Marital Status"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Button id="add-button" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Container>
      </>
    );
  }
}
export default ClientCategories;
