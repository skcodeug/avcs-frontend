import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Contracts extends React.Component {
    state = {
        date: "",
        reference: "",
        quotationReferenceId: "",
        clientId: "",
        startDate: "",
        endDate: "",
        value: 0,
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        axios
            .post("https://avcs-platform.herokuapp.com/contracts", this.state)
            .then(() =>
                this.setState(() => ({
                    date: "",
                    reference: "",
                    quotationReferenceId: "",
                    clientId: "",
                    startDate: "",
                    endDate: "",
                    value: 0,
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
                            <h1>Contracts</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date</Form.Label>
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
                                            Enter Contract Date!
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
                                        <Form.Label>Quotation Ref</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                this.state.quotationReferenceId
                                            }
                                            onChange={this.changeHandler}
                                            name="quotationsReferenceId"
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
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={this.state.startDate}
                                            onChange={this.changeHandler}
                                            name="startDate"
                                            id="defaultFormRegisterPasswordEx4"
                                            placeholder="Date"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Start Date!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>End date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={this.state.endDate}
                                            onChange={this.changeHandler}
                                            name="date"
                                            id="defaultFormRegisterPasswordEx5"
                                            placeholder="Date"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter End Date!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Value</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={this.state.value}
                                            onChange={this.changeHandler}
                                            name="value"
                                            id="defaultFormRegisterPasswordEx6"
                                            placeholder="Value"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Value!
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
export default Contracts;

// import React, {useState} from 'react';
// import '../App.css';
// import { Form, Container, Row, Col, Button } from 'react-bootstrap';

// function Contracts() {
//     const [ form, setForm ] = useState({});
//     const [errors, setErrors] = useState({});

//     const setField = (field, value) => {
//         setForm({
//         ...form,
//         [field]: value
//         })
//         // Check and see if errors exist, and remove them from the error object:
//         if ( !!errors[field] ) setErrors({
//             ...errors,
//             [field]: null
//         })
//     }

//     const findFormErrors = () => {
//         const { contractDate, contractRef, quotationNo, client, descriptionofService, projectedStartDate, projectedStartEndDate } = form
//         const newErrors = {}

//         // contractDate errors
//         if ( !contractDate || contractDate === '' ) newErrors.contractDate = 'Enter Contract Date!'

//         // contractRef errors
//         if ( !contractRef || contractRef === '' ) newErrors.contractRef = 'Enter Contract Ref!'

//         // quotationNo errors
//         if ( !quotationNo || quotationNo === '' ) newErrors.quotationNo = 'Quotation Number Needed!'

//         // client errors
//         if ( !client || client === '' ) newErrors.client = 'client can not be empty!'

//         // descriptionofService errors
//         if ( !descriptionofService || descriptionofService === '' ) newErrors.descriptionofService = 'client can not be empty!'

//         // projectedStartDate errors
//         if ( !projectedStartDate || projectedStartDate === '' ) newErrors.projectedStartDate = 'Projected Start Date is Required!'

//         // projectedStartEndDate errors
//         if ( !projectedStartEndDate || projectedStartEndDate === '' ) newErrors.projectedStartEndDate = 'Projected End Date is Required!'

//         return newErrors
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         // get our new errors
//         const newErrors = findFormErrors()
//         // Conditional logic:
//         if ( Object.keys(newErrors).length > 0 ) {
//         // We got errors!
//         setErrors(newErrors)
//         } else {
//         // No errors! Put any logic here for the form submission!
//         alert('Thank you for your submission!')
//         }
//     }

//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Col>
//                     </Col>
//                     <Col sm={12}>
//                         <Form id="form-prospectus" onSubmit={handleSubmit}>
//                         <h1>Contracts</h1>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Contract Date </Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             onChange={ e => setField('contractDate', e.target.value) }
//                                             isInvalid={!!errors.contractDate}
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.contractDate }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>

//                                 </Col>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Contract Ref </Form.Label>
//                                         <Form.Control
//                                             placeholder="Contract Ref"
//                                             type="text"
//                                             onChange={ e => setField('contractRef', e.target.value) }
//                                             isInvalid={!!errors.contractRef}
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.contractRef }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                             </Form.Row><br></br>
//                             <Form.Row>
//                                 <Col>
//                                 <Form.Group controlId="exampleForm.ControlSelect1">
//                                             <Form.Label>Quotation No</Form.Label>
//                                             <Form.Control
//                                                 as="select"
//                                                 onChange={ e => setField('quotationNo', e.target.value) }
//                                                 isInvalid={!!errors.quotationNo}
//                                             >
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.quotationNo }
//                                         </Form.Control.Feedback>
//                                                 <option value="" selected="selected">Can Depend on Client</option>
//                                                 <option value="form_name1">23783783</option>
//                                                 <option value="form_name1">4647448</option>
//                                             </Form.Control>
//                                         </Form.Group>

//                                 </Col>
//                                 <Col>
//                                 <Form.Group controlId="exampleForm.ControlSelect1">
//                                             <Form.Label>Client</Form.Label>
//                                             <Form.Control
//                                                 as="select"
//                                                 onChange={ e => setField('client', e.target.value) }
//                                                 isInvalid={!!errors.client}
//                                             >
//                                             <Form.Control.Feedback type='invalid'>
//                                                 { errors.client }
//                                             </Form.Control.Feedback>
//                                                 <option value="" selected="selected">Can Depend on Quotation</option>
//                                                 <option value="form_name1">Kasirye Stephen</option>
//                                                 <option value="form_name1">Tusime Godwin</option>
//                                             </Form.Control>
//                                         </Form.Group>
//                                 </Col>
//                             </Form.Row><br></br>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="exampleForm.ControlTextarea1">
//                                         <Form.Label>Description of Service</Form.Label>
//                                         <Form.Control
//                                             as="textarea"
//                                             rows={3}
//                                             onChange={ e => setField('descriptionofService', e.target.value) }
//                                             isInvalid={!!errors.descriptionofService}
//                                         />
//                                             <Form.Control.Feedback type='invalid'>
//                                                 { errors.descriptionofService }
//                                             </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Projected Start Date</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             onChange={ e => setField('projectedStartDate', e.target.value) }
//                                             isInvalid={!!errors.projectedStartDate}
//                                         />
//                                             <Form.Control.Feedback type='invalid'>
//                                                 { errors.projectedStartDate }
//                                             </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                             </Form.Row>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Projected End Date</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             onChange={ e => setField('projectedStartEndDate', e.target.value) }
//                                             isInvalid={!!errors.projectedStartEndDate}
//                                         />
//                                             <Form.Control.Feedback type='invalid'>
//                                                 { errors.projectedStartEndDate }
//                                             </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>

//                                 </Col>
//                             </Form.Row>
//                             <Button id="add-button" type="submit">
//                                 Submit
//                             </Button><br></br>
//                         </Form><br></br>
//                     </Col>
//                     <Col>
//                     </Col>
//                 </Row>
//             </Container>

//         </div>
//     )
// };
// export default Contracts;
