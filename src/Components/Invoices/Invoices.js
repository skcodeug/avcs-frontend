import React from "react";
import { Container, Button } from "react-bootstrap";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Invoices extends React.Component {
  constructor() {
    super();
    this.state = {
      invoices: [],
    };
    this.canvas = <Canvas entry="Create an invoice" />;
  }

  columns = [
    { dataField: "contractReferenceId", text: "Contract Ref-ID" },
    { dataField: "clientId", text: "Client ID" },
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

  redirect = (id) => {
    this.props.history.push("/invoices/update/", { id: id });
  };

  fetchInvoices = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/invoices", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          invoices: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchInvoices();
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
            {this.state.invoices && (
              <Table
                name="Invoices"
                columns={this.columns}
                products={this.state.invoices}
                btn={this.canvas}
              />
            )}
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(Invoices);
