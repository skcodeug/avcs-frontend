import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class ConsultantFirmConsultants extends React.Component {
  constructor() {
    super();
    this.state = {
      consultantId: "",
      firstName: "",
      surname: "",
      otherNames: "",
      dob: "",
      gender: "",
      maritalStatuId: "",
      nationalIdNumber: "",
      email: "",
      phoneNumber: "",
      consultancyRate: "",
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
      delete temp.maritalStatusGroup;
      console.log(temp);

      axios
        .post(
          "https://avcs-platform.herokuapp.com/consultantFirmConsultants",
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
            firstName: "",
            surname: "",
            otherNames: "",
            dob: "",
            gender: "",
            maritalStatuId: "",
            nationalIdNumber: "",
            email: "",
            phoneNumber: "",
            consultancyRate: "",
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
      .then((...res) => {
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
              <h1>Consultant Firm Consultants</h1>

              <Form.Group controlId="consultantId">
                <Form.Label>Consultant ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.consultantId}
                  onChange={this.changeHandler}
                  name="consultantId"
                  required
                  isInvalid={this.state.errors.consultantId}
                  placeholder="Consultant ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.consultantId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="firstname">
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

              <Form.Group controlId="surname">
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

              <Form.Group controlId="othernames">
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

              <Form.Group controlId="dob">
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

              <Form.Group controlId="gender">
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

              <Form.Group controlId="maritalstatus">
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
                    this.state.maritalStatusGroup.map((maritalstatus) => (
                      <option value={maritalstatus.id}>
                        {maritalstatus.name}
                      </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.maritalStatusId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="nin">
                <Form.Label>NIN</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nationalIdNumber}
                  onChange={this.changeHandler}
                  name="nationalIdNumber"
                  required
                  isInvalid={this.state.errors.nationalIdNumber}
                  placeholder="e.g CM12345678UEBC"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.nationalIdNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  name="email"
                  required
                  placeholder="e.g abc@avcs.ug"
                  isInvalid={this.state.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="phonenumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.changeHandler}
                  name="phoneNumbers"
                  required
                  isInvalid={this.state.errors.phoneNumber}
                  placeholder="e.g. 0700237434, 0779883527"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="consultancyRate">
                <Form.Label>Consultancy rate</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.consultancyRate}
                  onChange={this.changeHandler}
                  name="consultancyRate"
                  required
                  isInvalid={this.state.errors.consultancyRate}
                  placeholder="e.g. 0700237434, 0779883527"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.consultancyRate}
                </Form.Control.Feedback>
              </Form.Group>

              <Button id="add-button" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}
export default ConsultantFirmConsultants;
