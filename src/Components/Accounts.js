import React from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button, Accordion, Card, } from 'react-bootstrap';


function Accounts() {
    return (
        <div id="form">

            <Container id="form-prospectus">
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>

                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Button} eventKey="0" id="add-button">
                                    Reciepts
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form id="form-prospectus">
                                            <h1>Reciepts</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Reciept No</Form.Label>
                                                        <Form.Control placeholder="Reciept No" required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Receipt Date</Form.Label>
                                                        <Form.Control type="date" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Cleint</Form.Label>
                                                        <Form.Control placeholder="Client" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Paid </Form.Label>
                                                        <Form.Control placeholder="Amount paid" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Amount in words</Form.Label>
                                                        <Form.Control placeholder="Amount in words" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Outstanding</Form.Label>
                                                        <Form.Control placeholder="Amount Outstanding " />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Button id="add-button" type="submit">
                                                Submit
                                            </Button>
                                            <br></br>
                                        </Form>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <br></br>
                            <Card>
                                <Accordion.Toggle as={Button} eventKey="1" id="add-button">
                                    Invoices
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form id="form-prospectus">
                                            <h1>Invoices</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Invoice No</Form.Label>
                                                        <Form.Control placeholder="Invoice Date" required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Invoice Date </Form.Label>
                                                        <Form.Control type="date" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Client</Form.Label>
                                                        <Form.Control placeholder="Client" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Description </Form.Label>
                                                        <Form.Control as="textarea" rows={3} />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Rate</Form.Label>
                                                        <Form.Control placeholder="Rate" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Quantity</Form.Label>
                                                        <Form.Control placeholder="Quantity " />
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

                                            <Button id="add-button" type="submit">
                                                Submit
                                                </Button>
                                            <br></br>
                                        </Form><br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <br></br>
                            <Card>
                                <Accordion.Toggle as={Button} eventKey="2" id="add-button">
                                    Payments
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <Form id="form-prospectus">
                                            <h1>Payments</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment Date</Form.Label>
                                                        <Form.Control type="date" required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment Ref </Form.Label>
                                                        <Form.Control placeholder="Payment Ref" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment To</Form.Label>
                                                        <Form.Control placeholder="Payment To" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment For </Form.Label>
                                                        <Form.Control placeholder="Payment For" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Amount Paid</Form.Label>
                                                        <Form.Control placeholder="Amount Paid" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Outstanding</Form.Label>
                                                        <Form.Control placeholder="Amount Outstanding " />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>

                                            <Button id="add-button" type="submit">
                                                Submit
                                            </Button><br></br>
                                        </Form><br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <br></br>



                            <Card>
                                <Accordion.Toggle as={Button} eventKey="3" id="add-button">
                                    Requisitions
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <Form id="form-prospectus">
                                            <h1>Requisitions</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Requisition Date</Form.Label>
                                                        <Form.Control type="date" required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Requisition Ref </Form.Label>
                                                        <Form.Control placeholder="Requisition Ref" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Item</Form.Label>
                                                        <Form.Control placeholder="Item" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount</Form.Label>
                                                        <Form.Control placeholder='Amount' />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Who is making the Requisition</Form.Label>
                                                        <Form.Control placeholder="Who is making the Requisition" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Who is making approving</Form.Label>
                                                        <Form.Control placeholder="Who is making approving " />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Button id="add-button" type="submit">
                                                Submit
                                            </Button><br></br>
                                        </Form><br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* <Card>
                                <Accordion.Toggle as={Button} eventKey="1">
                                    Invoices
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Button} eventKey="1">
                                    Invoices
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card> */}
                        </Accordion>


                        <br></br>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default Accounts;