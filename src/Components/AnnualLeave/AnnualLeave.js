import React from "react"
import { Button, Container } from "react-bootstrap"
import axios from "axios"
import findFormErrors from "../AnnualLeave/FindFormErrors"
import AppBar from "../AppBar"
import DeleteBtn from "./Delete"
import Table from "../Table"
import Canvas from "./Canvas"
import AdminNav from "../AdminNav"
import HrNav from "../HrNav"
import SalesNav from "../SalesNav"
import FinanceNav from "../FinanceNav"
import { withRouter } from "react-router-dom"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class AnnualLeave extends React.Component {
  constructor() {
    super()
    this.state = {
      entries: []
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  columns = [
    { dataField: "staffId", text: "Staff ID" },
    { dataField: "period", text: "Period" },
    { dataField: "returnDate", text: "Return date" },
    {
      dataField: "follow",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <span style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => this.redirect(row.id)}
              style={{
                backgroundColor: "white",
                border: "none",
                marginRight: "2.5%"
              }}
            >
              <FontAwesomeIcon icon={faPencilAlt} style={{ color: "blue" }} />
            </Button>
            <DeleteBtn id={row.id} />
          </span>
        )
      }
    }
  ]

  fetchEntries = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/annualleave", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          entries: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  redirect = (id) => {
    this.props.history.push("/annualleave/update/", { id: id })
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated"

      let temp = { ...this.state }
      delete temp.errors
      console.log(temp)

      axios
        .post("https://avcs-platform.herokuapp.com/annualLeave", temp, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
          }
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            staffId: "",
            period: "",
            purpose: "",
            lastDate: "",
            returnDate: "",
            contactAddress: "",
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

  componentDidMount() {
    this.fetchEntries()
  }

  render() {
    return (
      <>
        <AppBar />
        <div style={{ display: "flex" }}>
          {this.props.role === "Admin" && <AdminNav />}
          {this.props.role === "HR" && <HrNav />}
          {this.props.role === "Sales" && <SalesNav />}
          {this.props.role === "Finance" && <FinanceNav />}
          <Container>
            <Canvas />

            {this.state.entries && (
              <Table
                name="Annual Leave"
                columns={this.columns}
                products={this.state.entries}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(AnnualLeave)
