import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Groups extends React.Component {
    state = {
        name: "",
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        axios
            .post("https://avcs-platform.herokuapp.com/groups", this.state)
            .then(() => this.setState(() => ({ name: "" })))
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
                            <h1>Groups</h1>
                            <Form.Row>
                                <Col lg="3">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Group Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.changeHandler}
                                            name="name"
                                            required
                                            placeholder="Group name"
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
export default Groups;
