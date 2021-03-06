import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import findFormErrors from "./FindFormErrors";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 60927f77-56de-4f75-82a0-b1284549efa1
// 6eca3ffa-981c-41b7-8fb1-25ffc6fa6d82

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      surname: "",
      otherNames: "",
      clientCategoryId: "",
      clientCategories: [],
      errors: {},
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fetchDropDownData = () => {
    axios
      .get("https://avcs-platform.herokuapp.com/clientCategories", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("access-token").replace(/"/g, ""),
        },
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            clientCategories: res.data,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  reset = () => {
    this.setState((prevState) => ({
      ...prevState,
      firstName: "",
      surname: "",
      otherNames: "",
      clientCategoryId: "",
      clientCategories: [],
      errors: {},
    }));
    document.getElementById("btn-close").click();
  };

  componentDidMount() {
    this.fetchDropDownData();
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(findFormErrors(this.state)).length === 0) {
      event.target.className += " was-validated";

      let temp = { ...this.state };
      delete temp.clientCategories;
      delete temp.errors;

      axios
        .post("https://avcs-platform.herokuapp.com/clients", temp, {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("access-token").replace(/"/g, ""),
          },
        })
        .then(() => {
          alert("Created successfully!");
          this.setState(() => ({
            firstName: "",
            surname: "",
            otherNames: "",
            clientCategoryId: "",
            clientCategories: [],
            errors: {},
          }));
          event.target.className = "needs-validation";
          window.location.reload();
        })
        .catch((error) => console.log(error));
    } else {
      let errors = findFormErrors(this.state);
      this.setState((prevState) => {
        return {
          ...prevState,
          errors,
        };
      });
    }
  };

  render() {
    return (
      <div style={{ margin: "0% 0% 0% 0%" }}>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>

        <div
          class="offcanvas offcanvas-end"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          style={{ width: "35%" }}
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="btn-close"
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
                {this.props.entry}
              </h1>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="firstname"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                    name="firstName"
                    required
                    placeholder="Firstname"
                    isInvalid={this.state.errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="surname"
                >
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.surname}
                    onChange={this.changeHandler}
                    name="surname"
                    required
                    placeholder="Surname"
                    isInvalid={this.state.errors.surname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="othernames"
                >
                  <Form.Label>Other Names</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.otherNames}
                    onChange={this.changeHandler}
                    name="otherNames"
                    required
                    placeholder="Other Names"
                    isInvalid={this.state.errors.otherNames}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.otherNames}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  style={{ marginTop: "3%" }}
                  controlId="clientcategoryid"
                >
                  <Form.Label>Client category</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.clientCategoryId}
                    onChange={this.changeHandler}
                    name="clientCategoryId"
                    required
                    isInvalid={this.state.errors.clientCategoryId}
                  >
                    <option value="">--Choose--</option>
                    {this.state.clientCategories &&
                      this.state.clientCategories.map(
                        (clientCategory, index) => (
                          <option key={index} value={clientCategory.id}>
                            {clientCategory.name}
                          </option>
                        )
                      )}
                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {this.state.errors.clientCategoryId}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              {this.state.clientCategoryId ===
              "60927f77-56de-4f75-82a0-b1284549efa1"
                ? () => {
                    return <></>;
                  }
                : () => {
                    return <></>;
                  }}

              <div style={{ marginTop: "10%" }}>
                <Button
                  id="add-button"
                  type="submit"
                  style={{ marginRight: "3%" }}
                >
                  Submit
                </Button>
                <Button
                  variant="secondary"
                  id="cancel-button"
                  type="reset"
                  onClick={this.reset}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;
