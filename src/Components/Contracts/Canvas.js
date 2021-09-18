import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      quotationReferenceId: "",
      clientId: "",
      prospectDetailsId: "",
      startDate: "",
      endDate: "",
      errors: {},
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      date: "",
      quotationReferenceId: "",
      clientId: "",
      prospectDetailsId: "",
      startDate: "",
      endDate: "",
      errors: {},
    }));
    document.getElementById("btn-close").click();
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;

      axios
        .post("https://avcs-platform.herokuapp.com/contracts", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          alert("Created successfully!");
          this.setState(() => ({
            date: "",
            quotationReferenceId: "",
            clientId: "",
            prospectDetailsId: "",
            startDate: "",
            endDate: "",
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
          errors,
        };
      });
    }
  };

  render() {
    return (
      <div style={{ margin: "10% 0 -3% 95%" }}>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ marginLeft: "15%", marginTop: "-10%" }}
        >
          Add
        </button>
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
                {this.props.entry}
              </h1>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="date"
                >
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

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="quotationReferenceId"
                >
                  <Form.Label>Quotation reference ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.quotationReferenceId}
                    onChange={this.changeHandler}
                    name="quotationReferenceId"
                    required
                    isInvalid={this.state.errors.quotationReferenceId}
                    placeholder="Enter ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.quotationReferenceId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="clientId"
                >
                  <Form.Label>Client ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.clientId}
                    onChange={this.changeHandler}
                    name="clientId"
                    required
                    isInvalid={this.state.errors.clientId}
                    placeholder="Enter ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.clientId}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="prospectDetailsId"
                >
                  <Form.Label>Prospect details ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.prospectDetailsId}
                    onChange={this.changeHandler}
                    name="prospectDetailsId"
                    required
                    isInvalid={this.state.errors.prospectDetailsId}
                    placeholder="Enter ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.prospectDetailsId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="startDate"
                >
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.startDate}
                    onChange={this.changeHandler}
                    name="startDate"
                    id="defaultFormRegisterPasswordEx4"
                    placeholder="Enter date"
                    required
                    isInvalid={this.state.errors.startDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.startDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="endDate"
                >
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.endDate}
                    onChange={this.changeHandler}
                    name="endDate"
                    id="defaultFormRegisterPasswordEx4"
                    placeholder="Enter date"
                    required
                    isInvalid={this.state.errors.endDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.endDate}
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
    );
  }
}

export default Canvas;
