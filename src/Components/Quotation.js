import React from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

function Quotations() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>
                        <Form id="form">
                        <h1>Quotations</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Quotations Date </Form.Label>
                                        <Form.Control type="date" required />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Quotation Ref </Form.Label>
                                        <Form.Control placeholder="Quotation Ref" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Client </Form.Label>
                                        <Form.Control placeholder="Client" />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Particulars </Form.Label>
                                        <Form.Control placeholder="Particulars" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Unit Rate </Form.Label>
                                        <Form.Control placeholder="Unit Rate" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Quantity </Form.Label>
                                        <Form.Control placeholder="Quantity" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control placeholder="Total" />
                                    </Form.Group>
                                </Col>
                                <Col>

                                </Col>
                            </Form.Row>
                            <Button variant="primary" type="submit">
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
export default Quotations;