import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class UserRelations extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      fullName: "",
      relationship: "",
      dob: "",
      phoneNumber: "",
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
        .post("https://avcs-platform.herokuapp.com/userRelations", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            fullName: "",
            relationship: "",
            dob: "",
            phoneNumber: "",
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
                <h1>User Relations</h1>
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
                  <Form.Group as={Col} controlId="fullName">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.fullName}
                      onChange={this.changeHandler}
                      name="fullName"
                      required
                      isInvalid={this.state.errors.fullName}
                      placeholder="E.g John Doe"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.fullName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="Relationship">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.Relationship}
                      onChange={this.changeHandler}
                      name="Relationship"
                      required
                      isInvalid={this.state.errors.Relationship}
                      placeholder="Other Names"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.Relationship}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="dob">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control
                      type="date"
                      value={this.state.dob}
                      onChange={this.changeHandler}
                      name="dob"
                      required
                      isInvalid={this.state.errors.dob}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.dob}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>phoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.changeHandler}
                      name="phoneNumber"
                      required
                      isInvalid={this.state.errors.phoneNumber}
                      placeholder="E.g 0701982234"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.phoneNumber}
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
export default UserRelations;
