import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Clients extends React.Component {
    state = {
        firstName: "",
        surname: "",
        otherName: "",
        fullName: "",
        clientCategoryId: "",
        clientId: ""
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(this.state)
        axios
            .post("https://avcs-platform.herokuapp.com/clients", this.state)
            .then(() =>
                this.setState(() => ({
                    firstName: "",
                    surname: "",
                    otherName: "",
                    fullName: "",
                    clientCategoryId: "",
                    clientId: ""
                }))
            )
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <>
                <Container>
                    <Card.Body>
                        <Form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <h1>Clients</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.firstName}
                                            onChange={this.changeHandler}
                                            name="firstName"
                                            required
                                            placeholder="First Name"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Surname</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.surname}
                                            onChange={this.changeHandler}
                                            name="surname"
                                            required
                                            placeholder="Surname"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Other Names</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.otherName}
                                            onChange={this.changeHandler}
                                            name="otherName"
                                            required
                                            placeholder="Other Names"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Fullname</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.fullName}
                                            onChange={this.changeHandler}
                                            name="fullName"
                                            required
                                            placeholder="Fullname"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Category ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.clientCategoryId}
                                            onChange={this.changeHandler}
                                            name="clientCategoryId"
                                            required
                                            placeholder="Category ID"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Client ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.clientId}
                                            onChange={this.changeHandler}
                                            name="clientId"
                                            required
                                            placeholder="Client ID"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Button id="add-button" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Container>
            </>
        );
    }
}
export default Clients;
