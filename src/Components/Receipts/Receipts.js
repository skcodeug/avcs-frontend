import React from "react"
import { Card, Col, Container, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"

class Receipts extends React.Component {
  constructor() {
    super()
    this.state = {
      receipts: []
    }
  }

  columns = [
    { dataField: "invoiceReferenceId", text: "Invoice reference ID" },
    { dataField: "amountPaid", text: "Amount paid" },
    { dataField: "amountInWords", text: "Amount in words" },
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

  fetchUsers = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/receipts", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          receipts: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  redirect = (id) => {
    this.props.history.push("/receipts/update/", { id: id })
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
          <Container>
            <Canvas />

            {this.state.receipts && (
              <Table
                name="Receipts"
                columns={this.columns}
                products={this.state.receipts}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Receipts)
