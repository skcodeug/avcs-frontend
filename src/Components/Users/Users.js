import React from "react"
import { Button, Container } from "react-bootstrap"
import axios from "axios"
import AppBar from "../AppBar"
import AdminNav from "../AdminNav"
import HrNav from "../HrNav"
import Table from "../Table"
import Canvas from "./Canvas"
import DeleteBtn from "./Delete"
import { withRouter } from "react-router-dom"

class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  redirect = (id) => {
    this.props.history.push("/users/update/", { id: id })
  }

  columns = [
    { dataField: "firstName", text: "Firstname" },
    { dataField: "surname", text: "Surname" },
    { dataField: "email", text: "E-mail" },
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
      .get("https://avcs-platform.herokuapp.com/users", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, "")
        }
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          users: res.data
        }))
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.fetchUsers()
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
            <Canvas />

            {this.state.users && (
              <Table
                name="Users"
                columns={this.columns}
                products={this.state.users}
              />
            )}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Users)
