import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";

class ConsultantFirms extends React.Component {
  constructor() {
    super();
    this.state = {
      consultantId: "",
      tinNo: "",
      registrationDate: "",
      address: "",
      memarts: "",
      certificateOfIncorporation: "",
      tradingLicenseCertificate: "",
      tinCertificate: "",
      form18OfficeLocation: "",
      form20DirectorsParticulars: "",
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

      let temp = { ...this.state, roles: [] };
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/consultantFirms", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            consultantId: "",
            tinNo: "",
            registrationDate: "",
            address: "",
            memarts: "",
            certificateOfIncorporation: "",
            tradingLicenseCertificate: "",
            tinCertificate: "",
            form18OfficeLocation: "",
            form20DirectorsParticulars: "",
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
              <h1>Consultant Firms</h1>

              <Form.Group controlId="consultantId">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.consultantId}
                  onChange={this.changeHandler}
                  name="consultantId"
                  required
                  isInvalid={this.state.errors.consultantId}
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.consultantId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="tinNo">
                <Form.Label>Tin No</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.tinNo}
                  onChange={this.changeHandler}
                  name="tinNo"
                  required
                  isInvalid={this.state.errors.tinNo}
                  placeholder="Enter tin number"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.tinNo}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="registrationDate">
                <Form.Label>Registration date</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.registrationDate}
                  onChange={this.changeHandler}
                  name="registrationDate"
                  required
                  isInvalid={this.state.errors.registrationDate}
                  placeholder="Enter registration date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.registrationDate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.address}
                  onChange={this.changeHandler}
                  name="address"
                  required
                  isInvalid={this.state.errors.address}
                  placeholder="address"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.address}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="memarts">
                <Form.Label>Memarts</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.memarts}
                  onChange={this.changeHandler}
                  name="memarts"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Enter memarts"
                  required
                  isInvalid={this.state.errors.memarts}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.memarts}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="certificateOfIncorporation">
                <Form.Label>Certificate of incorporation</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.certificateOfIncorporation}
                  onChange={this.changeHandler}
                  name="certificateOfIncorporation"
                  required
                  isInvalid={this.state.errors.certificateOfIncorporation}
                  placeholder="National Id Numner"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.certificateOfIncorporation}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="tradingLicenseCertificate">
                <Form.Label>Trading license certificate</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter work email"
                  value={this.state.tradingLicenseCertificate}
                  onChange={this.changeHandler}
                  name="tradingLicenseCertificate"
                  required
                  isInvalid={this.state.errors.tradingLicenseCertificate}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.tradingLicenseCertificate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="form18OfficeLocation">
                <Form.Label>form18 office location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={this.state.form18OfficeLocation}
                  onChange={this.changeHandler}
                  name="form18OfficeLocation"
                  required
                  isInvalid={this.state.errors.form18OfficeLocation}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.form18OfficeLocation}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="form20DirectorsParticulars">
                <Form.Label>form20 directors particulars</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.form20DirectorsParticulars}
                  onChange={this.changeHandler}
                  name="form20DirectorsParticulars"
                  required
                  isInvalid={this.state.errors.form20DirectorsParticulars}
                  placeholder="Enter particulars"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.form20DirectorsParticulars}
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
export default ConsultantFirms;
