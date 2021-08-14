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
      .get("https://avcs-platform.herokuapp.com/receipts/" + id, {
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
        .put(`https://avcs-platform.herokuapp.com/receipts/${id}`, temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          alert("Updated succesfully")
          event.target.className = "needs-validation"
          this.props.history.push("/receipts")
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
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.date}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="clientId">
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

                <Form.Group as={Col} controlId="paid">
                  <Form.Label>Paid</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.amountPaid}
                    onChange={this.changeHandler}
                    name="amountPaid"
                    required
                    isInvalid={this.state.errors.amountPaid}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.amountPaid}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="balance">
                  <Form.Label>Balance</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.amountOutstanding}
                    onChange={this.changeHandler}
                    name="amountOutstanding"
                    required
                    isInvalid={this.state.errors.amountOutstanding}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.amountOutstanding}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="paidInWords">
                  <Form.Label>Paid in words</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.amountInWords}
                    onChange={this.changeHandler}
                    name="amountInWords"
                    required
                    isInvalid={this.state.errors.amountInWords}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.amountInWords}
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
                    this.props.history.push("/receipts")
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
