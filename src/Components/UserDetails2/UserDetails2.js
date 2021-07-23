import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class UserDetails2 extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      bank: "",
      branch: "",
      accountNumber: "",
      village: "",
      district: "",
      currentAddress: "",
      permanentAddress: "",
      fatherNames: "",
      motherNames: "",
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
        .post("https://avcs-platform.herokuapp.com/userDetails2", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            bank: "",
            branch: "",
            accountNumber: "",
            village: "",
            district: "",
            currentAddress: "",
            permanentAddress: "",
            fatherNames: "",
            motherNames: "",
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
                <h1>User details II</h1>
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
                  <Form.Group as={Col} controlId="bank">
                    <Form.Label>Bank</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.bank}
                      onChange={this.changeHandler}
                      name="bank"
                      required
                      isInvalid={this.state.errors.bank}
                      placeholder="E.g Centenary bank"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.bank}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="branch">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.branch}
                      onChange={this.changeHandler}
                      name="branch"
                      required
                      isInvalid={this.state.errors.branch}
                      placeholder="E.g Wandegeya branch"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.branch}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="accountNumber">
                    <Form.Label>accountNumber</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.accountNumber}
                      onChange={this.changeHandler}
                      name="accountNumber"
                      required
                      isInvalid={this.state.errors.accountNumber}
                      placeholder="E.g Sister"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.accountNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="village">
                    <Form.Label>Village</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.village}
                      onChange={this.changeHandler}
                      name="village"
                      required
                      isInvalid={this.state.errors.village}
                      placeholder="E.g Mulago"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.village}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="district">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.district}
                      onChange={this.changeHandler}
                      name="district"
                      required
                      isInvalid={this.state.errors.district}
                      placeholder="E.g Kampala"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.district}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="currentAddress">
                    <Form.Label>Current address</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.currentAddress}
                      onChange={this.changeHandler}
                      name="currentAddress"
                      required
                      isInvalid={this.state.errors.currentAddress}
                      placeholder="Current address"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.currentAddress}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="permanentAddress">
                    <Form.Label>Permanent address</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.permanentAddress}
                      onChange={this.changeHandler}
                      name="permanentAddress"
                      required
                      isInvalid={this.state.errors.permanentAddress}
                      placeholder="Permanent address"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.permanentAddress}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="fatherNames">
                    <Form.Label>fatherNames</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.fatherNames}
                      onChange={this.changeHandler}
                      name="fatherNames"
                      required
                      isInvalid={this.state.errors.fatherNames}
                      placeholder="E.g John Doe"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.fatherNames}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="motherNames">
                    <Form.Label>Mother names</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.motherNames}
                      onChange={this.changeHandler}
                      name="motherNames"
                      required
                      isInvalid={this.state.errors.motherNames}
                      placeholder="E.g Jane Doe"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.motherNames}
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
export default UserDetails2;
