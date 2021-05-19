import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Quotations extends React.Component {
    state = {
        date: "",
        reference: "",
        clientId: "",
        prospectReferenceId: "",
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(this.state)
        axios
            .post("https://avcs-platform.herokuapp.com/quotations", this.state)
            .then(() =>
                this.setState(() => ({
                    date: "",
                    reference: "",
                    clientId: "",
                    prospectReferenceId: "",
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
                            <h1>Quotations</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date </Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={this.state.date}
                                            onChange={this.changeHandler}
                                            name="date"
                                            id="defaultFormRegisterPasswordEx4"
                                            placeholder="Date"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Prospect Date!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Reference</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.reference}
                                            onChange={this.changeHandler}
                                            name="reference"
                                            required
                                            placeholder="Reference"
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
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Prospect Ref-ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                this.state.prospectReferenceId
                                            }
                                            onChange={this.changeHandler}
                                            name="prospectReferenceId"
                                            required
                                            placeholder="Reference ID"
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
export default Quotations;
