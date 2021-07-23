import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class ConsultantCategories extends React.Component {
  state = {
    name: "",
    errors: {},
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
        .post(
          "https://avcs-platform.herokuapp.com/consultantCategories",
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
          this.setState(() => ({ name: "" }));
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
              <h1>Consultant categories</h1>

              <Form.Group lg="3" controlId="clientcategories">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.changeHandler}
                  isInvalid={this.state.errors.name}
                  name="name"
                  required
                  placeholder="Enter category"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Button id="add-button" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}
export default ConsultantCategories;
