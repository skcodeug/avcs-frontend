import React from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


function Operations() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>
                        <Form id="form-prospectus">
                        <h1>Operations</h1>
                            <Form.Row>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Client</Form.Label>
                                            <Form.Control as="select"  >
                                                <option value="" selected="selected">--Choose--</option>
                                                <option value="form_name1">Kasirye Stephen</option>
                                                <option value="form_name1">Tusime Godwin</option>
                                            </Form.Control>
                                        </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Contract Ref </Form.Label>
                                        <Form.Control placeholder="Depends on Client Selected" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>End Date </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Contract Value</Form.Label>
                                        <Form.Control placeholder="Depends on Client Selected" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Consultant Assigned</Form.Label>
                                        <Form.Control placeholder="Consultant Assigned " />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Amount Due</Form.Label>
                                        <Form.Control placeholder="10,000,0000" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="formBasicEmail">
                                        <Form.Label>WHT</Form.Label>
                                        <Form.Control placeholder="WHT" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Project Status</Form.Label>
                                        <Form.Control placeholder="Project status" />
                                    </Form.Group>
                                </Col>
                                <Col>

                                </Col>
                            </Form.Row>
                            <Button id="add-button" type="submit">
                                Submit
                            </Button><br></br>
                        </Form><br></br>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default Operations;