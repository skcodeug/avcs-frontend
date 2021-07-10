import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const token = Buffer.from(`${email}:${password}`, "utf8").toString(
      "base64"
    );
    axios
      .post("https://avcs-platform.herokuapp.com/login", this.state, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((res) => {
        localStorage.setItem("access-token", res.data.access_token);
        this.props.history.push("/users");
      })
      .catch((error) => console.log(error));
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
              <h1>Login</h1>
              <Form.Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control
                      type="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      name="email"
                      required
                      placeholder="email"
                    />
                    <div className="invalid-feedback">Required!</div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                      type="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                      name="password"
                      required
                      placeholder="password"
                    />
                    <div className="invalid-feedback">Required!</div>
                  </Form.Group>
                </Col>
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
export default Login;
