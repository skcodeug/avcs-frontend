import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "",
      contractReferenceId: "",
      consultantId: "",
      startDate: "",
      endDate: "",
      projectStatusId: "",
      ops: [],
      errors: {},
    };
  }

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      prefix: "",
      firstName: "",
      surname: "",
      otherNames: "",
      departmentId: "",
      roles: "",
      password: "",
      errors: {},
    }));
    document.getElementById("btn-close").click();
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;

      axios
        .post("https://avcs-platform.herokuapp.com/operations", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          this.setState(() => ({
            clientId: "",
            contractReferenceId: "",
            consultantId: "",
            startDate: "",
            endDate: "",
            projectStatusId: "",
            ops: [],
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
      <div style={{ margin: "10% 0 -3% 95%" }}>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ marginLeft: "15%" }}
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
                Create
              </h1>
              <Form.Group style={{ marginTop: "5%" }} controlId="clientId">
                <Form.Label>Client ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.clientId}
                  onChange={this.changeHandler}
                  name="clientId"
                  required
                  isInvalid={this.state.errors.clientId}
                  placeholder="Client ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.clientId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                style={{ marginTop: "5%" }}
                controlId="contractReferenceId"
              >
                <Form.Label>Contract reference ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.contractReferenceId}
                  onChange={this.changeHandler}
                  name="contractReferenceId"
                  required
                  isInvalid={this.state.errors.contractReferenceId}
                  placeholder="Contract reference ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.contractReferenceId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={{ marginTop: "5%" }} controlId="consultantId">
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
              <Form.Group style={{ marginTop: "5%" }} controlId="startDate">
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.startDate}
                  onChange={this.changeHandler}
                  name="startDate"
                  required
                  isInvalid={this.state.errors.startDate}
                  placeholder="Start Date"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.startDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={{ marginTop: "5%" }} controlId="endDate">
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.endDate}
                  onChange={this.changeHandler}
                  name="endDate"
                  id="defaultFormRegisterPasswordEx4"
                  placeholder="Date Of Birth"
                  required
                  isInvalid={this.state.errors.endDate}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.endDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                style={{ marginTop: "5%" }}
                controlId="projectStatusId"
              >
                <Form.Label>Project status ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.projectStatusId}
                  onChange={this.changeHandler}
                  name="projectStatusId"
                  placeholder="Project Status ID"
                  required
                  isInvalid={this.state.errors.projectStatusId}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.projectStatusId}
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