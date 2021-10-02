import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import AppBar from "../AppBar";
import AdminNav from "../AdminNav";
import Table from "../Table";
import Canvas from "./Canvas";
import DeleteBtn from "./Delete";
import { withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Prospects extends React.Component {
  constructor() {
    super();
    this.state = {
      prospects: [],
      clients: [],
    };
  }

  columns = [
    { dataField: "clientName", text: "Client Name" },
    {
      dataField: "date",
      text: "Date",
      formatter: (cell, row) => {
        return <span>{new Date(row.date).toDateString()}</span>;
      },
    },
    { dataField: "reference", text: "Reference" },
    {
      dataField: "follow",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <span style={{ display: "flex", justifyContent: "center" }}>
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

    for (let i = 0; i < this.state.prospects.length; i++) {
      for (let j = 0; j < this.state.clients.length; j++) {
        if (this.state.prospects[i].clientId === this.state.clients[j].id) {
          let fullname =
            this.state.clients[j].firstName +
            " " +
            this.state.clients[j].surname +
            " " +
            this.state.clients[j].otherNames;
          items[i].clientName = fullname;
        }
      }
    }
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
