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
      .get("https://avcs-platform.herokuapp.com/requisitions/" + id, {
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
        .put(`https://avcs-platform.herokuapp.com/requisitions/${id}`, temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Updated succesfully")
          event.target.className = "needs-validation"
          this.props.history.push("/requisitions")
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
                <Form.Group as={Col} controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                    name="date"
                    required
                    isInvalid={this.state.errors.date}
                    placeholder="Date"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.date}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="details">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.details}
                    onChange={this.changeHandler}
                    name="details"
                    required
                    isInvalid={this.state.errors.details}
                    placeholder="Details"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.details}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.amount}
                    onChange={this.changeHandler}
                    name="amount"
                    required
                    isInvalid={this.state.errors.amount}
                    placeholder="E.g 2500000"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.amount}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="requisitionerId">
                  <Form.Label>Requisitioner ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.requisitionerId}
                    onChange={this.changeHandler}
                    name="requisitionerId"
                    required
                    isInvalid={this.state.errors.requisitionerId}
                    placeholder="Requisitioner ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.requisitionerId}
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
                    this.props.history.push("/requisitions")
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
