import React, { Component } from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

class Prospectus extends Component {
    constructor() {
        super();
        this.state = {
            selectedValue: '',
            inputs: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    addInput = ev => {
        this.setState(prev => ({ inputs: [...prev.inputs, 'Hi'] }))
    }

    renderSelectedForm(param) {
        switch (param) {
            case 'form_name1':
                return <Form.Row name="form_name1" id="form_name1" >



                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Unit Rate </Form.Label>
                            <Form.Control placeholder="Unit Rate" />
                        </Form.Group>
                    </Col>


                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quantity </Form.Label>
                            <Form.Control placeholder="Quantity" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Total</Form.Label>
                            <Form.Control placeholder="Total" />
                        </Form.Group>
                    </Col>



                </Form.Row>;
            case 'form_name2':
                return <div name="form_name1" id="form_name2" >



                </div>;
            case 'form_name3':
                return <form name="form_name1" id="form_name3" >

                </form>;
            default:
                return null;
        }
    }

    handleChange(event) { this.setState({ selectedValue: event.target.value }); }






    render() {
        return (
            <div>
                <Container >
                    <Row>

                        <Col>
                            <Form id="form-prospectus">
                                <h1>Prospectus</h1>
                                <Form.Row>
                                    <Col >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Prospect Date </Form.Label>
                                            <Form.Control type="date" required />
                                        </Form.Group>

                                    </Col>
                                    <Col >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Prospect Ref </Form.Label>
                                            <Form.Control placeholder="Prospect Ref" />
                                        </Form.Group>
                                    </Col>
                                    <Col >
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Client</Form.Label>
                                            <Form.Control as="select" value={this.state.selectedValue} onChange={this.handleChange}>
                                                <option value="" selected="selected">--Select One--</option>
                                                <option value="form_name1">Tusime Godwin</option>
                                                <option value="form_name1">Muhamadi Joseph</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                {this.renderSelectedForm(this.state.selectedValue)}
                                {this.state.inputs.map(node =>

                                    <Form.Row >
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Unit Rate </Form.Label>
                                                <Form.Control placeholder="Unit Rate" />
                                            </Form.Group>
                                        </Col>


                                        <Col >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Quantity </Form.Label>
                                                <Form.Control placeholder="Quantity" />
                                            </Form.Group>
                                        </Col>
                                        <Col >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Total</Form.Label>
                                                <Form.Control placeholder="Total" required />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>

                                )}
                                <div>
                                    <Button id="add-button" onClick={this.addInput}>Add More</Button> <br></br><br></br>

                                </div>
                                <Button id="add-button" type="submit">
                                    Submit
                            </Button><br></br>
                            </Form><br></br>
                        </Col>

                    </Row>
                </Container>


                

            </div>
        )
    }
};
export default Prospectus;