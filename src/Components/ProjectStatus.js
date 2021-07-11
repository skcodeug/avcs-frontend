import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import 

class ProjectStatus extends React.Component {
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
        errors.name = "Please provide a valid name";
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
        .post("https://avcs-platform.herokuapp.com/ProjectStatus", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
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
        <Container>
          <Card.Body>
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <h1>Project status</h1>
              <Form.Row>
                <Form.Group as={Col} lg="3" controlId="projectStatus">
                  <Form.Label>Project status</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.name}
                    name="name"
                    required
                    placeholder="projectStatus"
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
    );
  }
}
export default ProjectStatus;
