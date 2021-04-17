import React from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
function prospectus() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>
                        <Form id="form-prospectus">
                        <h1>Prospectus</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Prospect Date </Form.Label>
                                        <Form.Control type="date" required />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Prospect Ref </Form.Label>
                                        <Form.Control placeholder="Prospect Ref" />
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
                                        <Form.Label>Details </Form.Label>
                                        <Form.Control placeholder="Details" />
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
            

            {/* <div className="login-box">
                <h2>Login</h2> */}
            {/* <form>
                <div className="user-box">
                    <input type="text" name="" required=""></input>
                         <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required=""></input>
                        <label>Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
             </form>
            </div>*/}

        </div> 
    )
};
export default prospectus;