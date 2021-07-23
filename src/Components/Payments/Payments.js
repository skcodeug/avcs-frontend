import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class Payments extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      consultantId: "",
      contractReferenceId: "",
      paid: 0,
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
        .post("https://avcs-platform.herokuapp.com/payments", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            consultantId: "",
            contractReferenceId: "",
            paid: 0,
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
                <h1>Payments</h1>
                <Form.Row>
                  <Form.Group as={Col} controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
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

                  <Form.Group as={Col} controlId="consultantId">
                    <Form.Label>Consultant ID</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.consultantId}
                      onChange={this.changeHandler}
                      name="consultantId"
                      required
                      isInvalid={this.state.errors.consultantId}
                      placeholder="Consultant ID"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.consultantId}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="contractReferenceId">
                    <Form.Label>Contract reference ID</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.contractReferenceId}
                      onChange={this.changeHandler}
                      name="contractReferenceId"
                      required
                      isInvalid={this.state.errors.contractReferenceId}
                      placeholder="Contract reference ID"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.contractReferenceId}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="paid">
                    <Form.Label>Paid</Form.Label>
                    <Form.Control
                      type="number"
                      value={this.state.paid}
                      onChange={this.changeHandler}
                      name="paid"
                      required
                      isInvalid={this.state.errors.paid}
                      placeholder="E.g 50000"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.paid}
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
export default Payments;
