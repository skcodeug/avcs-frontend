import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      position: "",
      fullName: "",
      presentationSkills: 0,
      knowledgeOfPosition: 0,
      backgroundSkills: 0,
      professionalImpression: 0,
      interpersonalSkills: 0,
      organizationalFit: 0,
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
      position: "",
      fullName: "",
      presentationSkills: 0,
      knowledgeOfPosition: 0,
      backgroundSkills: 0,
      professionalImpression: 0,
      interpersonalSkills: 0,
      organizationalFit: 0,
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
        .post(
          "https://avcs-platform.herokuapp.com/interviewEvaluations",
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
          alert("Created successfully!");
          this.setState(() => ({
            date: "",
            position: "",
            fullName: "",
            presentationSkills: 0,
            knowledgeOfPosition: 0,
            backgroundSkills: 0,
            professionalImpression: 0,
            interpersonalSkills: 0,
            organizationalFit: 0,
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

  render() {
    return (
      <div style={{ margin: "0% 0% 0% 0%" }}>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ justifyContent: "right" }}
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
                  controlId="position"
                >
                  <Form.Label>Position</Form.Label>
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
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
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

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
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
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
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
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  lg={6}
                  style={{ marginTop: "3%" }}
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
