import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      prefix: "",
      firstName: "",
      surname: "",
      otherNames: "",
      departmentId: "",
      roles: "",
      password: "",
      departments: [],
      errors: {},
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.fetchData();
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;

      axios
        .put(
          `https://avcs-platform.herokuapp.com/users/${this.props.id}`,
          temp,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, ""),
            },
          }
        )
        .then(() => {
          alert("Updated succesfully");
          this.setState(() => ({
            prefix: "",
            firstName: "",
            surname: "",
            otherNames: "",
            departmentId: "",
            roles: "",
            password: "",
            departments: [],
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

  fetchData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/users/" + this.props.id.id, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        const temp = res.data;
        this.setState((prevState) => ({
          ...prevState,
          ...temp,
        }));
      })
      .catch((error) => console.log(error));
  };

  fetchDropDownData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/departments", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            departments: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.fetchData();
    this.fetchDropDownData();
  };

  render() {
    return (
      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight1"
          aria-controls="offcanvasRight"
          style={{ marginLeft: "1%" }}
        >
          Update
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight1"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "35%" }}
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="btn1-close"
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
                paddingBottom: "15%",
              }}
            >
              <h1
                style={{
                  marginBottom: "5%",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                Update
              </h1>
              <Form.Group style={{ marginTop: "5%" }} controlId="prefix">
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

              <Form.Group style={{ marginTop: "5%" }} controlId="firstname">
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

              <Form.Group style={{ marginTop: "5%" }} controlId="surname">
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

              <Form.Group style={{ marginTop: "5%" }} controlId="othernames">
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

              <Form.Group style={{ marginTop: "5%" }} controlId="departmentid">
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

              <Form.Group style={{ marginTop: "5%" }} controlId="password">
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

              <Form.Group style={{ marginTop: "5%" }} controlId="roles">
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

              <div style={{ marginTop: "10%" }}>
                <Button
                  id="add-button"
                  type="submit"
                  style={{ marginRight: "5%" }}
                >
                  Create
                </Button>
                <Button
                  variant="secondary"
                  id="cancel-button"
                  type="reset"
                  onClick={this.reset}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
