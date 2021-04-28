import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

     state = {
        dateOfBirth:'',
        gender:'',
        employer:'',
        emailAddress1:'',
        physicalAddress:'',
        townCity:'',
        ccontactPerson:'',
        cphone1:'',
        cemail1:'',
        cphysicalAddress:'',
        cTownCity:'',
        knowAboutAVCS:'',
        firstName:'',
        otherNames:''
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


    renderSelectedForm(param) {
        switch (param) {
            case 'form_name1':
                return <div name="form_name1" id="form_name1" >

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={this.state.dateOfBirth}
                            onChange={this.changeHandler}
                            name="dateOfBirth"
                            id="defaultFormRegisterPasswordEx4"
                            placeholder="Date Of Birth" 
                            required 
                        />
                            <div className="invalid-feedback">
                                Enter Date Of Birth!
                            </div>
                    </Form.Group>
                    <Form.Row>
                        <Col>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control 
                            as="select" 
                            value={this.state.gender}
                            onChange={this.changeHandler}
                            name="gender"
                            placeholder="Gender" 
                            required 
                        >
                            <div className="invalid-feedback">
                                Enter Prospect Date!
                            </div>
                            <option value="" selected="selected">--</option>
                            <option value="form_name1">Male</option>
                            <option value="form_name2">Female</option>
                        </Form.Control>
                    </Form.Group>
                        </Col>
                    </Form.Row>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.employer}
                            onChange={this.changeHandler}
                            name="employer"
                            id="defaultFormRegisterPasswordEx4"
                            required 
                            placeholder="Employer" 
                        />
                            <div className="invalid-feedback">
                                Employer is Required!
                            </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 1</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={this.state.emailAddress1}
                            onChange={this.changeHandler}
                            name="emailAddress1"
                            id="defaultFormRegisterPasswordEx4"
                            required 
                            placeholder="Email 1" 
                        />
                            <div className="invalid-feedback">
                                Enter Valid Email!
                            </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 2</Form.Label>
                        <Form.Control
                            type="email" 
                            placeholder="Email 2" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Physical Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.physicalAddress}
                            onChange={this.changeHandler}
                            name="physicalAddress"
                            required 
                            placeholder="Physical Address" 
                        />
                            <div className="invalid-feedback">
                                Provide your physical address!
                            </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.townCity}
                            onChange={this.changeHandler}
                            name="townCity"
                            id="defaultFormRegisterPasswordEx4"
                            required 
                            placeholder="Town/city" 
                        />
                            <div className="invalid-feedback">
                                Provide your Town or City!
                            </div>
                    </Form.Group>


                </div>;
            case 'form_name2':
                return <div name="form_name1" id="form_name2" >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contact Persons</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.ccontactPerson}
                            onChange={this.changeHandler}
                            name="ccontactPerson"
                            id="defaultFormRegisterPasswordEx4"
                            placeholder="Contact Person" 
                            required 
                        />
                            <div className="invalid-feedback">
                                Who is your Contact Person!
                            </div>
                        <br></br>
                        <Form.Control
                                placeholder="2nd Contact Person" 
                                type="text" 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tel No 1</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.cphone1}
                            onChange={this.changeHandler}
                            name="cphone1"
                            required 
                            placeholder="Tel No 1" 
                        />
                            <div className="invalid-feedback">
                                Enter your primary phone number!
                            </div>
                        <br></br>
                        <Form.Control 
                            type="text" 
                            placeholder="Tel No 2" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 1</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Email 1"
                            value={this.state.cemail1}
                            onChange={this.changeHandler}
                            name="cemail1"
                            />
                            <div className="invalid-feedback">
                                Enter a valid email address!
                            </div>
                            <br></br>
                            <Form.Control 
                                type="email" 
                                placeholder="Email 2" 
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 2</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Email 2" 
                        />
                        <br></br>
                        <Form.Control 
                            type="email" 
                            placeholder="Email 2" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Physical Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.cphysicalAddress}
                            onChange={this.changeHandler}
                            name="cphysicalAddress"
                            required 
                            placeholder="Physical Address"  
                        />
                            <div className="invalid-feedback">
                                Enter Physical Address!
                            </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.cTownCity}
                            onChange={this.changeHandler}
                            name="cTownCity"
                            required 
                            placeholder="Town/City"  
                        />
                            <div className="invalid-feedback">
                                Enter Prospect Date!
                            </div>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>How did you get to know about AVCS</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            value={this.state.knowAboutAVCS}
                            onChange={this.changeHandler}
                            name="knowAboutAVCS"
                            required 
                        />
                            <div className="invalid-feedback">
                                Required!
                            </div>
                    </Form.Group>


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
                <div >
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={12}>
                                {/* <Card> */}
                                    <Card.Body>
                                    <Form 
                                        className="needs-validation"
                                        onSubmit={this.submitHandler}
                                        noValidate
                                    >
                                        <h1>Clients</h1>
                                            <Form.Row>
                                                <Col xs={12}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control 
                                                        type="text"
                                                        value={this.state.firstName}
                                                        onChange={this.changeHandler}
                                                        name="firstName"
                                                        required 
                                                        placeholder="First Name" 
                                                        />
                                                        <div className="invalid-feedback">
                                                            Required!
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Other Names</Form.Label>
                                                        <Form.Control 
                                                            type="text"
                                                            value={this.state.otherName}
                                                            onChange={this.changeHandler}
                                                            name="otherName"
                                                            required 
                                                            placeholder="Other Names"
                                                        />
                                                        <div className="invalid-feedback">
                                                            Required!
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col xs={12}>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Category</Form.Label>
                                                        <Form.Control 
                                                            as="select"
                                                            value={this.state.selectedValue}
                                                            onChange={this.handleChange}
                                                        >
                                                            <option value="" selected="selected">--Select One--</option>
                                                            <option value="form_name1">Individual</option>
                                                            <option value="form_name2">Corporate</option>
                                                        </Form.Control>
                                                     
                                                        
                                                    </Form.Group>
                                                    
                                                </Col>
                                              <Col>
                                              {this.renderSelectedForm(this.state.selectedValue)}
                                              </Col>
                                               
                                            </Form.Row>


                                            <Button id="add-button" type="submit">
                                                Submit
                                        </Button>
                                        </Form>
                                    </Card.Body>
                                {/* </Card> */}
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
export default Clients;