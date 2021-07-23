import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import findFormErrors from "./FindFormErrors";

class UserDetails1 extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      fullName: "",
      relationship: "",
      placeofwork: "",
      residence: "",
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
        .post("https://avcs-platform.herokuapp.com/nextOfKin", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            fullName: "",
            relationship: "",
            placeofwork: "",
            residence: "",
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
                <h1>Next of kin</h1>
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

                  <Form.Group as={Col} controlId="relationship">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.relationship}
                      onChange={this.changeHandler}
                      name="relationship"
                      required
                      isInvalid={this.state.errors.relationship}
                      placeholder="E.g Brother"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.relationship}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="placeOfWork">
                    <Form.Label>Place of work</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.placeOfWork}
                      onChange={this.changeHandler}
                      name="placeOfWork"
                      required
                      isInvalid={this.state.errors.placeOfWork}
                      placeholder="E.g Uganda House"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.placeOfWork}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="residence">
                    <Form.Label>Residence</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.residence}
                      onChange={this.changeHandler}
                      name="residence"
                      placeholder="E.g Bukoto"
                      required
                      isInvalid={this.state.errors.residence}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.residence}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>phoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.changeHandler}
                      name="phoneNumber"
                      placeholder="E.g 0772347446"
                      required
                      isInvalid={this.state.errors.phoneNumber}
                    ></Form.Control>
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
export default UserDetails1;
