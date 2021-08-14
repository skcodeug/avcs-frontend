import React from "react"
import { Container, Button } from "react-bootstrap"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"

class Quotations extends React.Component {
  constructor() {
    super()
    this.state = {
      quotations: []
    }
  }

  columns = [
    { dataField: "clientId", text: "Client ID" },
    { dataField: "prospectReferenceId", text: "Prospect Reference ID" },
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

  redirect = (id) => {
    this.props.history.push("/quotations/update/", { id: id })
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

            {this.state.quotations && (
              <Table
                name="Quotations"
                columns={this.columns}
                products={this.state.quotations}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Quotations)
