import React from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
function Contracts() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>
                        <Form id="form-prospectus">
                        <h1>Contracts</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Contract Date </Form.Label>
                                        <Form.Control type="date" required />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Contract Ref </Form.Label>
                                        <Form.Control placeholder="Contract Ref" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Quotation No</Form.Label>
                                            <Form.Control as="select"  >
                                                <option value="" selected="selected">Can Depend on Client</option>
                                                <option value="form_name1">23783783</option>
                                                <option value="form_name1">4647448</option>
                                            </Form.Control>
                                        </Form.Group>

                                </Col>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Client</Form.Label>
                                            <Form.Control as="select"  >
                                                <option value="" selected="selected">Can Depend on Quotation</option>
                                                <option value="form_name1">Kasirye Stephen</option>
                                                <option value="form_name1">Tusime Godwin</option>
                                            </Form.Control>
                                        </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description of Service</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Projected Start Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Projected End Date</Form.Label>
                                        <Form.Control type="date" />
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
export default Contracts;