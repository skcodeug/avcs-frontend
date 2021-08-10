import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"

class Canvas extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      surname: "",
      otherNames: "",
      consultantCategoryId: "",
      errors: {}
    }
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      firstName: "",
      surname: "",
      otherNames: "",
      consultantCategoryId: "",
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
        .post("https://avcs-platform.herokuapp.com/consultants", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Created successfully!")
          this.setState(() => ({
            firstName: "",
            surname: "",
            otherNames: "",
            consultantCategoryId: "",
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
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="firstname"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                    name="firstName"
                    required
                    isInvalid={this.state.errors.firstName}
                    placeholder="e.g John"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="surname"
                >
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.surname}
                    onChange={this.changeHandler}
                    name="surname"
                    required
                    isInvalid={this.state.errors.surname}
                    placeholder="e.g Doe"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="othernames"
                >
                  <Form.Label>Other Names</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.otherNames}
                    onChange={this.changeHandler}
                    name="otherNames"
                    required
                    isInvalid={this.state.errors.otherNames}
                    placeholder="e.g Steve"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.otherNames}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="consultantCategoryId"
                >
                  <Form.Label>Consultant Category ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.consultantCategoryId}
                    onChange={this.changeHandler}
                    name="consultantCategoryId"
                    required
                    isInvalid={this.state.errors.consultantCategoryId}
                    placeholder="e.g I23c2D"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.consultantCategoryId}
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
