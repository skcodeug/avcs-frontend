import React from "react"
import { Card, Col, Container, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"

class Prospects extends React.Component {
  constructor() {
    super()
    this.state = {
      prospects: []
    }
  }

  columns = [
    { dataField: "clientId", text: "Client ID" },
    { dataField: "date", text: "Date" },
    { dataField: "reference", text: "Reference" },
    {
      dataField: "follow",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <span style={{ display: "flex" }}>
            <Button onClick={() => this.redirect(row.id)}>update</Button>
            <DeleteBtn id={row.id} />
          </span>
        )
      }
    }
  ]

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors
      console.log(temp)

      axios
        .post("https://avcs-platform.herokuapp.com/prospects", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            clientId: "",
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
          errors: errors
        }
      })
    }
  }

  fetchProspects = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/prospects", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          prospects: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  redirect = (id) => {
    this.props.history.push("/prospects/update/", { id: id })
  }

  componentDidMount() {
    this.fetchProspects()
  }

  render() {
    return (
      <>
        <AppBar />
        <div style={{ display: "flex" }}>
          {this.props.role === "Admin" && <AdminNav />}
          <Container>
            <Canvas />

            {this.state.prospects && (
              <Table
                name="Prospects"
                columns={this.columns}
                products={this.state.prospects}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Prospects)
