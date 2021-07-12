import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "../AnnualLeave/FindFormErrors";
import NavBar from "../NavBar";

class AnnualLeave extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      staffId: "",
      period: "",
      purpose: "",
      lastDate: "",
      returnDate: "",
      contactAddress: "",
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
        .post("https://avcs-platform.herokuapp.com/annualLeave", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            staffId: "",
            period: "",
            purpose: "",
            backupStaffId: "",
            lastDate: "",
            returnDate: "",
            contactAddress: "",
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
      <Container>
        <Card.Body>
          <Form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <NavBar /> <br />
            <h1>Annual Leave</h1>
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

              <Form.Group as={Col} controlId="staffid">
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

              <Form.Group as={Col} controlId="period">
                <Form.Label>Period</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.period}
                  onChange={this.changeHandler}
                  name="period"
                  required
                  isInvalid={this.state.errors.period}
                  placeholder="Period"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.period}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="purpose">
                <Form.Label>Purpose</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.purpose}
                  onChange={this.changeHandler}
                  name="purpose"
                  required
                  isInvalid={this.state.errors.purpose}
                  placeholder="Purpose"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.purpose}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="lastDate">
                <Form.Label>Last Date</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.lastDate}
                  onChange={this.changeHandler}
                  name="lastDate"
                  placeholder="Last date"
                  required
                  isInvalid={this.state.errors.lastDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.lastDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="returndate">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.returnDate}
                  onChange={this.changeHandler}
                  name="returnDate"
                  required
                  isInvalid={this.state.errors.returnDate}
                  placeholder="Return Date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.returnDate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="contactaddress">
                <Form.Label>Contact Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact address"
                  value={this.state.contactaddress}
                  onChange={this.changeHandler}
                  name="contactaddress"
                  required
                  isInvalid={this.state.errors.contactaddress}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.contactaddress}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button id="add-button" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Container>
    );
  }
}
export default AnnualLeave;
