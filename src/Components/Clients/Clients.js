import React from "react"
import { Button, Container } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "./FindFormErrors"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import HrNav from "../HrNav"
import SalesNav from "../SalesNav"
import Table from "../Table"
import Update from "./Update"
import Canvas from "./Canvas"

class Clients extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      surname: "",
      otherNames: "",
      clientCategoryId: "",
      clients: [],
      errors: {}
    }
  }

  columns = [
    { dataField: "firstName", text: "Firstname" },
    { dataField: "surname", text: "Surname" },
    { dataField: "otherNames", text: "Other names" },
    {
      // dataField: "id",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <span style={{ display: "flex" }}>
            <Update row={row} />

            <Button
              onClick={() => alert("Are you sure you want to delete this?")}
            >
              Delete
            </Button>
          </span>
        )
      }
    }
  ]

  fetchUsers = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/clients", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          clients: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors

      axios
        .post("https://avcs-platform.herokuapp.com/clients", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          this.setState(() => ({
            firstName: "",
            surname: "",
            otherNames: "",
            clientCategoryId: "",
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

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    return (
      <>
        <AppBar />
        <div style={{ display: "flex" }}>
          {this.props.role === "Admin" && <AdminNav />}
          {this.props.role === "HR" && <HrNav />}
          {this.props.role === "Sales" && <SalesNav />}

          <Container>
            <Canvas />

            {this.state.clients && (
              <Table
                name="Clients"
                columns={this.columns}
                products={this.state.clients}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default Clients
