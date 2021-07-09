import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
import axios from "axios";

class Consultants extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      surname: "",
      other_names: "",
      consultant_category_id: "",
      errors: {},
    };
  }

  handleChange() {}

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  findFormErrors = () => {
    const errors = {};
    let validateFirstname = () => {
      if (this.state.firstName === "") {
        errors.firstName = "Please provide a first name";
      }
    };
    let validateSurname = () => {
      if (this.state.surname === "") {
        errors.surname = "Please provide a surname";
      }
    };
    let validateOthernames = () => {
      if (this.state.otherNames === "") {
        errors.otherNames = "Please provide any other name";
      }
    };
    let validateFullName = () => {
      if (this.state.fullName === "") {
        errors.fullName = "Please provide any fullname";
      }
    };
    let validateDob = () => {
      if (this.state.dob === "") {
        errors.dob = "Please provide a date of birth";
      }
    };
    let validateGender = () => {
      if (this.state.gender === "") {
        errors.gender = "Please provide a gender";
      }
    };
    let validateMaritalStatusId = () => {
      if (this.state.maritalStatusId === "") {
        errors.maritalStatusId = "Please provide a marital status";
      }
    };
    let validateNationalIdNumber = () => {
      if (this.state.nationalIdNumber === "") {
        errors.nationalIdNumber = "Please provide a NIN";
      }
    };
    let validateWorkEmail = () => {
      if (this.state.workEmail === "") {
        errors.workEmail = "Please provide a work email";
      }
    };
    let validatePersonalEmail = () => {
      if (this.state.personalEmail === "") {
        errors.personalEmail = "Please provide a personal email";
      }
    };
    let validatePhoneNumbers = () => {
      if (this.state.phoneNumbers === "") {
        errors.phoneNumbers = "Please provide your phone numbers";
      }
    };
    let validateStaffId = () => {
      if (this.state.staffId === "") {
        errors.staffId = "Please provide staff ID";
      }
    };
    let validateGroupId = () => {
      if (this.state.groupId === "") {
        errors.groupId = "Please provide group ID";
      }
    };
    let validatePassword = () => {
      if (this.state.password === "") {
        errors.password = "Please provide a password";
      }
    };
    let validateRoles = () => {
      if (this.state.ballz === "") {
        errors.roles = "Please provide a role";
      }
    };

    validateFirstname();
    validateSurname();
    validateOthernames();
    validatePassword();
    validateRoles();

    return errors;
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(this.findFormErrors()).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state, roles: [] };
      temp.roles[0] = this.state.ballz;
      delete temp.ballz;
      delete temp.users;
      delete temp.maritals;
      delete temp.groups;
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/users", temp)
        .then(() => {
          this.setState(() => ({
            firstName: "",
            surname: "",
            otherNames: "",
            fullName: "",
            dob: "",
            gender: "",
            maritalStatusId: "",
            nationalIdNumber: "",
            workEmail: "",
            personalEmail: "",
            phoneNumbers: "",
            staffId: "",
            groupId: "",
            password: "",
            ballz: "",
            errors: {},
          }));
          event.target.className = "needs-validation";
        })
        .catch((error) => console.log(error));
    } else {
      let errors = this.findFormErrors();
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: errors,
        };
      });
    }
  };

  fetchUsers = () => {
    let users = axios.get("https://avcs-platform.herokuapp.com/users");
    let groups = axios.get("https://avcs-platform.herokuapp.com/groups");
    let maritalstatus = axios.get(
      "https://avcs-platform.herokuapp.com/maritalStatus"
    );

    axios
      .all([users, groups, maritalstatus])
      .then(
        axios.spread((...res) => {
          this.setState((prevState) => {
            return {
              ...prevState,
              users: res[0].data,
              groups: res[1].data,
              maritals: res[2].data,
            };
          });
        })
      )
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <>
        <Container>
          <Card.Body>
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <h1>Users</h1>
              <Form.Row>
                <Form.Group as={Col} controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                    name="firstName"
                    required
                    isInvalid={this.state.errors.firstName}
                    placeholder="First Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="surname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.surname}
                    onChange={this.changeHandler}
                    name="surname"
                    required
                    isInvalid={this.state.errors.surname}
                    placeholder="Surname"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="othernames">
                  <Form.Label>Other Names</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.otherNames}
                    onChange={this.changeHandler}
                    name="otherNames"
                    required
                    isInvalid={this.state.errors.otherNames}
                    placeholder="Other Names"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.otherNames}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="fullname">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.fullName}
                    onChange={this.changeHandler}
                    name="fullName"
                    required
                    isInvalid={this.state.errors.fullName}
                    placeholder="Fullname"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="dob">
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.dob}
                    onChange={this.changeHandler}
                    name="dob"
                    id="defaultFormRegisterPasswordEx4"
                    placeholder="Date Of Birth"
                    required
                    isInvalid={this.state.errors.dob}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.dob}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.gender}
                    onChange={this.changeHandler}
                    name="gender"
                    placeholder="Gender"
                    required
                    isInvalid={this.state.errors.gender}
                  >
                    <div className="invalid-feedback">Enter Prospect Date!</div>
                    <option value="" selected="selected">
                      --
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.gender}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="maritalstatus">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.changeHandler}
                    name="maritalStatusId"
                    required
                    isInvalid={this.state.errors.maritalStatusId}
                  >
                    <div className="invalid-feedback">Enter Prospect Date!</div>
                    <option value="" selected="selected">
                      --
                    </option>
                    {this.state.maritals &&
                      this.state.maritals.map((marital) => (
                        <option value={marital.id}>{marital.name}</option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.maritalStatusId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="nin">
                  <Form.Label>NIN</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.nationalIdNumber}
                    onChange={this.changeHandler}
                    name="nationalIdNumber"
                    required
                    isInvalid={this.state.errors.nationalIdNumber}
                    placeholder="National Id Numner"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.nationalIdNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="workemail">
                  <Form.Label>Work Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter work email"
                    value={this.state.workEmail}
                    onChange={this.changeHandler}
                    name="workEmail"
                    required
                    isInvalid={this.state.errors.workEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.workEmail}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="personalemail">
                  <Form.Label>Personal Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter personal email"
                    value={this.state.personalEmail}
                    onChange={this.changeHandler}
                    name="personalEmail"
                    required
                    isInvalid={this.state.errors.personalEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.personalEmail}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="phonenumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.phoneNumbers}
                    onChange={this.changeHandler}
                    name="phoneNumbers"
                    required
                    isInvalid={this.state.errors.phoneNumbers}
                    placeholder="Enter phone numbers e.g. 0700237434, 0779883527"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.phoneNumbers}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="staffid">
                  <Form.Label>Staff ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.staffId}
                    onChange={this.changeHandler}
                    name="staffId"
                    required
                    isInvalid={this.state.errors.staffId}
                    placeholder="Enter staff ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.staffId}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="groupid">
                  <Form.Label>Group ID</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.changeHandler}
                    name="groupId"
                    required
                    isInvalid={this.state.errors.groupId}
                  >
                    <div className="invalid-feedback">Enter your group ID!</div>
                    <option value="" selected="selected">
                      --Choose--
                    </option>
                    {this.state.groups &&
                      this.state.groups.map((group) => (
                        <option value={group.id}>{group.name}</option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.groupId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="password">
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
                <Form.Group as={Col} controlId="roles">
                  <Form.Label>Roles</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.ballz}
                    onChange={this.changeHandler}
                    name="ballz"
                    required
                    isInvalid={this.state.errors.roles}
                    placeholder="Enter your roles"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.roles}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Button id="add-button" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Container>

        <Container>
          <Card.Body>
            <h1>Table</h1>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Staff ID</th>
                  <th>Work email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users &&
                  this.state.users.map((user) => (
                    <tr>
                      <td>{user.fullName}</td>
                      <td>{user.staffId}</td>
                      <td>{user.workEmail}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Card.Body>
        </Container>
      </>
    );
  }
}
export default Consultants;
