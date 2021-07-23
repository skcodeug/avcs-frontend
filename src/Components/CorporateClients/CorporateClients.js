import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class CorporateClients extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "",
      tinNo: "",
      contactsNames: "",
      emails: "",
      phoneNumbers: "",
      address: "",
      city: "",
      avcsDiscovery: "",
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
        .post("https://avcs-platform.herokuapp.com/corporateClients", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            clientId: "",
            tinNo: "",
            contactsNames: "",
            emails: "",
            phoneNumbers: "",
            address: "",
            city: "",
            avcsDiscovery: "",
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
                <h1>Corporate clients</h1>
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
                      placeholder="First Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.clientId}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="tinNo">
                    <Form.Label>TIN No</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.tinNo}
                      onChange={this.changeHandler}
                      name="tinNo"
                      required
                      isInvalid={this.state.errors.tinNo}
                      placeholder="Enter tin number"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.tinNo}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="contactsNames">
                    <Form.Label>Contacts names</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.contactsNames}
                      onChange={this.changeHandler}
                      name="contactsNames"
                      required
                      isInvalid={this.state.errors.contactsNames}
                      placeholder="Enter contacts names"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.contactsNames}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="emails">
                    <Form.Label>Emails</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.emails}
                      onChange={this.changeHandler}
                      name="emails"
                      required
                      isInvalid={this.state.errors.emails}
                      placeholder="emails"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.emails}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="phoneNumbers">
                    <Form.Label>Phone numbers</Form.Label>
                    <Form.Control
                      type="date"
                      value={this.state.phoneNumbers}
                      onChange={this.changeHandler}
                      name="phoneNumbers"
                      id="defaultFormRegisterPasswordEx4"
                      placeholder="Enter phone numbers"
                      required
                      isInvalid={this.state.errors.phoneNumbers}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.phoneNumbers}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.address}
                      onChange={this.changeHandler}
                      name="address"
                      required
                      isInvalid={this.state.errors.address}
                      placeholder="Enter address"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter city"
                      value={this.state.city}
                      onChange={this.changeHandler}
                      name="city"
                      required
                      isInvalid={this.state.errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="avcsDiscovery">
                    <Form.Label>AVCS discovery</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.avcsDiscovery}
                      onChange={this.changeHandler}
                      name="avcsDiscovery"
                      required
                      isInvalid={this.state.errors.avcsDiscovery}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.avcsDiscovery}
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
export default CorporateClients;
