import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      surname: "",
      otherNames: "",
      clientCategoryId: "",
      errors: {},
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.fetchData();
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.errors;

      axios
        .put(
          `https://avcs-platform.herokuapp.com/clients/${this.props.row.id}`,
          temp,
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("access-token").replace(/"/g, ""),
            },
          }
        )
        .then(() => {
          alert("Updated succesfully");
          this.setState(() => ({
            firstName: "",
            surname: "",
            otherNames: "",
            clientCategoryId: "",
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

  fetchData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/clients/" + this.props.row.id, {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          ...res.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  item = () => {
    console.log(this.state);
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight1"
          aria-controls="offcanvasRight"
          style={{ marginLeft: "1%" }}
          onClick={this.item}
        >
          Update
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight1"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "35%" }}
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="btn1-close"
              style={{ display: "none" }}
            ></button>
          </div>
          <div class="offcanvas-body">
            <Form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
              style={{
                paddingLeft: "2%",
                paddingRight: "2%",
                paddingBottom: "15%",
              }}
            >
              <h1
                style={{
                  marginBottom: "5%",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                Update
              </h1>

              <Form.Group style={{ marginTop: "5%" }} controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                  name="firstName"
                  required
                  placeholder="First Name"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={{ marginTop: "5%" }} controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.surname}
                  onChange={this.changeHandler}
                  name="surname"
                  required
                  placeholder="Surname"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.surname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group style={{ marginTop: "5%" }} controlId="othernames">
                <Form.Label>Other Names</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.otherNames}
                  onChange={this.changeHandler}
                  name="otherNames"
                  required
                  placeholder="Other Names"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.otherNames}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                style={{ marginTop: "5%" }}
                controlId="clientcategoryid"
              >
                <Form.Label>Client category ID</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.clientCategoryId}
                  onChange={this.changeHandler}
                  name="clientCategoryId"
                  required
                  placeholder="Enter ID"
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.clientCategoryId}
                </Form.Control.Feedback>
              </Form.Group>

              <div style={{ marginTop: "10%" }}>
                <Button
                  id="add-button"
                  type="submit"
                  style={{ marginRight: "5%" }}
                >
                  Create
                </Button>
                <Button
                  variant="secondary"
                  id="cancel-button"
                  type="reset"
                  onClick={this.reset}
                >
                  Reset {this.state.surname}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
