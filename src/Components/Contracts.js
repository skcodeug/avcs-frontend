import React, {useState} from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

function Contracts() {
    const [ form, setForm ] = useState({});
    const [errors, setErrors] = useState({});
    
    const setField = (field, value) => {
        setForm({
        ...form,
        [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })
    }

    const findFormErrors = () => {
        const { contractDate, contractRef, quotationNo, client, descriptionofService, projectedStartDate, projectedStartEndDate } = form
        const newErrors = {}
        
        // contractDate errors
        if ( !contractDate || contractDate === '' ) newErrors.contractDate = 'Enter Contract Date!'
        
        // contractRef errors
        if ( !contractRef || contractRef === '' ) newErrors.contractRef = 'Enter Contract Ref!'
        
        // quotationNo errors
        if ( !quotationNo || quotationNo === '' ) newErrors.quotationNo = 'Quotation Number Needed!'
        
        // client errors
        if ( !client || client === '' ) newErrors.client = 'client can not be empty!'
        
        // descriptionofService errors
        if ( !descriptionofService || descriptionofService === '' ) newErrors.descriptionofService = 'client can not be empty!'
        
        // projectedStartDate errors
        if ( !projectedStartDate || projectedStartDate === '' ) newErrors.projectedStartDate = 'Projected Start Date is Required!'
        
        // projectedStartEndDate errors
        if ( !projectedStartEndDate || projectedStartEndDate === '' ) newErrors.projectedStartEndDate = 'Projected End Date is Required!'
        
        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        setErrors(newErrors)
        } else {
        // No errors! Put any logic here for the form submission!
        alert('Thank you for your submission!')
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={12}>
                        <Form id="form-prospectus" onSubmit={handleSubmit}>
                        <h1>Contracts</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Contract Date </Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            onChange={ e => setField('contractDate', e.target.value) } 
                                            isInvalid={!!errors.contractDate}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.contractDate }
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Contract Ref </Form.Label>
                                        <Form.Control 
                                            placeholder="Contract Ref" 
                                            type="text" 
                                            onChange={ e => setField('contractRef', e.target.value) } 
                                            isInvalid={!!errors.contractRef}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.contractRef }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Quotation No</Form.Label>
                                            <Form.Control 
                                                as="select" 
                                                onChange={ e => setField('quotationNo', e.target.value) } 
                                                isInvalid={!!errors.quotationNo} 
                                            >
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.quotationNo }
                                        </Form.Control.Feedback>
                                                <option value="" selected="selected">Can Depend on Client</option>
                                                <option value="form_name1">23783783</option>
                                                <option value="form_name1">4647448</option>
                                            </Form.Control>
                                        </Form.Group>

                                </Col>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Client</Form.Label>
                                            <Form.Control 
                                                as="select"  
                                                onChange={ e => setField('client', e.target.value) } 
                                                isInvalid={!!errors.client} 
                                            >
                                            <Form.Control.Feedback type='invalid'>
                                                { errors.client }
                                            </Form.Control.Feedback>
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
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            onChange={ e => setField('descriptionofService', e.target.value) } 
                                            isInvalid={!!errors.descriptionofService} 
                                        />
                                            <Form.Control.Feedback type='invalid'>
                                                { errors.descriptionofService }
                                            </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Projected Start Date</Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            onChange={ e => setField('projectedStartDate', e.target.value) } 
                                            isInvalid={!!errors.projectedStartDate} 
                                        />
                                            <Form.Control.Feedback type='invalid'>
                                                { errors.projectedStartDate }
                                            </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Projected End Date</Form.Label>
                                        <Form.Control 
                                            type="date"  
                                            onChange={ e => setField('projectedStartEndDate', e.target.value) } 
                                            isInvalid={!!errors.projectedStartEndDate} 
                                        />
                                            <Form.Control.Feedback type='invalid'>
                                                { errors.projectedStartEndDate }
                                            </Form.Control.Feedback>
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