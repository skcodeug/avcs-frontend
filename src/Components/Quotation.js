import React, { Component } from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

class Quotations extends Component {
    constructor() {
        super();
        this.state = {
            selectedValue: '',
            inputs: []
            
        } 
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        quotationDate: '',
        quotationRef:'',
        client:'',
        prospectusRef:''
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
                            <Form.Control
                                placeholder="Unit Rate" 
                            />
                        </Form.Group>
                    </Col>


                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quantity </Form.Label>
                            <Form.Control 
                                placeholder="Quantity" 
                            />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Total</Form.Label>
                            <Form.Control 
                                as="select" 
                                value={this.state.total}
                                onChange={this.changeHandler}
                                name="total"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                required
                                placeholder="Total" 
                            />
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
                            <Form 
                                className="needs-validation"
                                onSubmit={this.submitHandler}
                                noValidate
                            >
                                <h1>Quotations</h1>
                                <Form.Row>
                                    <Col >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Quotation Date </Form.Label>
                                            <Form.Control 
                                                type="date" 
                                                value={this.state.quotationDate}
                                                onChange={this.changeHandler}
                                                name="quotationDate"
                                                id="defaultFormRegisterPasswordEx4"
                                                className="form-control"
                                                placeholder="Quotation Date"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid date.
                                            </div>
                                        </Form.Group>

                                    </Col>
                                    <Col >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Quotation Ref </Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={this.state.quotationRef}
                                                onChange={this.changeHandler}
                                                name="quotationRef"
                                                id="defaultFormRegisterPasswordEx4"
                                                className="form-control"
                                                placeholder="Quotation Ref"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Quotation Ref is required
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col >
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Client</Form.Label>
                                            <Form.Control 
                                                as="select" 
                                                value={this.state.client}
                                                onChange={this.changeHandler}
                                                name="client"
                                                id="defaultFormRegisterPasswordEx4"
                                                className="form-control"
                                                required
                                            >
                                            <div className="invalid-feedback">
                                                Enter Client.
                                            </div>
                                                <option value="" selected="selected">Kasirye Stephen</option>
                                                <option value="form_name1">Tusime Godwin</option>
                                                <option value="form_name1">Muhamadi Joseph</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Prospectus Ref </Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={this.state.prospectusRef}
                                                onChange={this.changeHandler}
                                                name="prospectusRef"
                                                className="form-control"
                                                placeholder="Prospectus Ref"
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Prospectus Ref needed!
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                {this.renderSelectedForm(this.state.selectedValue)}
                                {this.state.inputs.map(node =>

                                    <Form.Row >
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Unit Rate </Form.Label>
                                                <Form.Control  
                                                    as="select" 
                                                    value={this.state.unitRate}
                                                    onChange={this.changeHandler}
                                                    name="unitRate"
                                                    id="defaultFormRegisterPasswordEx4"
                                                    className="form-control"
                                                    required
                                                    placeholder="Unit Rate" 
                                                />
                                            <div className="invalid-feedback">
                                                Unit Rate needed!
                                            </div>
                                            </Form.Group>
                                        </Col>


                                        <Col >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Quantity </Form.Label>
                                                <Form.Control 
                                                    as="select" 
                                                    value={this.state.quantity}
                                                    onChange={this.changeHandler}
                                                    name="quantity"
                                                    id="defaultFormRegisterPasswordEx4"
                                                    className="form-control"
                                                    required
                                                    placeholder="Quantity" 
                                                />
                                            <div className="invalid-feedback">
                                                Quantity is Required!
                                            </div>
                                            </Form.Group>
                                        </Col>
                                        <Col >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Total</Form.Label>
                                                <Form.Control 
                                                    as="select" 
                                                    value={this.state.total}
                                                    onChange={this.changeHandler}
                                                    name="total"
                                                    id="defaultFormRegisterPasswordEx4"
                                                    className="form-control"
                                                    placeholder="Total" 
                                                    required 
                                                />
                                            <div className="invalid-feedback">
                                                Enter the total!
                                            </div>
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
export default Quotations;