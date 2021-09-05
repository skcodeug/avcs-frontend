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
      prefix: "",
      firstName: "",
      surname: "",
      otherNames: "",
      departmentId: "",
      roles: "",
      password: "",
      departments: [],
      errors: {}
    }
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  fetchDropDownData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/departments", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            departments: res.data
          }
        })
      })
      .catch((error) => console.log(error))
  }

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      prefix: "",
      firstName: "",
      surname: "",
      otherNames: "",
      departmentId: "",
      roles: "",
      password: "",
      errors: {}
    }))
    document.getElementById("btn-close").click()
  }

  componentDidMount() {
    this.fetchDropDownData()
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors
      delete temp.departments

      axios
        .post("https://avcs-platform.herokuapp.com/users", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Created successfully!")
          this.setState(() => ({
            prefix: "",
            firstName: "",
            surname: "",
            otherNames: "",
            departmentId: "",
            roles: "",
            password: "",
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
      <div style={{ margin: "9% 0 0% 95%" }}>
        <Button
          class="btn btn-primary"
          size="md"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{
            position: "absolute",
            top: "26.8%",
            right: "10%",
            width: "5vw"
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
                  controlId="prefix"
                >
                  <Form.Label>Prefix</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.prefix}
                    onChange={this.changeHandler}
                    name="prefix"
                    required
                    isInvalid={this.state.errors.prefix}
                    placeholder="e.g Mr"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.prefix}
                  </Form.Control.Feedback>
                </Form.Group>

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
              </Row>

              <Row>
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
                    placeholder="e.g Ongom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>

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
                    placeholder="e.g Derrick"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.otherNames}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="departmentid"
                >
                  <Form.Label>Department ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.departmentId}
                    onChange={this.changeHandler}
                    name="departmentId"
                    required
                    placeholder="Enter a department ID"
                    isInvalid={this.state.errors.departmentId}
                  >
                    <div className="invalid-feedback">
                      Enter your department ID!
                    </div>
                    <option value="">--Choose--</option>
                    {this.state.departments &&
                      this.state.departments.map((dept, index) => (
                        <option key={index} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.departmentId}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="password"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                    name="password"
                    required
                    isInvalid={this.state.errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="roles"
                >
                  <Form.Label>Roles</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.roles}
                    onChange={this.changeHandler}
                    name="roles"
                    required
                    placeholder="e.g Admin"
                    isInvalid={this.state.errors.roles}
                  />

                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.roles}
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
