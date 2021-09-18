import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Approvals extends React.Component {
  constructor() {
    super();
    this.state = {
      approvals: [],
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  columns = [
    { dataField: "approverId", text: "Approver ID" },
    { dataField: "requisitionReferenceId", text: "Requisition Ref-ID" },
    { dataField: "date", text: "Date" },
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

  fetchApprovals = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/approvals", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          approvals: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  redirect = (id) => {
    this.props.history.push("/approvals/update/", { id: id });
  };

  componentDidMount() {
    this.fetchApprovals();
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
            <Canvas entry="Create an approval" />

            {this.state.approvals && (
              <Table
                name="Approvals"
                columns={this.columns}
                products={this.state.approvals}
              />
            )}
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(Approvals);
