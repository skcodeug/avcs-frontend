import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Canvas extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      staffId: "",
      period: "",
      purpose: "",
      lastDate: "",
      returnDate: "",
      contactAddress: "",
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
      staffId: "",
      period: "",
      purpose: "",
      lastDate: "",
      returnDate: "",
      contactAddress: "",
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
        .post("https://avcs-platform.herokuapp.com/annualleave", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Created successfully!")
          this.setState(() => ({
            date: "",
            staffId: "",
            period: "",
            purpose: "",
            lastDate: "",
            returnDate: "",
            contactAddress: "",
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
        <Button
          class="btn btn-primary"
          size="md"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{
            position: "absolute",
            top: "32.1%",
            right: "10%"
          }}
        >
          <FontAwesomeIcon icon={faPlus} /> Add
        </Button>

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
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="date"
                >
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

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="staffid"
                >
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
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="period"
                >
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

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="purpose"
                >
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
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="lastDate"
                >
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

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="returndate"
                >
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
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="contactaddress"
                >
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
