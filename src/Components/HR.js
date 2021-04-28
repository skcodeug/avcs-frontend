import React, {useState} from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


function Hr() {
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
        const { fullName, dob, maritalStatus, recruitmentDate, nin, staffId, position, consultancyRate, photo, cv, transcript } = form
        const newErrors = {}
        
        // fullName errors
        if ( !fullName || fullName === '' ) newErrors.fullName = 'Full name required!'
        else if (fullName.length > 30) newErrors.fullName = 'Name is too long!'

        // dob errors
        if ( !dob || dob === '' ) newErrors.dob = 'Date of Birth required!'
        
        // maritalStatus errors
        if ( !maritalStatus || maritalStatus === '' ) newErrors.maritalStatus = 'Choose your maarital status!'
        
        // recruitmentDate errors
        if ( !recruitmentDate || recruitmentDate === '' ) newErrors.recruitmentDate = 'Choose a recruitment date!'
        
        // nin errors
        if ( !nin || nin === '' ) newErrors.nin = 'NIN is required!'
        
        // staffId errors
        if ( !staffId || staffId === '' ) newErrors.staffId = 'Enter staff ID!'
        
        // position errors
        if ( !position || position === '' ) newErrors.position = 'Enter employee position!'
        
        // consultancyRate errors
        if ( !consultancyRate || consultancyRate === '' ) newErrors.consultancyRate = 'Enter your Rate!'
        
        // photo errors
        if ( !photo || photo === '' ) newErrors.photo = 'Chose a photo!'
        
        // cv errors
        if ( !cv || cv === '' ) newErrors.cv = 'Attach CV!'
        
        // transcript errors
        if ( !transcript || transcript === '' ) newErrors.transcript = 'Attach Academic Triscript!'
        
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
                            <h1>Human Resource</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Full Names</Form.Label>
                                        <Form.Control
                                            type="text" 
                                            onChange={ e => setField('fullName', e.target.value) }
                                            placeholder="Full Names" 
                                            isInvalid={!!errors.fullName}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.fullName }
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date Of Birth </Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            onChange={ e => setField('dob', e.target.value) }
                                            type="date" 
                                            isInvalid={!!errors.dob}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.dob }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Marital Status</Form.Label>
                                        <Form.Control 
                                            onChange={ e => setField('maritalStatus', e.target.value) }
                                            as="select" 
                                            isInvalid={!!errors.maritalStatus}
                                        >
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.maritalStatus }
                                        </Form.Control.Feedback>
                                            <option value="" selected="selected">--Select One--</option>
                                            <option value="form_name1">Male</option>
                                            <option value="form_name2">Female</option>
                                        </Form.Control>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Recruitment Date </Form.Label>
                                        <Form.Control 
                                            type="date"
                                            onChange={ e => setField('recruitmentDate', e.target.value) }
                                            isInvalid={!!errors.recruitmentDate}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.recruitmentDate }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Form.Row><br></br>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>NIN</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            onChange={ e => setField('nin', e.target.value) }
                                            placeholder="Nin" 
                                            isInvalid={!!errors.nin}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.nin }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Staff Id</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={ e => setField('staffId', e.target.value) }
                                            placeholder="Staff id " 
                                            isInvalid={!!errors.staffId}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.staffId }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control 
                                            as="select" 
                                            onChange={ e => setField('position', e.target.value) }
                                            isInvalid={!!errors.position}
                                        >
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.position }
                                        </Form.Control.Feedback>
                                            <option value="" selected="selected">--Select One--</option>
                                            <option value="form_name1">Staff</option>
                                            <option value="form_name2">Consultant</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Consultancy Rate</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={ e => setField('consultancyRate', e.target.value) }
                                            placeholder="Consultancy Rate" 
                                            isInvalid={!!errors.consultancyRate}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.consultancyRate }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.File 
                                            id="exampleFormControlFile1" 
                                            label="Attach Photo" 
                                            onChange={ e => setField('photo', e.target.value) }
                                            isInvalid={!!errors.photo}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.photo }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.File 
                                            id="exampleFormControlFile1" 
                                            label="Attach CV" 
                                            onChange={ e => setField('cv', e.target.value) }
                                            isInvalid={!!errors.cv}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.cv }
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Form.Group>
                                        <Form.File 
                                            id="exampleFormControlFile1" 
                                            label="Attach Academic Transcript" 
                                            onChange={ e => setField('transcript', e.target.value) }
                                            isInvalid={!!errors.transcript}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.transcript }
                                        </Form.Control.Feedback>
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