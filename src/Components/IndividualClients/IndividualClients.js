import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import NavBar from "../NavBar";

class IndividualClients extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "",
      dob: "",
      gender: "",
      maritalStatusId: "",
      nationalIdNumber: "",
      emails: "",
      phoneNumbers: "",
      addresses: "",
      employer: "",
      city: "",
      avcsDiscovery: "",
      maritalStatusGroup: [],
      errors: {},
    };
  }

  fetchDropDownData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/maritalStatus", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
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
    this.fetchDropDownData();
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/individualClients", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            clientId: "",
            dob: "",
            gender: "",
            maritalStatusId: "",
            nationalIdNumber: "",
            emails: "",
            phoneNumbers: "",
            addresses: "",
            employer: "",
            city: "",
            avcsDiscovery: "",
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
            <h1>Individual clients</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="clientId">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.clientId}
                  onChange={this.changeHandler}
                  name="clientId"
                  required
                  isInvalid={this.state.errors.clientId}
                  placeholder="Enter client ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.clientId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="dob">
                <Form.Label>dob</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.dob}
                  onChange={this.changeHandler}
                  name="dob"
                  required
                  isInvalid={this.state.errors.dob}
                  placeholder="Enter date"
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
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="maritalStatusId">
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
                  {this.state.maritalStatusGroup &&
                    this.state.maritalStatusGroup.map((maritalStatus) => (
                      <option value={maritalStatus.id}>
                        {maritalStatus.name}
                      </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.maritalStatusId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="nationalIdNumber">
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
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter work email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  name="email"
                  required
                  isInvalid={this.state.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.email}
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
                  placeholder="Enter phone numbers e.g. 0700237434, 0779883527"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumbers}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="addresses">
                <Form.Label>Addresses</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.addresses}
                  onChange={this.changeHandler}
                  name="addresses"
                  required
                  isInvalid={this.state.errors.addresses}
                  placeholder="Enter addresses"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.addresses}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="employer">
                <Form.Label>Employer</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.employer}
                  onChange={this.changeHandler}
                  name="employer"
                  required
                  isInvalid={this.state.errors.employer}
                  placeholder="Enter employer"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.employer}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.city}
                  onChange={this.changeHandler}
                  name="city"
                  required
                  isInvalid={this.state.errors.city}
                  placeholder="Enter city"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.city}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="avcsDiscovery">
                <Form.Label>AVCS discovery</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.avcsDiscovery}
                  onChange={this.changeHandler}
                  name="avcsDiscovery"
                  required
                  isInvalid={this.state.errors.avcsDiscovery}
                  placeholder="Enter avcs discovery"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.avcsDiscovery}
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
export default IndividualClients;
