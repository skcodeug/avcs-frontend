import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import { Link } from "react-router-dom";

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

      let temp = { ...this.state };
      delete temp.errors;

      axios
        .post("https://avcs-platform.herokuapp.com/login", temp)
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
              let roles = res.data.roles;

              switch (true) {
                case roles[0] === "Admin":
                  localStorage.setItem("role", roles[0]);
                  localStorage.setItem("roles", roles);
                  this.props.history.push("/clients");
                  break;
                case roles[0] === "HR":
                  localStorage.setItem("role", roles[0]);
                  localStorage.setItem("roles", roles);
                  this.props.history.push("/users");
                  break;
                case roles[0] === "Finance":
                  localStorage.setItem("role", roles[0]);
                  localStorage.setItem("roles", roles);
                  this.props.history.push("/invoices");
                  break;
                case roles[0] === "Sales":
                  localStorage.setItem("role", roles[0]);
                  localStorage.setItem("roles", roles);
                  this.props.history.push("/clients");
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
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            width: "50%",
            margin: "13% 0",
            borderRadius: "5px",
            boxShadow: "0 20px 75px rgb(110, 110, 110,0.2)",
          }}
        >
          <h1
            id="login"
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bolder",
              color: "#0d6efd",
            }}
          >
            AVCS
          </h1>
          <div
            style={{
              display: "flex",
              borderRight: "1px solid rgb(220,220,220)",
              margin: "5% 0",
              height: "80%",
            }}
          ></div>
          <Form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
            id="form"
            style={{
              flex: "1.5",
              marginTop: "9%",
              marginBottom: "8%",
              marginLeft: "12%",
            }}
          >
            <Form.Group
              as={Col}
              controlId="email"
              style={{ marginBottom: "4%", width: "20vw" }}
            >
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
            <Form.Group as={Col} controlId="password" style={{ width: "20vw" }}>
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
            <Button
              id="add-button"
              type="submit"
              style={{ margin: "10% 0% 2% 0%", width: "20vw" }}
            >
              Login
            </Button>{" "}
            <br />
            Are you new to AVCS?
            <Link to="/register"> Click here to register!</Link>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
