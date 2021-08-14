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

class Consultants extends React.Component {
  constructor() {
    super()
    this.state = {
      consultants: []
    }
  }

  columns = [
    { dataField: "firstName", text: "Firstname" },
    { dataField: "surname", text: "Surname" },
    { dataField: "otherNames", text: "Othernames" },
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

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  redirect = (id) => {
    this.props.history.push("/consultants/update/", { id: id })
  }

  fetchConsultants = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/consultants", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          consultants: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.fetchConsultants()
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
            {this.state.consultants && (
              <Table
                name="Consultants"
                columns={this.columns}
                products={this.state.consultants}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Consultants)
