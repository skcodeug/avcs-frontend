import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
import fetchLookUpData from "./FetchLookUpData";
import submitHandler from "./SubmitHandler";

class Users extends React.Component {
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

  componentDidMount() {
    fetchLookUpData();
  }

  render() {
    return (
      <>
        <Container>
          <Card.Body>
            <Form
              className="needs-validation"
              onSubmit={submitHandler}
              noValidate
            >
              <h1>Users</h1>
              <Form.Row>
                <Form.Group as={Col} controlId="prefix">
                  <Form.Label>Prefix</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.prefix}
                    onChange={this.changeHandler}
                    name="prefix"
                    required
                    isInvalid={this.state.errors.prefix}
                    placeholder="Prefix"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.prefix}
                  </Form.Control.Feedback>
                </Form.Group>

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
                <Form.Group as={Col} controlId="departmentid">
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
                    <option value="" selected="selected">
                      --Choose--
                    </option>
                    {this.state.departments &&
                      this.state.departments.map((dept) => (
                        <option value={dept.id}>{dept.name}</option>
                      ))}
                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.departmentId}
                  </Form.Control.Feedback>
                </Form.Group>

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
                    value={this.state.roles}
                    onChange={this.changeHandler}
                    name="roles"
                    required
                    placeholder="Role"
                    isInvalid={this.state.errors.roles}
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
      </>
    );
  }
}
export default Users;
