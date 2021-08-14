import React from "react"
import { Form, Button, Container, Col, Row } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import { withRouter } from "react-router-dom"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import HrNav from "../HrNav"

class Update extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {}
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  fetchData = () => {
    let id = this.props.location.state.id
    axios
      .get("https://avcs-platform.herokuapp.com/staffVerifications/" + id, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          ...res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors
      let id = this.props.location.state.id

      axios
        .put(
          `https://avcs-platform.herokuapp.com/staffVerifications/${id}`,
          temp,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, "")
            }
          }
        )
        .then(() => {
          alert("Updated succesfully")
          event.target.className = "needs-validation"
          this.props.history.push("/staffVerifications")
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

  componentDidMount = () => {
    this.fetchData()
  }

  render() {
    return (
      <>
        <AppBar />
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(247, 249, 252)",
            minHeight: "100vh"
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
                width: "85%"
              }}
            >
              <h2
                style={{
                  marginBottom: "0",
                  fontSize: "2rem",
                  fontWeight: "bolder"
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
                padding: "2% 4%"
              }}
            >
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
                    this.props.history.push("/staffVerifications")
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </>
    )
  }
}

export default withRouter(Update)
