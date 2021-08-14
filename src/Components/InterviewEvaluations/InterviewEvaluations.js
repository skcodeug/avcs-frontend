import React from "react"
import { Container, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"

class InterviewEvaluations extends React.Component {
  state = {
    items: []
  }

  columns = [
    { dataField: "fullName", text: "Fullname" },
    { dataField: "position", text: "Position" },
    {
      dataField: "date",
      text: "Date",
      formatter: (cell, row) => {
        return <span>{new Date(row.date).toDateString()}</span>
      }
    },
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
      .get("https://avcs-platform.herokuapp.com/interviewEvaluations", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          items: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  redirect = (id) => {
    this.props.history.push("/interviewevaluation/update/", { id: id })
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

            {this.state.items && (
              <Table
                name="Interview Evaluations"
                columns={this.columns}
                products={this.state.items}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(InterviewEvaluations)
