import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      consultantId: "",
      contractReferenceId: "",
      paid: 0,
      contracts: [],
      consultants: [],
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
      consultantId: "",
      contractReferenceId: "",
      paid: 0,
      contracts: [],
      consultants: [],
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
        .post("https://avcs-platform.herokuapp.com/payments", temp, {
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
            consultantId: "",
            contractReferenceId: "",
            paid: 0,
            contracts: [],
            consultants: [],
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

  fetchContracts = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/contracts", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            contracts: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  fetchConsultants = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/consultants", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            consultants: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchContracts();
    this.fetchConsultants();
  }

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
                <Form.Group as={Col} controlId="contractReferenceId">
                  <Form.Label>Contract reference ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.contractReferenceId}
                    onChange={this.changeHandler}
                    name="contractReferenceId"
                    required
                    isInvalid={this.state.errors.contractReferenceId}
                    placeholder="Contract reference ID"
                  >
                    <option value="">--Choose--</option>
                    {this.state.contracts &&
                      this.state.contracts.map((contract, index) => (
                        <option key={index} value={contract.id}>
                          {contract.reference}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.contractReferenceId}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="consultantId">
                  <Form.Label>Consultant ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.consultantId}
                    onChange={this.changeHandler}
                    name="consultantId"
                    required
                    isInvalid={this.state.errors.consultantId}
                    placeholder="Consultant ID"
                  >
                    <option value="">--Choose--</option>
                    {this.state.consultants &&
                      this.state.consultants.map((consultant, index) => (
                        <option key={index} value={consultant.id}>
                          {consultant.fullName}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.consultantId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="paid">
                  <Form.Label>Paid</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.paid}
                    onChange={this.changeHandler}
                    name="paid"
                    required
                    isInvalid={this.state.errors.paid}
                    placeholder="E.g 50000"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.paid}
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
