import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class StaffVerifications extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      staffRef: "",
      applicationLetter: "",
      cv: "",
      academicPaper: "",
      refereeLetter: "",
      interviewEvaluationReferenceId: "",
      managementRecommendation: "",
      appointmentApproval: "",
      appointmentLetter: "",
      bioData: "",
      confirmationLetter: "",
      exitInterview: "",
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
        .post("https://avcs-platform.herokuapp.com/staffVerifications", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            staffRef: "",
            applicationLetter: "",
            cv: "",
            academicPaper: "",
            refereeLetter: "",
            interviewEvaluationReferenceId: "",
            managementRecommendation: "",
            appointmentApproval: "",
            appointmentLetter: "",
            bioData: "",
            confirmationLetter: "",
            exitInterview: "",
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
            <NavNar /> <br />
            <h1>Staff verifications</h1>
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

              <Form.Group as={Col} controlId="staffRef">
                <Form.Label>Staff Ref</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.staffRef}
                  onChange={this.changeHandler}
                  name="staffRef"
                  required
                  isInvalid={this.state.errors.staffRef}
                  placeholder="Staff Ref"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.staffRef}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="applicationLetter">
                <Form.Label>Application letter</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.applicationLetter}
                  onChange={this.changeHandler}
                  name="applicationLetter"
                  required
                  isInvalid={this.state.errors.applicationLetter}
                  placeholder="Application letter"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.applicationLetter}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="cv">
                <Form.Label>Curriculum vitae</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.cv}
                  onChange={this.changeHandler}
                  name="cv"
                  required
                  isInvalid={this.state.errors.cv}
                  placeholder="Curriculum vitae"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.cv}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="academicPaper">
                <Form.Label>Academic paper</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.academicPaper}
                  onChange={this.changeHandler}
                  name="academicPaper"
                  required
                  isInvalid={this.state.errors.academicPaper}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.academicPaper}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="refereeLetter">
                <Form.Label>Referee letter</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.refereeLetter}
                  onChange={this.changeHandler}
                  name="refereeLetter"
                  required
                  isInvalid={this.state.errors.refereeLetter}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.refereeLetter}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="refereeLetter">
                <Form.Label>Referee letter</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.refereeLetter}
                  onChange={this.changeHandler}
                  name="refereeLetter"
                  required
                  isInvalid={this.state.errors.refereeLetter}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.refereeLetter}
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
export default StaffVerifications;
