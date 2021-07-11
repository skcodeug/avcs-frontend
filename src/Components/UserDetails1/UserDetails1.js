import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import NavBar from "../NavBar";
import findFormErrors from "./FindFormErrors";

class UserDetails1 extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      phoneNumbers: "",
      personalEmail: "",
      gender: "",
      maritalStatusId: "",
      dateOfJoining: "",
      idNo: "",
      dob: "",
      nssfNo: "",
      tinNo: "",
      acknowledgement: "",
      date: "",
      maritalStatusGroup: [],
      errors: {},
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.maritalStatusGroup;
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/users", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            staffId: "",
            phoneNumbers: "",
            personalEmail: "",
            gender: "",
            maritalStatusId: "",
            dateOfJoining: "",
            idNo: "",
            dob: "",
            nssfNo: "",
            tinNo: "",
            acknowledgement: "",
            date: "",
            maritalStatusGroup: [],
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

  fetchUsers = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/maritalStatus")
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            maritalStatusGroup: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchUsers();
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
            <h1>User details I</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="staffId">
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
              <Form.Group as={Col} controlId="phoneNumbers">
                <Form.Label>Phone numbers</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.phoneNumbers}
                  onChange={this.changeHandler}
                  name="phoneNumbers"
                  required
                  isInvalid={this.state.errors.phoneNumbers}
                  placeholder="E.g 0701337434"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumbers}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="personalEmail">
                <Form.Label>Personal email</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.personalEmail}
                  onChange={this.changeHandler}
                  name="personalEmail"
                  required
                  isInvalid={this.state.errors.personalEmail}
                  placeholder="E.g abc@gmail.com"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.personalEmail}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.gender}
                  onChange={this.changeHandler}
                  name="gender"
                  placeholder="Male or Female"
                  required
                  isInvalid={this.state.errors.gender}
                >
                  <option value="" defaultValue>
                    --
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="maritalStatusId">
                <Form.Label>Marital Status</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.changeHandler}
                  name="maritalStatusId"
                  required
                  isInvalid={this.state.errors.maritalStatusId}
                >
                  <option value="" defaultValue>
                    --
                  </option>
                  {this.state.maritalStatusGroup &&
                    this.state.maritalStatusGroup.map((marital) => (
                      <option value={marital.id}>{marital.name}</option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.maritalStatusId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="dateOfJoining">
                <Form.Label>Date of joining</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.dateOfJoining}
                  onChange={this.changeHandler}
                  name="dateOfJoining"
                  required
                  isInvalid={this.state.errors.dateOfJoining}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.dateOfJoining}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="idNo">
                <Form.Label>ID number</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.idNo}
                  onChange={this.changeHandler}
                  name="idNo"
                  required
                  isInvalid={this.state.errors.idNo}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.idNo}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="dob">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.dob}
                  onChange={this.changeHandler}
                  name="dob"
                  required
                  isInvalid={this.state.errors.dob}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.dob}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="nssfNo">
                <Form.Label>NSSF number</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.nssfNo}
                  onChange={this.changeHandler}
                  name="nssfNo"
                  required
                  isInvalid={this.state.errors.nssfNo}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.nssfNo}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="tinNo">
                <Form.Label>TIN number</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.tinNo}
                  onChange={this.changeHandler}
                  name="tinNo"
                  required
                  isInvalid={this.state.errors.tinNo}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.tinNo}
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
              <Form.Group as={Col} controlId="date">
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
            </Form.Row>
            <Button id="add-button" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Container>
    );
  }
}
export default UserDetails1;
