import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Operators extends React.Component {
    state = {
        clientId: "",
        contractReferenceId: "",
        consultantId: "",
        commission: 0,
        withHoldingTax: 0,
        projectStatusId: "",
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(this.state)
        axios
            .post("https://avcs-platform.herokuapp.com/operators", this.state)
            .then(() =>
                this.setState(() => ({
                    clientId: "",
                    contractReferenceId: "",
                    consultantId: "",
                    commission: 0,
                    withHoldingTax: 0,
                    projectStatusId: "",
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
                            <h1>Operations</h1>
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
                                        <Form.Label>Contract Ref-ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.contractReferenceId}
                                            onChange={this.changeHandler}
                                            name="contractReferenceId"
                                            required
                                            placeholder="Contract reference ID"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>                                
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Consultant ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.consultantId}
                                            onChange={this.changeHandler}
                                            name="consultantId"
                                            required
                                            placeholder="Consultant ID"
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
                                        <Form.Label>Commission</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={this.state.commission}
                                            onChange={this.changeHandler}
                                            name="commission"
                                            id="defaultFormRegisterPasswordEx6"
                                            placeholder="Commission"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Commission!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>With Holding Tax</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={this.state.withHoldingTax}
                                            onChange={this.changeHandler}
                                            name="withHoldingTax"
                                            id="defaultFormRegisterPasswordEx6"
                                            placeholder="Commission"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Value!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Project Status ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                this.state.projectStatusId
                                            }
                                            onChange={this.changeHandler}
                                            name="projectStatusId"
                                            required
                                            placeholder="Project status ID"
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
export default Operators;