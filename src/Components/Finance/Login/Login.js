import React from "react";
import { Form, Col, Container, Button, Row } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: "",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      const token = Buffer.from(
        `${this.state.email}:${this.state.password}`,
        "utf8"
      ).toString("base64");

      let temp = { ...this.state };
      delete temp.errors;

      axios
        .post("https://avcs-platform.herokuapp.com/login", temp, {
          headers: { Authorization: `Basic ${token}` },
        })
        .then((res) => {
          localStorage.setItem(
            "access-token",
            JSON.stringify(res.data.access_token)
          );
          axios
            .get(`https://avcs-platform.herokuapp.com/users/${res.data.id}`, {
              headers: {
                Authorization:
                  "Bearer " +
                  localStorage.getItem("access-token").replace(/"/g, ""),
              },
            })
            .then((res) => {
              switch (res.data.roles[0]) {
                case "Admin":
                  localStorage.setItem(
                    "role",
                    JSON.stringify(res.data.roles[0])
                  );
                  this.props.history.push("/admin/users");
                  break;
                case "HR":
                  localStorage.setItem(
                    "role",
                    JSON.stringify(res.data.roles[0])
                  );
                  this.props.history.push("/hr/dashboard");
                  break;
                case "Finance":
                  localStorage.setItem(
                    "role",
                    JSON.stringify(res.data.roles[0])
                  );
                  this.props.history.push("/finance/dashboard");
                  break;
                case "Sales":
                  localStorage.setItem(
                    "role",
                    JSON.stringify(res.data.roles[0])
                  );
                  this.props.history.push("/sales/dashboard");
                  break;

                default:
                  break;
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
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
        <Row>
          <Col xs={12}>
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
              id="form"
            >
              <h1 id="login">Login</h1>

              <Form.Group as={Col} controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  name="email"
                  required
                  placeholder="E.g abc@avcs.co.ug"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                  name="password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button id="add-button" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Login;
