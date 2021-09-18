import React from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Prospects extends React.Component {
  constructor() {
    super();
    this.state = {
      prospects: [],
      clients: [],
    };
  }

  columns = [
    { dataField: "clientName", text: "Client" },
    { dataField: "date", text: "Date" },
    { dataField: "reference", text: "Reference" },
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

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;
      console.log(temp);

      axios
        .post("https://avcs-platform.herokuapp.com/prospects", temp, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(() => {
          this.setState(() => ({
            date: "",
            clientId: "",
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

  itemsArray = () => {
    let items = this.state.prospects;

    this.state.prospects.map((prospect, index) => {
      this.state.clients.map((client) => {
        if (prospect.clientId === client.id) {
          let fullname =
            client.firstName + " " + client.surname + " " + client.otherNames;
          items[index].clientName = fullname;
        }
      });
    });
    console.log(items);
    return items;
  };

  redirect = (id) => {
    this.props.history.push("/prospects/update/", { id: id });
  };

  componentDidMount() {
    this.fetchProspects();
    this.fetchClients();
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
            <Canvas entry="Add a prospect" />

            {this.state.prospects && (
              <Table
                name="Prospects"
                columns={this.columns}
                products={this.itemsArray()}
              />
            )}
          </Container>
        </div>
      </>
    );
  }
}
export default withRouter(Prospects);
