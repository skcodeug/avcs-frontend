import React from "react";
import { Container, Button } from "react-bootstrap";
import AppBar from "../AppBar";
import axios from "axios";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StaffVerifications extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  columns = [
    { dataField: "staffId", text: "Staff ID" },
    { dataField: "staffRef", text: "Staff Ref" },
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
      .get("https://avcs-platform.herokuapp.com/staffVerifications", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        console.log(this.state.items);
        this.setState((prevState) => ({
          ...prevState,
          items: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  redirect = (id) => {
    this.props.history.push("/staffVerifications/update/", { id: id });
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
          {this.props.role === "Admin" && <AdminNav />}
          <Container>
            <Canvas entry="Add a staff verification" />

            {this.state.items && (
              <Table
                name="Staff verifications"
                columns={this.columns}
                products={this.state.items}
              />
            )}
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(StaffVerifications);
