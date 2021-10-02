import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      staffId: "",
      staffRef: "",
      applicationLetter: false,
      cv: false,
      academicPaper: false,
      refereeLetter: false,
      interviewEvaluationReferenceId: "",
      managementRecommendation: false,
      appointmentApproval: false,
      appointmentLetter: false,
      bioData: false,
      confirmationLetter: false,
      exitInterview: false,
      users: [],
      interviewEvaluations: [],
      errors: {},
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      staffId: "",
      staffRef: "",
      applicationLetter: false,
      cv: false,
      academicPaper: false,
      refereeLetter: false,
      interviewEvaluationReferenceId: "",
      managementRecommendation: false,
      appointmentApproval: false,
      appointmentLetter: false,
      bioData: false,
      confirmationLetter: false,
      exitInterview: false,
      users: [],
      interviewEvaluations: [],
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
      delete temp.users;
      delete temp.interviewEvaluations;

      axios
        .post("https://avcs-platform.herokuapp.com/staffVerifications", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          alert("Created successfully!");
          this.setState(() => ({
            staffId: "",
            staffRef: "",
            applicationLetter: false,
            cv: false,
            academicPaper: false,
            refereeLetter: false,
            interviewEvaluationReferenceId: "",
            managementRecommendation: false,
            appointmentApproval: false,
            appointmentLetter: false,
            bioData: false,
            confirmationLetter: false,
            exitInterview: false,
            users: [],
            interviewEvaluations: [],
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

  fetchUsers = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/users", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            users: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  fetchIntEvaluations = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/interviewEvaluations", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            interviewEvaluations: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchUsers();
    this.fetchIntEvaluations();
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
                <Form.Group as={Col} controlId="staffId">
                  <Form.Label>Staff ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.staffId}
                    onChange={this.changeHandler}
                    name="staffId"
                    required
                    isInvalid={this.state.errors.staffId}
                    placeholder="Staff ID"
                  >
                    <option value="">--Choose--</option>
                    {this.state.users &&
                      this.state.users.map((user, index) => (
                        <option key={index} value={user.id}>
                          {user.fullName}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.staffId}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="staffRef">
                  <Form.Label>Staff Ref</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.staffRef}
                    onChange={this.changeHandler}
                    name="staffRef"
                    required
                    isInvalid={this.state.errors.staffRef}
                    placeholder="Staff Ref"
                  >
                    <option value="">--Choose--</option>
                    {this.state.users &&
                      this.state.users.map((user, index) => (
                        <option key={index} value={user.id}>
                          {user.fullName}
                        </option>
                      ))}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.staffRef}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  lg={6}
                  controlId="interviewEvaluationReferenceId"
                >
                  <Form.Label>Interview evaluation Ref-ID</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.interviewEvaluationReferenceId}
                    onChange={this.changeHandler}
                    name="interviewEvaluationReferenceId"
                    required
                    isInvalid={this.state.errors.interviewEvaluationReferenceId}
                    placeholder="Enter ID"
                  >
                    <option value="">--Choose--</option>
                    {this.state.interviewEvaluations &&
                      this.state.interviewEvaluations.map(
                        (interviewEvaluation, index) => (
                          <option key={index} value={interviewEvaluation.id}>
                            {interviewEvaluation.fullName}
                          </option>
                        )
                      )}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.interviewEvaluationReferenceId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="applicationLetter">
                  <Form.Check custom type="check" id="applicationLetter">
                    <Form.Check.Input
                      checked={this.state.applicationLetter}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            applicationLetter: !this.state.applicationLetter,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Application letter</Form.Check.Label>
                  </Form.Check>
                </Form.Group>

                <Form.Group as={Col} controlId="academicPaper">
                  <Form.Check custom type="check" id="academicPaper">
                    <Form.Check.Input
                      checked={this.state.academicPaper}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            academicPaper: !this.state.academicPaper,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Academic paper</Form.Check.Label>
                  </Form.Check>
                </Form.Group>

                <Form.Group as={Col} controlId="cv">
                  <Form.Check custom type="check" id="cv">
                    <Form.Check.Input
                      checked={this.state.cv}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            cv: !this.state.cv,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Curriculum vitae</Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} lg={4} controlId="refereeLetter">
                  <Form.Check custom type="check" id="refereeLetter">
                    <Form.Check.Input
                      checked={this.state.refereeLetter}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            refereeLetter: !this.state.refereeLetter,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Referee letter</Form.Check.Label>
                  </Form.Check>
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg={8}
                  controlId="managementRecommendation"
                >
                  <Form.Check custom type="check" id="managementRecommendation">
                    <Form.Check.Input
                      checked={this.state.managementRecommendation}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            managementRecommendation:
                              !this.state.managementRecommendation,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>
                      Management recommendation
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="appointmentApproval">
                  <Form.Check custom type="check" id="appointmentApproval">
                    <Form.Check.Input
                      checked={this.state.appointmentApproval}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            appointmentApproval:
                              !this.state.appointmentApproval,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Appointment approval</Form.Check.Label>
                  </Form.Check>
                </Form.Group>

                <Form.Group as={Col} controlId="bioData">
                  <Form.Check custom type="check" id="bioData">
                    <Form.Check.Input
                      checked={this.state.bioData}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            bioData: !this.state.bioData,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Bio Data</Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} controlId="confirmationLetter">
                  <Form.Check custom type="check" id="confirmationLetter">
                    <Form.Check.Input
                      checked={this.state.confirmationLetter}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            confirmationLetter: !this.state.confirmationLetter,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Confirmation letter</Form.Check.Label>
                  </Form.Check>
                </Form.Group>

                <Form.Group as={Col} controlId="exitInterview">
                  <Form.Check custom type="check" id="exitInterview">
                    <Form.Check.Input
                      checked={this.state.exitInterview}
                      onClick={() =>
                        this.setState((prevState) => {
                          return {
                            ...prevState,
                            exitInterview: !this.state.exitInterview,
                          };
                        })
                      }
                      style={{ marginRight: "5px" }}
                    />
                    <Form.Check.Label>Exit interview</Form.Check.Label>
                  </Form.Check>
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
