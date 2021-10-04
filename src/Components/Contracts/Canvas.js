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
      quotations: [],
      clients: [],
      prospects: [],
      filteredProspects: [],
      filteredQuotations: [],
      errors: {},
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fetchClients = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/clients", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            clients: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  fetchProspects = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/prospects", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            prospects: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  fetchQuotations = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/quotations", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            quotations: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  filterProspects = () => {
    let ans = this.filteredProspects();
    this.setState((prevState) => {
      return { ...prevState, filteredProspects: ans };
    });
  };

  filterQuotations = () => {
    let ans = this.filteredQuotations();
    this.setState((prevState) => {
      return { ...prevState, filteredQuotations: ans };
    });
  };

  filteredProspects = () => {
    if (this.state.clientId !== "") {
      let ans = this.state.prospects.filter((prospect) =>
        prospect.clientId.includes(this.state.clientId) ? prospect : null
      );
      let value = JSON.stringify(ans);
      return JSON.parse(value);
    }
  };

  filteredQuotations = () => {
    if (this.state.prospectDetailsId !== "") {
      let ans = this.state.quotations.filter((quotation) =>
        quotation.prospectReferenceId.includes(this.state.prospectDetailsId)
          ? quotation
          : null
      );
      let value = JSON.stringify(ans);
      return JSON.parse(value);
    }
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
      quotations: [],
      clients: [],
      prospects: [],
      filteredProspects: [],
      filteredQuotations: [],
      errors: {},
    }));
    document.getElementById("btn-close").click();
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.clients;
      delete temp.prospects;
      delete temp.quotations;
      delete temp.filteredProspects;
      delete temp.filteredQuotations;
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
            quotations: [],
            clients: [],
            prospects: [],
            filteredProspects: [],
            filteredQuotations: [],
            errors: {},
          }));
          event.target.className = "needs-validation";
          window.location.reload();
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

  componentDidMount() {
    this.fetchClients();
    this.fetchProspects();
    this.fetchQuotations();
  }

  render() {
    return (
      <div style={{ margin: "0% 0% 0% 0%" }}>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
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
                  controlId="clientId"
                >
                  <Form.Label>Client ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.clientId}
                    onChange={this.changeHandler}
                    name="clientId"
                    required
                    isInvalid={this.state.errors.clientId}
                  >
                    <option value="">--Choose--</option>
                    {this.state.clients &&
                      this.state.clients.map((client, index) => (
                        <option key={index} value={client.id}>
                          {client.fullName}
                        </option>
                      ))}
                  </Form.Control>
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
                    as="select"
                    value={this.state.prospectDetailsId}
                    onChange={this.changeHandler}
                    name="prospectDetailsId"
                    required
                    isInvalid={this.state.errors.prospectDetailsId}
                    onClick={this.filterProspects}
                  >
                    <option value="">--Choose--</option>
                    {this.state.filteredProspects &&
                      this.state.filteredProspects.map((prospect, index) => (
                        <option key={index} value={prospect.id}>
                          {prospect.reference}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.prospectDetailsId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="quotationReferenceId"
                >
                  <Form.Label>Quotation reference ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.quotationReferenceId}
                    onChange={this.changeHandler}
                    name="quotationReferenceId"
                    required
                    onClick={this.filterQuotations}
                    isInvalid={this.state.errors.quotationReferenceId}
                  >
                    <option value="">--Choose--</option>
                    {this.state.filteredQuotations &&
                      this.state.filteredQuotations.map((quotation, index) => (
                        <option key={index} value={quotation.id}>
                          {quotation.reference}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.quotationReferenceId}
                  </Form.Control.Feedback>
                </Form.Group>

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
