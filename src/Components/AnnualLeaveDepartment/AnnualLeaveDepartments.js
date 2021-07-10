import React from "react"
import { Card, Col, Container, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import NavBar from "../NavBar"

class AnnualLeaveDepartments extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      annualLeaveRecommenderReferenceId: "",
      departmentHeadId: "",
      acknowledgement: "",
      errors: {}
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors
      console.log(temp)

      axios
        .post(
          "https://avcs-platform.herokuapp.com/annualLeaveDepartments",
          temp,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, "")
            }
          }
        )
        .then(() => {
          this.setState(() => ({
            date: "",
            annualLeaveRecommenderReferenceId: "",
            departmentHeadId: "",
            acknowledgement: "",
            errors: {}
          }))
          event.target.className = "needs-validation"
        })
        .catch((error) => console.log(error))
    } else {
      let errors = findFormErrors(this.state)
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: errors
        }
      })
    }
  }

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
            <h1>Annual leave Departments</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.date}
                  onChange={this.changeHandler}
                  name="date"
                  required
                  isInvalid={this.state.errors.date}
                  placeholder="First Name"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="annualLeaveRecommenderReferenceId"
              >
                <Form.Label>Annual Leave Recommender Reference Id</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.annualLeaveRecommenderReferenceId}
                  onChange={this.changeHandler}
                  name="annualLeaveRecommenderReferenceId"
                  required
                  isInvalid={
                    this.state.errors.annualLeaveRecommenderReferenceId
                  }
                  placeholder="Enter reference ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.annualLeaveRecommenderReferenceId}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="departmentId">
                <Form.Label>Department ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.departmentId}
                  onChange={this.changeHandler}
                  name="departmentId"
                  required
                  isInvalid={this.state.errors.departmentId}
                  placeholder="Other Names"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.departmentId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="acknowledgement">
                <Form.Label>Acknowledgement</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.acknowledgement}
                  onChange={this.changeHandler}
                  name="acknowledgement"
                  required
                  isInvalid={this.state.errors.acknowledgement}
                  placeholder="Acknowledgement"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.acknowledgement}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button id="add-button" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Container>
    )
  }
}

export default AnnualLeaveDepartments
