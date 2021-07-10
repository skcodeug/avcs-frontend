import React from "react"
import { Card, Col, Container, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import NavBar from "../NavBar"

class Approvals extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      requisitionReferenceId: "",
      approverId: "",
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
        .post("https://avcs-platform.herokuapp.com/approvals", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            requisitionReferenceId: "",
            approverId: "",
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
            <h1>Approvals</h1>
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
                  placeholder="Enter date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="requisitionReferenceId">
                <Form.Label>Requisition Reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.requisitionReferenceId}
                  onChange={this.changeHandler}
                  name="requisitionReferenceId"
                  required
                  isInvalid={this.state.errors.requisitionReferenceId}
                  placeholder="requisitionReferenceId"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.requisitionReferenceId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="approverId">
                <Form.Label>Approver ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.approverId}
                  onChange={this.changeHandler}
                  name="approverId"
                  required
                  isInvalid={this.state.errors.approverId}
                  placeholder="Approver ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.approverId}
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
export default Approvals