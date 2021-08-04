import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "",
      contractReferenceId: "",
      consultantId: "",
      startDate: "",
      endDate: "",
      projectStatusId: "",
      commission: "",
      withHoldingTax: "",
      errors: {},
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.fetchData();
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      console.log(temp);

      axios
        .put(
          `https://avcs-platform.herokuapp.com/operations/${this.props.id}`,
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
          alert("Updated succesfully");
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

  fetchData = () => {
    axios
      .get(
        "https://avcs-platform.herokuapp.com/operations/" + this.props.id.id,
        {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        }
      )
      .then((res) => {
        const temp = res.data;
        this.setState((prevState) => ({
          ...prevState,
          ...temp,
        }));
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight1"
          aria-controls="offcanvasRight"
          style={{ marginLeft: "1%" }}
        >
          Update
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight1"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "35%" }}
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="btn1-close"
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
                Update
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
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;