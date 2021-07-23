import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class Prospects extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      clientId: "",
      errors: {},
    };
  }

  handleChange() {}

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
        .post("https://avcs-platform.herokuapp.com/prospects", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            clientId: "",
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
      <>
        <AppBar />
        <div style={{ display: "flex" }}>
          {this.props.role === "Admin" && <AdminNav />}
          <Container>
            <Card.Body>
              <Form
                className="needs-validation"
                onSubmit={this.submitHandler}
                noValidate
                style={{
                  marginLeft: "15%",
                  paddingTop: "2%",
                  marginTop: "8%",
                  marginBottom: "10%",
                }}
              >
                <h1>Prospects</h1>
                <Form.Row>
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
                  <Form.Group as={Col} controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
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
                </Form.Row>

                <Button id="add-button" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Container>
        </div>
      </>
    );
  }
}
export default Prospects;
