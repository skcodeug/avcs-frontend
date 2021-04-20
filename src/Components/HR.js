import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


function Hr() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>
                        <Form id="form-prospectus">
                            <h1>Human Resource</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Full Names</Form.Label>
                                        <Form.Control placeholder="Full Names" required />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date Of Birth </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Marital Status</Form.Label>
                                        <Form.Control as="select" >
                                            <option value="" selected="selected">--Select One--</option>
                                            <option value="form_name1">Male</option>
                                            <option value="form_name2">Female</option>
                                        </Form.Control>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Recruitment Date </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>NIN</Form.Label>
                                        <Form.Control placeholder="Nin" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Staff Id</Form.Label>
                                        <Form.Control placeholder="Staff id " />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control as="select" >
                                            <option value="" selected="selected">--Select One--</option>
                                            <option value="form_name1">Staff</option>
                                            <option value="form_name2">Consultant</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Consultancy Rate</Form.Label>
                                        <Form.Control placeholder="Consultancy Rate" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Attach Photo" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Attach CV" />
                                    </Form.Group>
                                </Col>
                                <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Attach Academic Transcript" />
                                    </Form.Group>
                            </Form.Row>
                            {/* <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Attach Academic Transcript" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    
                                </Col>
                            </Form.Row> */}
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
export default Hr;