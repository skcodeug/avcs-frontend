import React from "react";
import { Container, Button } from "react-bootstrap";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class Quotations extends React.Component {
  constructor() {
    super();
    this.state = {
      quotations: [],
      clients: [],
      prospects: [],
    };
  }

  columns = [
    { dataField: "clientId", text: "Client ID" },
    { dataField: "prospectReferenceId", text: "Prospect Reference" },
    { dataField: "reference", text: "Quotation Reference" },
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

  fetchQuotations = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/quotations", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          quotations: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  fetchClients = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/clients", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          clients: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  fetchProspects = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/prospects", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          prospects: res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  itemsArray = () => {
    let items = this.state.quotations;

    for (let i = 0; i < this.state.quotations.length; i++) {
      for (let j = 0; j < this.state.clients.length; j++) {
        if (this.state.quotations[i].clientId === this.state.clients[j].id) {
          let fullname =
            this.state.clients[j].firstName +
            " " +
            this.state.clients[j].surname +
            " " +
            this.state.clients[j].otherNames;
          items[i].clientName = fullname;
        }
      }
      // for (let k = 0; k < this.state.prospects.length; k++) {
      //   if (
      //     this.state.quotations[i].prospectReferenceId ===
      //     this.state.prospects[k].id
      //   ) {
      //     items[i].prospectRef = this.state.prospects[k].reference;
      //   }
      // }
    }
    console.log(items);
    return items;
  };

  componentDidMount() {
    this.fetchQuotations();
  }

  redirect = (id) => {
    this.props.history.push("/quotations/update/", { id: id });
  };

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
            <Canvas entry="Add a quotation" />

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
    );
  }
}
export default withRouter(Quotations);
