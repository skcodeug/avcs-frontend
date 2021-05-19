import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Prospectus extends React.Component {
    state = {
        date: "",
        reference: "",
        clientId: "",
        details: "",
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        axios
            .post("https://avcs-platform.herokuapp.com/prospects", this.state)
            .then(() =>
                this.setState(() => ({
                    date: "",
                    reference: "",
                    clientId: "",
                    details: "",
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
                            <h1>Prospectus</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date </Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={this.state.date}
                                            onChange={this.changeHandler}
                                            name="date"
                                            id="defaultFormRegisterPasswordEx4"
                                            placeholder="Date"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Prospect Date!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Reference</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.reference}
                                            onChange={this.changeHandler}
                                            name="reference"
                                            required
                                            placeholder="Reference"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
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
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Details</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.details}
                                            onChange={this.changeHandler}
                                            name="details"
                                            required
                                            placeholder="Details"
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
export default Prospectus;

// import React, { Component } from 'react';
// import '../App.css';
// import { Form, Container, Row, Col, Button } from 'react-bootstrap';

// class Prospectus extends Component {
//     constructor() {
//         super();
//         this.state = {
//             selectedValue: '',
//             inputs: []
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//      state = {
//         prospectDate:'',
//         prospectRef:'',
//         client:'',
//         unitRate:'',
//         quantity:'',
//         total:''
//     }

//     submitHandler = event => {
//         event.preventDefault();
//         event.target.className += " was-validated";
//     };

//   changeHandler = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//     addInput = ev => {
//         this.setState(prev => ({ inputs: [...prev.inputs, 'Hi'] }))
//     }

//     renderSelectedForm(param) {
//         switch (param) {
//             case 'form_name1':
//                 return <Form.Row name="form_name1" id="form_name1" >

//                     <Col >
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Unit Rate </Form.Label>
//                             <Form.Control placeholder="Unit Rate" />
//                         </Form.Group>
//                     </Col>

//                     <Col >
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Quantity </Form.Label>
//                             <Form.Control placeholder="Quantity" />
//                         </Form.Group>
//                     </Col>
//                     <Col >
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Total</Form.Label>
//                             <Form.Control placeholder="Total" />
//                         </Form.Group>
//                     </Col>

//                 </Form.Row>;
//             case 'form_name2':
//                 return <div name="form_name1" id="form_name2" >

//                 </div>;
//             case 'form_name3':
//                 return <form name="form_name1" id="form_name3" >

//                 </form>;
//             default:
//                 return null;
//         }
//     }

//     handleChange(event) { this.setState({ selectedValue: event.target.value }); }

//     render() {
//         return (
//             <div>
//                 <Container >
//                     <Row>
//                         <Col>
//                             <Form
//                                 className="needs-validation"
//                                 onSubmit={this.submitHandler}
//                                 noValidate
//                             >
//                                 <h1>Prospectus</h1>
//                                 <Form.Row>
//                                     <Col >
//                                         <Form.Group controlId="formBasicEmail">
//                                             <Form.Label>Prospect Date </Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 value={this.state.prospectDate}
//                                                 onChange={this.changeHandler}
//                                                 name="prospectDate"
//                                                 id="defaultFormRegisterPasswordEx4"
//                                                 placeholder="Prospect Date"
//                                                 required
//                                             />
//                                             <div className="invalid-feedback">
//                                                 Enter Prospect Date!
//                                             </div>
//                                         </Form.Group>

//                                     </Col>
//                                     <Col >
//                                         <Form.Group controlId="formBasicEmail">
//                                             <Form.Label>Prospect Ref </Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 value={this.state.prospectRef}
//                                                 onChange={this.changeHandler}
//                                                 name="prospectRef"
//                                                 id="defaultFormRegisterPasswordEx4"
//                                                 required
//                                                 placeholder="Prospect Ref"
//                                             />
//                                             <div className="invalid-feedback">
//                                                 Prospect Ref!
//                                             </div>
//                                         </Form.Group>
//                                     </Col>
//                                     <Col >
//                                         <Form.Group controlId="exampleForm.ControlSelect1">
//                                             <Form.Label>Client</Form.Label>
//                                             <Form.Control
//                                                 as="select"
//                                                 value={this.state.client}
//                                                 onChange={this.changeHandler}
//                                                 name="client"
//                                                 id="defaultFormRegisterPasswordEx4"
//                                                 placeholder="Client"
//                                                 required
//                                             >
//                                             <div className="invalid-feedback">
//                                                 Choose a Client!
//                                             </div>
//                                                 <option value="" selected="selected">--Select One--</option>
//                                                 <option value="form_name1">Tusime Godwin</option>
//                                                 <option value="form_name1">Muhamadi Joseph</option>
//                                             </Form.Control>
//                                         </Form.Group>
//                                     </Col>
//                                 </Form.Row>

//                                 {this.renderSelectedForm(this.state.selectedValue)}
//                                 {this.state.inputs.map(node =>

//                                     <Form.Row >
//                                         <Col>
//                                             <Form.Group controlId="formBasicEmail">
//                                                 <Form.Label>Unit Rate </Form.Label>
//                                                 <Form.Control
//                                                     type="text"
//                                                     value={this.state.unitRate}
//                                                     onChange={this.changeHandler}
//                                                     name="unitRate"
//                                                     id="defaultFormRegisterPasswordEx4"
//                                                     className="form-control"
//                                                     placeholder="Total"
//                                                     required
//                                                     placeholder="Unit Rate"
//                                                 />
//                                                 <div className="invalid-feedback">
//                                                     Quantity is Required!
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>

//                                         <Col >
//                                             <Form.Group controlId="formBasicEmail">
//                                                 <Form.Label>Quantity </Form.Label>
//                                                 <Form.Control
//                                                     type="text"
//                                                     value={this.state.quantity}
//                                                     onChange={this.changeHandler}
//                                                     name="quantity"
//                                                     id="defaultFormRegisterPasswordEx4"
//                                                     className="form-control"
//                                                     placeholder="Total"
//                                                     required
//                                                     placeholder="Quantity"
//                                                 />
//                                                 <div className="invalid-feedback">
//                                                     Quantity is Required!
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>
//                                         <Col >
//                                             <Form.Group controlId="formBasicEmail">
//                                                 <Form.Label>Total</Form.Label>
//                                                 <Form.Control
//                                                 type="text"
//                                                 value={this.state.total}
//                                                 onChange={this.changeHandler}
//                                                 name="total"
//                                                 id="defaultFormRegisterPasswordEx4"
//                                                 className="form-control"
//                                                 placeholder="Total"
//                                                 required
//                                                 placeholder="Total"
//                                                 required
//                                                 />
//                                                 <div className="invalid-feedback">
//                                                     Total must be filled!
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>
//                                     </Form.Row>

//                                 )}
//                                 <div>
//                                     <Button id="add-button" onClick={this.addInput}>Add More</Button> <br></br><br></br>

//                                 </div>
//                                 <Button id="add-button" type="submit">
//                                     Submit
//                             </Button><br></br>
//                             </Form><br></br>
//                         </Col>

//                     </Row>
//                 </Container>

//             </div>
//         )
//     }
// };
// export default Prospectus;
