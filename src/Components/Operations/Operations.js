import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Update from "./Update";
import Canvas from "./Canvas";

class Operations extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "",
      contractReferenceId: "",
      consultantId: "",
      startDate: "",
      endDate: "",
      projectStatusId: "",
      ops: [],
      errors: {},
    };
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
          <span style={{ display: "flex" }}>
            <Update id={row} />

            <Button
              onClick={() => alert("Are you sure you want to delete this?")}
            >
              Delete
            </Button>
          </span>
        );
      },
    },
  ];

  fetchOps = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/operations", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          ops: res.data,
        }));
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      delete temp.ops;

      axios
        .post("https://avcs-platform.herokuapp.com/operations", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            clientId: "",
            contractReferenceId: "",
            consultantId: "",
            startDate: "",
            endDate: "",
            projectStatusId: "",
            ops: [],
            errors: {},
          }));
          event.target.className = "needs-validation";
        })
        .catch((error) => console.log(error));
    } else {
      let errors = findFormErrors(this.state);
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: errors,
        };
      });
    }
  };

  componentDidMount = () => {
    this.fetchOps();
  };

  render() {
    return (
      <>
        <AppBar />
        <div style={{ display: "flex" }}>
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
    );
  }
}
export default Operations;
