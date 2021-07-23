import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class IndividualConsultants extends React.Component {
  constructor() {
    super();
    this.state = {
      consultantId: "",
      dob: "",
      gender: "",
      maritalStatusId: "",
      nationalIdNumber: "",
      email: "",
      phoneNumber: "",
      address: "",
      consultancyRate: "",
      photo: "",
      cv: "",
      academicDocuments: "",
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
      delete temp.errors;
      console.log(temp);

      axios
        .post(
          "https://avcs-platform.herokuapp.com/individualConsultants",
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
          this.setState(() => ({
            consultantId: "",
            dob: "",
            gender: "",
            maritalStatusId: "",
            nationalIdNumber: "",
            email: "",
            phoneNumber: "",
            address: "",
            consultancyRate: "",
            photo: "",
            cv: "",
            academicDocuments: "",
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
    this.fetchUsers();
  }

  render() {
    return (
      <>
        <AppBar />
        <div style={{ display: "flex" }}>
          {this.props.role === "Admin" && <AdminNav />}
          <Container>
            <Card.Body>
              <Form
                className="needs-validation"
                onSubmit={this.submitHandler}
                noValidate
                style={{
                  marginLeft: "15%",
                  paddingTop: "2%",
                  marginTop: "8%",
                  marginBottom: "10%",
                }}
              >
                <h1>Individual consultants</h1>
                <Form.Row>
                  <Form.Group as={Col} controlId="consultantId">
                    <Form.Label>Consultant ID</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.consultantId}
                      onChange={this.changeHandler}
                      name="consultantId"
                      required
                      isInvalid={this.state.errors.consultantId}
                      placeholder="Enter consultant ID"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.consultantId}
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
                      <div className="invalid-feedback">
                        Enter Prospect Date!
                      </div>
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

                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
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
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.changeHandler}
                      name="phoneNumber"
                      required
                      isInvalid={this.state.errors.phoneNumber}
                      placeholder="Enter phone numbers e.g. 0700237434, 0779883527"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.address}
                      onChange={this.changeHandler}
                      name="address"
                      required
                      isInvalid={this.state.errors.address}
                      placeholder="Enter address"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="consultancyRate">
                    <Form.Label>Consultancy rate</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.consultancyRate}
                      onChange={this.changeHandler}
                      name="consultancyRate"
                      required
                      isInvalid={this.state.errors.consultancyRate}
                      placeholder="Enter consultancyRate"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.consultancyRate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="photo">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                      type="file"
                      value={this.state.photo}
                      onChange={this.changeHandler}
                      name="photo"
                      required
                      isInvalid={this.state.errors.photo}
                      placeholder="Enter photo"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.photo}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="cv">
                    <Form.Label>CV</Form.Label>
                    <Form.Control
                      type="file"
                      value={this.state.cv}
                      onChange={this.changeHandler}
                      name="cv"
                      required
                      isInvalid={this.state.errors.cv}
                      placeholder="Enter avcs discovery"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.cv}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="academicDocuments">
                    <Form.Label>Academic documents</Form.Label>
                    <Form.Control
                      type="file"
                      value={this.state.academicDocuments}
                      onChange={this.changeHandler}
                      name="academicDocuments"
                      required
                      isInvalid={this.state.errors.academicDocuments}
                      placeholder="Enter avcs discovery"
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.academicDocuments}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Button id="add-button" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Container>
        </div>
      </>
    );
  }
}
export default IndividualConsultants;
