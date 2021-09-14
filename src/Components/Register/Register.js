import React from "react"
import { Form, Col, Button, Row } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import { Link } from "react-router-dom"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      surname: "",
      otherNames: "",
      departmentId: "",
      roles: "",
      password: "",
      departments: [],
      errors: ""
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // fetchDropDownData = () => {
  //   axios
  //     .get("https://avcs-platform.herokuapp.com/departments")
  //     .then((res) => {
  //       console.log(res.data)
  //       this.setState((prevState) => {
  //         return {
  //           ...prevState,
  //           departments: res.data
  //         }
  //       })
  //     })
  //     .catch((error) => console.log(error))
  // }

  // componentDidMount() {
  //   this.fetchDropDownData()
  // }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.departments
      delete temp.errors

      axios
        .post("https://avcs-platform.herokuapp.com/register", temp)
        .then((res) => {
          this.props.history.push("/")
        })
        .catch((err) => console.log(err))
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
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            margin: "10% 0",
            borderRadius: "5px",
            boxShadow: "0 20px 75px rgb(110, 110, 110,0.2)"
          }}
        >
          <Form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
            id="form"
            style={{
              margin: "3%"
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                color: "rgb(13, 110, 253)",
                marginBottom: "6%",
                textAlign: "center"
              }}
            >
              Create your account.
            </h1>
            <Row>
              <Form.Group
                as={Col}
                controlId="text"
                style={{ marginBottom: "4%", width: "20vw" }}
              >
                <Form.Label>Prefix</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.prefix}
                  onChange={this.changeHandler}
                  name="prefix"
                  required
                  placeholder="E.g Mr/Ms/Mrs"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.prefix}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="text"
                style={{ marginBottom: "3%", width: "20vw" }}
              >
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                  name="firstName"
                  required
                  placeholder="E.g John"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="text"
                style={{ marginBottom: "4%", width: "20vw" }}
              >
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.surname}
                  onChange={this.changeHandler}
                  name="surname"
                  required
                  placeholder="E.g Doe"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.surname}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                controlId="text"
                style={{ marginBottom: "3%", width: "20vw" }}
              >
                <Form.Label>Other names</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.otherNames}
                  onChange={this.changeHandler}
                  name="otherNames"
                  required
                  placeholder="E.g Peter"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.otherNames}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                style={{ marginBottom: "3%", width: "20vw" }}
                controlId="departmentid"
              >
                <Form.Label>Department</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.departmentId}
                  onChange={this.changeHandler}
                  name="departmentId"
                  required
                  isInvalid={this.state.errors.departmentId}
                >
                  <div className="invalid-feedback">Select a department!</div>
                  <option value="">--Choose--</option>
                  <option value="0a0eba09-7507-4403-a9b1-c208bbd0c8fb">
                    Admin
                  </option>
                  <option value="e139eba6-4ddf-478c-923f-dbfb4c1be427">
                    HR
                  </option>
                  <option value="7e6d2c89-9333-4fb8-a0d5-737b5d29f430">
                    Sales
                  </option>
                  <option value="5261883f-7f95-4b1e-9e7a-0bb48279db27">
                    Finance
                  </option>
                  {/* {this.state.departments &&
                    this.state.departments.map((dept, index) => (
                      <option key={index} value={dept.id}>
                        {dept.name}
                      </option>
                    ))} */}
                </Form.Control>

                <Form.Control.Feedback type="invalid">
                  {this.state.errors.departmentId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                style={{ marginBottom: "3%", width: "20vw" }}
                controlId="roles"
              >
                <Form.Label>Roles</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.roles}
                  onChange={this.changeHandler}
                  name="roles"
                  required
                  isInvalid={this.state.errors.roles}
                >
                  <div className="invalid-feedback">Select a role!</div>
                  <option value="">--Choose--</option>
                  <option value="0a0eba09-7507-4403-a9b1-c208bbd0c8fb">
                    Admin
                  </option>
                  <option value="e139eba6-4ddf-478c-923f-dbfb4c1be427">
                    HR
                  </option>
                  <option value="7e6d2c89-9333-4fb8-a0d5-737b5d29f430">
                    Sales
                  </option>
                  <option value="5261883f-7f95-4b1e-9e7a-0bb48279db27">
                    Finance
                  </option>
                  {/* {this.state.departments &&
                    this.state.departments.map((dept, index) => (
                      <option key={index} value={dept.id}>
                        {dept.name}
                      </option>
                    ))} */}
                </Form.Control>

                <Form.Control.Feedback type="invalid">
                  {this.state.errors.roles}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="password"
                style={{ width: "20vw" }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                  name="password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button
              id="add-button"
              type="submit"
              style={{
                margin: "3% 35% 2% 35%",
                width: "30%"
              }}
            >
              Submit
            </Button>
            <br />
            <div style={{ textAlign: "center" }}>
              Already have an account?
              <Link to="/"> Click here to Login!</Link>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
export default Login
