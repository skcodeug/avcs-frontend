import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"

class Canvas extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      details: "",
      amount: 0,
      requisitionerId: "",
      errors: {}
    }
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      date: "",
      details: "",
      amount: 0,
      requisitionerId: "",
      errors: {}
    }))
    document.getElementById("btn-close").click()
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors

      axios
        .post("https://avcs-platform.herokuapp.com/requisitions", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Created successfully!")
          this.setState(() => ({
            date: "",
            details: "",
            amount: 0,
            requisitionerId: "",
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
          errors
        }
      })
    }
  }

  render() {
    return (
      <div style={{ margin: "10% 0 -3% 95%" }}>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ marginLeft: "15%", marginTop: "-10%" }}
        >
          Add
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "35%" }}
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="btn-close"
              style={{ display: "none" }}
            ></button>
          </div>
          <div class="offcanvas-body">
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
              style={{
                paddingLeft: "2%",
                paddingRight: "2%",
                paddingBottom: "15%"
              }}
            >
              <h1
                style={{
                  marginBottom: "5%",
                  fontSize: "2rem",
                  fontWeight: "bolder"
                }}
              >
                Create
              </h1>

              <Row>
                <Form.Group as={Col} controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.date}
                    onChange={this.changeHandler}
                    name="date"
                    required
                    isInvalid={this.state.errors.date}
                    placeholder="Date"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.date}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="details">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.details}
                    onChange={this.changeHandler}
                    name="details"
                    required
                    isInvalid={this.state.errors.details}
                    placeholder="Details"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.details}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.amount}
                    onChange={this.changeHandler}
                    name="amount"
                    required
                    isInvalid={this.state.errors.amount}
                    placeholder="E.g 2500000"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.amount}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="requisitionerId">
                  <Form.Label>Requisitioner ID</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.requisitionerId}
                    onChange={this.changeHandler}
                    name="requisitionerId"
                    required
                    isInvalid={this.state.errors.requisitionerId}
                    placeholder="Requisitioner ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.requisitionerId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <div style={{ marginTop: "10%" }}>
                <Button
                  id="add-button"
                  type="submit"
                  style={{ marginRight: "3%" }}
                >
                  Submit
                </Button>
                <Button
                  variant="secondary"
                  id="cancel-button"
                  type="reset"
                  onClick={this.reset}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Canvas
