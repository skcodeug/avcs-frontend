import React from "react"
import { Container, Button } from "react-bootstrap"
import axios from "axios"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"

class Payments extends React.Component {
  constructor() {
    super()
    this.state = {
      payments: []
    }
  }

  columns = [
    { dataField: "contractReferenceId", text: "Contract Ref-ID" },
    { dataField: "consultantId", text: "Consultant ID" },
    { dataField: "paid", text: "Paid" },
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

  fetchPayments = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/payments", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          payments: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  redirect = (id) => {
    this.props.history.push("/payments/update/", { id: id })
  }

  componentDidMount() {
    this.fetchPayments()
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
          {this.props.role === "Admin" && <AdminNav />}
          <Container>
            <Canvas />

            {this.state.payments && (
              <Table
                name="Payments"
                columns={this.columns}
                products={this.state.payments}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Payments)
