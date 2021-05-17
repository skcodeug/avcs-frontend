import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";

class Operators extends React.Component {
    state = {
        clientId: "",
        contractReferenceId: "",
        consultantId: "",
        commission: "",
        withHoldingTax: "",
        projectStatusId: "",
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        axios
            .post("https://avcs-platform.herokuapp.com/operators", this.state)
            .then(() =>
                this.setState(() => ({
                    clientId: "",
                    contractReferenceId: "",
                    consultantId: "",
                    commission: "",
                    withHoldingTax: "",
                    projectStatusId: "",
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
                            <h1>Operations</h1>
                            <Form.Row>
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
export default Operators;






// import React, {useState} from 'react';
// import '../App.css';
// import { Form, Container, Row, Col, Button } from 'react-bootstrap';
// import axios from 'axios'


// function Operations() {
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
//         const { client, contractRef, startDate, endDate, contractValue, consultantAssigned, amountDue, wht, projectStatus } = form
//         const newErrors = {}
        
//         // client errors
//         if ( !client || client === '' ) newErrors.client = 'Client required!'
//         else if (client.length > 30) newErrors.client = 'client Name is too long!'
        
//         // contractRef errors
//         if ( !contractRef || contractRef === '' ) newErrors.contractRef = 'Contract Ref required!'
        
//         // startDate errors
//         if ( !startDate || startDate === '' ) newErrors.startDate = 'Choose Start Date!'
        
//         // endDate errors
//         if ( !endDate || endDate === '' ) newErrors.endDate = 'Choose Ebd Date!'
        
//         // contractValue errors
//         if ( !contractValue || contractValue === '' ) newErrors.contractValue = 'Enter contract Value!'
        
//         // consultantAssigned errors
//         if ( !consultantAssigned || consultantAssigned === '' ) newErrors.consultantAssigned = 'Consultant required!'
        
//         // amountDue errors
//         if ( !amountDue || amountDue === '' ) newErrors.amountDue = 'amount Due missing!'
        
//         // wht errors
//         if ( !wht || wht === '' ) newErrors.wht = 'wht can not be empty!'
        
//         // projectStatus errors
//         if ( !projectStatus || projectStatus === '' ) newErrors.projectStatus = 'Project Status Required!'
        
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
//         console.log(form)
//         axios.post("https://avcs-platform.herokuapp.com/invoices", form)
//         .then((res) => console.log("Success" + res))
//         .catch((err) => console.log(err))

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
//                         <h1>Operations</h1>
//                             <Form.Row>
//                                 <Col>
//                                 <Form.Group controlId="exampleForm.ControlSelect1">
//                                             <Form.Label>Client</Form.Label>
//                                             <Form.Control 
//                                                 type="text" 
//                                                 onChange={ e => setField('client', e.target.value) } 
//                                                 isInvalid={!!errors.client}
//                                                 as="select"  
//                                             >
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.client }
//                                         </Form.Control.Feedback>
//                                                 <option value="" selected="selected">--Choose--</option>
//                                                 <option value="form_name1">Kasirye Stephen</option>
//                                                 <option value="form_name1">Tusime Godwin</option>
//                                             </Form.Control>
//                                         </Form.Group>

//                                 </Col>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Contract Ref </Form.Label>
//                                         <Form.Control 
//                                                 type="text" 
//                                                 onChange={ e => setField('contractRef', e.target.value) } 
//                                                 isInvalid={!!errors.contractRef}
//                                                 placeholder="Depends on Client Selected" 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.contractRef }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                             </Form.Row><br></br>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Start Date</Form.Label>
//                                         <Form.Control 
//                                             type="date"  
//                                             onChange={ e => setField('startDate', e.target.value) } 
//                                             isInvalid={!!errors.startDate}
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.startDate }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>

//                                 </Col>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>End Date </Form.Label>
//                                         <Form.Control 
//                                             type="date" 
//                                             onChange={ e => setField('endDate', e.target.value) } 
//                                             isInvalid={!!errors.endDate} 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.endDate }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                             </Form.Row><br></br>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="exampleForm.ControlTextarea1">
//                                         <Form.Label>Contract Value</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             placeholder="Depends on Client Selected" 
//                                             onChange={ e => setField('contractValue', e.target.value) } 
//                                             isInvalid={!!errors.contractValue} 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.contractValue }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Consultant Assigned</Form.Label>
//                                         <Form.Control
//                                             type="tet"
//                                             placeholder="Consultant Assigned " 
//                                             onChange={ e => setField('consultantAssigned', e.target.value) } 
//                                             isInvalid={!!errors.consultantAssigned} 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.consultantAssigned }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                             </Form.Row>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Amount Due</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             placeholder="10,000,0000" 
//                                             onChange={ e => setField('amountDue', e.target.value) } 
//                                             isInvalid={!!errors.amountDue} 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.amountDue }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                 <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>WHT</Form.Label>
//                                         <Form.Control 
//                                             type="text"
//                                             placeholder="WHT" 
//                                             onChange={ e => setField('wht', e.target.value) } 
//                                             isInvalid={!!errors.wht} 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.wht }
//                                         </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Col>
//                             </Form.Row>
//                             <Form.Row>
//                                 <Col>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>Project Status</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             placeholder="Project status" 
//                                             onChange={ e => setField('projectStatus', e.target.value) } 
//                                             isInvalid={!!errors.projectStatus} 
//                                         />
//                                         <Form.Control.Feedback type='invalid'>
//                                             { errors.projectStatus }
//                                         </Form.Control.Feedback>
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
// export default Operations;