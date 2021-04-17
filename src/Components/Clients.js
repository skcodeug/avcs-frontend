import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
// class Clients extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }

//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }

//       handleSubmit(event) {
//         alert('Your favorite flavor is: ' + this.state.value);
//         event.preventDefault();
//       }
//     }
//     render (){
//         return(
//         <div>
//             <Container>
//                 <Row>
//                     <Col></Col>
//                     <Col xs={6}>
//                         <Card>
//                             <Card.Body>
//                                 <Form>
//                                     <Form.Group controlId="formBasicEmail">
//                                         <Form.Label>First Name</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter email" />
//                                     </Form.Group>

//                                     <Form.Group controlId="formBasicPassword">
//                                         <Form.Label>Other Names</Form.Label>
//                                         <Form.Control type="password" placeholder="Password" />
//                                     </Form.Group>
//                                     <Form.Group controlId="exampleForm.ControlSelect1">
//                                         <Form.Label>Category</Form.Label>
//                                         <Form.Control as="select" onChange={value => {
//                                             if (value === 0)
//                                                 <h1>welcome</h1>
//                                                 else
//                                                     <h1>Denied</h1>

//                                         }}>
//                                             <option >Choose a cetegory</option>
//                                             <option value="0">Individual</option>
//                                             <option value="1">Corprate</option>
//                                         </Form.Control>
//                                     </Form.Group>
//                                     <Button variant="primary" type="submit">
//                                         Submit
//                                         </Button>
//                                 </Form>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col></Col>
//                 </Row>
//             </Container>
//         </div>

//     )

// }
class Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    renderSelectedForm(param) {
        switch (param) {
            case 'form_name1':
                return <div name="form_name1" id="form_name1" >

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" required />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>
                            <option value="" selected="selected">--</option>
                            <option value="form_name1">Male</option>
                            <option value="form_name2">Female</option>
                        </Form.Control>
                    </Form.Group>
                        </Col>
                    </Form.Row>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control type="text" placeholder="Employer" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 1</Form.Label>
                        <Form.Control type="email" placeholder="Email 1" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 2</Form.Label>
                        <Form.Control type="email" placeholder="Email 2" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Physical Address</Form.Label>
                        <Form.Control type="Text" placeholder="Physical Address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control type="text" placeholder="Town/city" />
                    </Form.Group>


                </div>;
            case 'form_name2':
                return <div name="form_name1" id="form_name2" >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contact Persons</Form.Label>
                        <Form.Control type="text" required />
                        <br></br>
                        <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tel No 1</Form.Label>
                        <Form.Control type="text" placeholder="Tel No 1" />
                        <br></br>
                        <Form.Control type="text" placeholder="Tel No 1" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 1</Form.Label>
                        <Form.Control type="email" placeholder="Email 1" />
                        <br></br>
                        <Form.Control type="email" placeholder="Email 1" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address 2</Form.Label>
                        <Form.Control type="email" placeholder="Email 2" />
                        <br></br>
                        <Form.Control type="email" placeholder="Email 2" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Physical Address</Form.Label>
                        <Form.Control type="Text" placeholder="Physical Address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control type="text" placeholder="Town/city" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>How did you get to know about AVCS</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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
                                <Card>
                                    <Card.Body>
                                        <Form>
                                        <h1>Clients</h1>
                                            <Form.Row>
                                                <Col xs={12}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter email" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Other Names</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col xs={12}>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Category</Form.Label>
                                                        <Form.Control as="select" value={this.state.selectedValue} onChange={this.handleChange}>
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


                                            <Button variant="primary" type="submit">
                                                Submit
                                        </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
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