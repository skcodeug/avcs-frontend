import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import { withRouter } from "react-router-dom";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import HrNav from "../HrNav";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fetchData = () => {
    let id = this.props.location.state.id;
    axios
      .get("https://avcs-platform.herokuapp.com/interviewEvaluations/" + id, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          ...res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      delete temp.status;
      let id = this.props.location.state.id;

      axios
        .put(
          `https://avcs-platform.herokuapp.com/interviewEvaluations/${id}`,
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

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <>
        <AppBar />
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(247, 249, 252)",
            minHeight: "100vh",
          }}
        >
          {this.props.role === "Admin" ? <AdminNav /> : <HrNav />}

          <Container>
            <Container
              style={{
                margin: "10% 0 2% 15%",
                fontSize: "2rem",
                fontWeight: "bolder",
                backgroundColor: "white",
                borderRadius: "0.5%",
                boxShadow: "0 1px 2px rgb(0 0 0 / 0.2)",
                padding: "1% 0% 1% 4%",
                width: "85%",
              }}
            >
              <h2
                style={{
                  marginBottom: "0",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                Update
              </h2>
            </Container>

            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
              style={{
                marginLeft: "15%",
                marginTop: "1%",
                marginBottom: "10%",
                backgroundColor: "white",
                borderRadius: "0.5%",
                boxShadow: "0 1px 2px rgb(0 0 0 / 0.2)",
                padding: "2% 4%",
              }}
            >
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="date"
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.date}
                    name="date"
                    required
                    placeholder="Enter date"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.date}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="position"
                >
                  <Form.Label>position</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.position}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.position}
                    name="position"
                    required
                    placeholder="Enter position"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.position}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="fullName"
                >
                  <Form.Label>FullName</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.fullName}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.fullName}
                    name="fullName"
                    required
                    placeholder="Enter fullname"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="presentationSkills"
                >
                  <Form.Label>Presentation skills</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.presentationSkills}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.presentationSkills}
                    name="presentationSkills"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.presentationSkills}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="knowledgeOfPosition"
                >
                  <Form.Label>Knowledge of Position</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.knowledgeOfPosition}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.knowledgeOfPosition}
                    name="knowledgeOfPosition"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.knowledgeOfPosition}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="backgroundSkills"
                >
                  <Form.Label>Background skills</Form.Label>
                  <Form.Control
                    type="0"
                    value={this.state.backgroundSkills}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.backgroundSkills}
                    name="backgroundSkills"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.backgroundSkills}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="professionalImpression"
                >
                  <Form.Label>Professional impression</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.professionalImpression}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.professionalImpression}
                    name="professionalImpression"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.professionalImpression}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="interpersonalSkills"
                >
                  <Form.Label>Interpersonal skills</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.interpersonalSkills}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.interpersonalSkills}
                    name="interpersonalSkills"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.interpersonalSkills}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  lg="3"
                  controlId="organizationalFit"
                >
                  <Form.Label>Organization fit</Form.Label>
                  <Form.Control
                    type="0"
                    value={this.state.organizationalFit}
                    onChange={this.changeHandler}
                    isInvalid={this.state.errors.organizationalFit}
                    name="organizationalFit"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.organizationalFit}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <div style={{ marginTop: "3%" }}>
                <Button
                  id="add-button"
                  type="submit"
                  style={{ marginRight: "3%" }}
                >
                  Update
                </Button>
                <Button
                  variant="secondary"
                  id="cancel-button"
                  type="cancel"
                  onClick={() => {
                    this.props.history.push("/interviewEvaluation");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(Update);
