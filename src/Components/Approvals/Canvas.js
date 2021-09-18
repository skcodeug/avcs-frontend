import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      requisitionReferenceId: "",
      approverId: "",
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
      requisitionReferenceId: "",
      approverId: "",
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
        .post("https://avcs-platform.herokuapp.com/approvals", temp, {
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
            requisitionReferenceId: "",
            approverId: "",
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
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                    name="date"
                    required
                    isInvalid={this.state.errors.date}
                    placeholder="Enter date"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.date}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="requisitionReferenceId">
                  <Form.Label>Requisition Reference ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.requisitionReferenceId}
                    onChange={this.changeHandler}
                    name="requisitionReferenceId"
                    required
                    isInvalid={this.state.errors.requisitionReferenceId}
                    placeholder="requisitionReferenceId"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.requisitionReferenceId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="approverId">
                  <Form.Label>Approver ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.approverId}
                    onChange={this.changeHandler}
                    name="approverId"
                    required
                    isInvalid={this.state.errors.approverId}
                    placeholder="Approver ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.approverId}
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
