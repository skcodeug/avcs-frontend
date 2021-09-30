import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import HrNav from "../HrNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
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
          <span style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => this.redirect(row.id)}
              style={{
                backgroundColor: "white",
                border: "none",
                marginRight: "2.5%",
              }}
            >
              <FontAwesomeIcon icon={faPencilAlt} style={{ color: "blue" }} />
            </Button>
            <DeleteBtn id={row.id} />
          </span>
        );
      },
    },
  ];

  fetchUsers = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/users", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          users: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  redirect = (id) => {
    this.props.history.push("/users/update/", { id: id });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <>
        <AppBar />

        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(247, 249, 252)",
            minHeight: "100vh",
          }}
        >
          {localStorage.getItem("role").replace(/"/g, "") === "Admin" ? (
            <AdminNav />
          ) : (
            <HrNav />
          )}

          <Container>
            <Canvas entry="Add a user" />

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
    );
  }
}
export default withRouter(Users);
