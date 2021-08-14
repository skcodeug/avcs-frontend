import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"

class Canvas extends React.Component {
  constructor() {
    super()
    this.state = {
      staffId: "",
      staffRef: "",
      applicationLetter: "",
      cv: "",
      academicPaper: "",
      refereeLetter: "",
      interviewEvaluationReferenceId: "",
      managementRecommendation: "",
      appointmentApproval: "",
      appointmentLetter: "",
      bioData: "",
      confirmationLetter: "",
      exitInterview: "",
      errors: {}
    }
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      staffId: "",
      staffRef: "",
      applicationLetter: "",
      cv: "",
      academicPaper: "",
      refereeLetter: "",
      interviewEvaluationReferenceId: "",
      managementRecommendation: "",
      appointmentApproval: "",
      appointmentLetter: "",
      bioData: "",
      confirmationLetter: "",
      exitInterview: "",
      errors: {}
    }))
    document.getElementById("btn-close").click()
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors

      axios
        .post("https://avcs-platform.herokuapp.com/staffVerifications", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Created successfully!")
          this.setState(() => ({
            staffId: "",
            staffRef: "",
            applicationLetter: "",
            cv: "",
            academicPaper: "",
            refereeLetter: "",
            interviewEvaluationReferenceId: "",
            managementRecommendation: "",
            appointmentApproval: "",
            appointmentLetter: "",
            bioData: "",
            confirmationLetter: "",
            exitInterview: "",
            errors: {}
          }))
          event.target.className = "needs-validation"
        })
        .catch((error) => console.log(error))
    } else {
      let errors = findFormErrors(this.state)
      this.setState((prevState) => {
        return {
          ...prevState,
          errors
        }
      })
    }
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
                paddingBottom: "15%"
              }}
            >
              <h1
                style={{
                  marginBottom: "5%",
                  fontSize: "2rem",
                  fontWeight: "bolder"
                }}
              >
                Create
              </h1>

              <Row>
                <Form.Group as={Col} controlId="staffId">
                  <Form.Label>Staff ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.staffId}
                    onChange={this.changeHandler}
                    name="staffId"
                    required
                    isInvalid={this.state.errors.staffId}
                    placeholder="Staff ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.staffId}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="staffRef">
                  <Form.Label>Staff Ref</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.staffRef}
                    onChange={this.changeHandler}
                    name="staffRef"
                    required
                    isInvalid={this.state.errors.staffRef}
                    placeholder="Staff Ref"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.staffRef}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="applicationLetter">
                  <Form.Label>Application letter</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.applicationLetter}
                    onChange={this.changeHandler}
                    name="applicationLetter"
                    required
                    isInvalid={this.state.errors.applicationLetter}
                    placeholder="Application letter"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.applicationLetter}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="cv">
                  <Form.Label>Curriculum vitae</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.cv}
                    onChange={this.changeHandler}
                    name="cv"
                    required
                    isInvalid={this.state.errors.cv}
                    placeholder="Curriculum vitae"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.cv}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="academicPaper">
                  <Form.Label>Academic paper</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.academicPaper}
                    onChange={this.changeHandler}
                    name="academicPaper"
                    required
                    isInvalid={this.state.errors.academicPaper}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.academicPaper}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="refereeLetter">
                  <Form.Label>Referee letter</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.refereeLetter}
                    onChange={this.changeHandler}
                    name="refereeLetter"
                    required
                    isInvalid={this.state.errors.refereeLetter}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.refereeLetter}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="interviewEvaluationReferenceId">
                  <Form.Label>Interview evaluation reference ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.interviewEvaluationReferenceId}
                    onChange={this.changeHandler}
                    name="interviewEvaluationReferenceId"
                    required
                    isInvalid={this.state.errors.interviewEvaluationReferenceId}
                    placeholder="Enter ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.interviewEvaluationReferenceId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="managementRecommendation">
                  <Form.Label>Management recommendation</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.managementRecommendation}
                    onChange={this.changeHandler}
                    name="managementRecommendation"
                    required
                    isInvalid={this.state.errors.managementRecommendation}
                    placeholder="E.g This is a strong fit for this role."
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.managementRecommendation}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="appointmentApproval">
                  <Form.Label>Appointment approval</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.appointmentApproval}
                    onChange={this.changeHandler}
                    name="appointmentApproval"
                    required
                    isInvalid={this.state.errors.appointmentApproval}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.appointmentApproval}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="appointmentLetter">
                  <Form.Label>Appointment letter</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.appointmentLetter}
                    onChange={this.changeHandler}
                    name="appointmentLetter"
                    required
                    isInvalid={this.state.errors.appointmentLetter}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.appointmentLetter}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="bioData">
                  <Form.Label>Bio Data</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.bioData}
                    onChange={this.changeHandler}
                    name="bioData"
                    required
                    isInvalid={this.state.errors.bioData}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.bioData}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="confirmationLetter">
                  <Form.Label>Confirmation letter</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.confirmationLetter}
                    onChange={this.changeHandler}
                    name="confirmationLetter"
                    required
                    isInvalid={this.state.errors.confirmationLetter}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.confirmationLetter}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="exitInterview">
                  <Form.Label>Exit interview</Form.Label>
                  <Form.Control
                    type="file"
                    value={this.state.exitInterview}
                    onChange={this.changeHandler}
                    name="exitInterview"
                    required
                    isInvalid={this.state.errors.exitInterview}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.exitInterview}
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
    )
  }
}

export default Canvas
