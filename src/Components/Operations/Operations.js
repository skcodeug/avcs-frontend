import React from "react"
import { Button, Container } from "react-bootstrap"
import axios from "axios"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Operations extends React.Component {
  constructor() {
    super()
    this.state = {
      ops: []
    }
  }

  columns = [
    { dataField: "clientId", text: "Client ID" },
    { dataField: "projectStatusId", text: "Project status ID" },
    { dataField: "withHoldingTax", text: "WHT" },
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

  fetchOps = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/operations", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          ops: res.data
        }))
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }

  redirect = (id) => {
    this.props.history.push("/operations/update/", { id: id })
  }

  componentDidMount = () => {
    this.fetchOps()
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

            {this.state.ops && (
              <Table
                name="Operations"
                columns={this.columns}
                products={this.state.ops}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Operations)
