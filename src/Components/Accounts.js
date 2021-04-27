import React, {useState} from 'react';
import '../App.css';
import { Form, Container, Row, Col, Button, Accordion, Card, } from 'react-bootstrap';


function Accounts() {
    const [ form, setForm ] = useState({});
    const [errors, setErrors] = useState({});
    
    const setField = (field, value) => {
        setForm({
        ...form,
        [field]: value
        })
    }

    const findFormErrors = () => {
        const { recieptNo, receiptDate, cleint, amountPaid, amountInWords, amountOutstanding, invoiceNo, invoiceDate, description, rate, quantity, total, paymentDate, paymentRef, paymentTo, paymentFor, requisitionDate, requisitionRef, item, amount, requisitionOwner, approval } = form
        const newErrors = {}
        
        // recieptNo errors
        if ( !recieptNo || recieptNo === '' ) newErrors.recieptNo = 'cannot be blank!'
        else if ( recieptNo.length > 30 ) newErrors.recieptNo = 'Reciept Number is too long!'
        
        // receiptDate errors
        if ( !receiptDate || receiptDate === '' ) newErrors.receiptDate = 'select a date!'
        
        // cleint errors
        if ( !cleint || cleint === '' ) newErrors.cleint = 'Enter Client Name!'
        
        // amountPaid errors
        if ( !amountPaid || amountPaid === '' ) newErrors.amountPaid = 'Enter amount paid!'
        
        // amountInWords errors
        if ( !amountInWords || amountInWords === '' ) newErrors.amountInWords = 'Enter amount paid in words!'
        
        // amountOutstanding errors
        if ( !amountOutstanding || amountOutstanding === '' ) newErrors.amountOutstanding = 'Enter the remaining amount!'
        
        // invoiceNo errors
        if ( !invoiceNo || invoiceNo === '' ) newErrors.invoiceNo = 'Enter invoice number!'
        
        // invoiceDate errors
        if ( !invoiceDate || invoiceDate === '' ) newErrors.invoiceDate = 'Choose invoice date!'
        
        // description errors
        if ( !description || description === '' ) newErrors.description = 'Add a description!'
        
        // rating errors
        if (!rate || rate > 5 || rate < 1) newErrors.rate = 'must assign a rating between 1 and 5!'
        
        // quantity errors
        if ( !quantity || quantity === '' ) newErrors.quantity = 'Add quatity!'
        
        // total errors
        if ( !total || total === '' ) newErrors.total = 'Total missing!'
        
        // paymentDate errors
        if ( !paymentDate || paymentDate === '' ) newErrors.paymentDate = 'Payment Date is missing!'
        
        // paymentRef errors
        if ( !paymentRef || paymentRef === '' ) newErrors.paymentRef = 'Payment Reference missing!'
        
        // paymentTo errors
        if ( !paymentTo || paymentTo === '' ) newErrors.paymentTo = 'Payment To!'
        
        // paymentTo errors
        if ( !paymentTo || paymentTo === '' ) newErrors.paymentTo = 'Payment To!'
        
        // paymentFor errors
        if ( !paymentFor || paymentFor === '' ) newErrors.paymentFor = 'Payment for!'
        
        // requisitionDate errors
        if ( !requisitionDate || requisitionDate === '' ) newErrors.requisitionDate = 'select requisition date!'
        
        // requisitionRef errors
        if ( !requisitionRef || requisitionRef === '' ) newErrors.requisitionRef = 'Requisition Reference missing!'
        
        // item errors
        if ( !item || item === '' ) newErrors.item = 'Enter item name!'
        
        // amount errors
        if ( !amount || amount === '' ) newErrors.amount = 'Enter amount!'
        
        // requisitionOwner errors
        if ( !requisitionOwner || requisitionOwner === '' ) newErrors.requisitionOwner = 'Requisition Owner missing!'
        
        // approval errors
        if ( !approval || approval === '' ) newErrors.approval = 'Enter you name to approve!'
        
        // // comment errors
        // if ( !comment || comment === '' ) newErrors.comment = 'cannot be blank!'
        // else if ( comment.length > 100 ) newErrors.comment = 'comment is too long!'

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
                                                        <Form.Control 
                                                            type="text" 
                                                            placeholder="Reciept No" o
                                                            nChange={e => setField('recieptNo', e.target.value)}
                                                            isInvalid={ !!errors.recieptNo }
                                                            required
                                                        />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Receipt Date</Form.Label>
                                                        <Form.Control type="date" onChange={ e => setField('receiptDate', e.target.value) } />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Cleint</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('cleint', e.target.value) } placeholder="Client" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Paid </Form.Label>
                                                        <Form.Control type='number' onChange={ e => setField('amountPaid', e.target.value) } placeholder="Amount paid" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Amount in words</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('amountInWords', e.target.value) } placeholder="Amount in words" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Outstanding</Form.Label>
                                                        <Form.Control type='number' onChange={ e => setField('amountOutstanding', e.target.value) } placeholder="Amount Outstanding " />
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
                                                        <Form.Control type='number' onChange={ e => setField('invoiceNo', e.target.value) } placeholder="Invoice Date" required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Invoice Date </Form.Label>
                                                        <Form.Control type="date" onChange={ e => setField('invoiceDate', e.target.value) } />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Client</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('client', e.target.value) } placeholder="Client" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Description </Form.Label>
                                                        <Form.Control onChange={ e => setField('description', e.target.value) } as="textarea" rows={3} />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Rate</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('rate', e.target.value) } placeholder="Rate" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Quantity</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('quantity', e.target.value) } placeholder="Quantity " />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Total</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('total', e.target.value) } placeholder="Total" />
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
                                                        <Form.Control type="date" onChange={ e => setField('paymentDate', e.target.value) } required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment Ref </Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('paymentRef', e.target.value) } placeholder="Payment Ref" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment To</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('paymentTo', e.target.value) } placeholder="Payment To" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment For </Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('paymentFor', e.target.value) } placeholder="Payment For" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Amount Paid</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('amountPaid', e.target.value) } placeholder="Amount Paid" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Outstanding</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('amountOutstanding', e.target.value) } placeholder="Amount Outstanding " />
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
                                                        <Form.Control type="date" onChange={ e => setField('requisitionDate', e.target.value) } required />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Requisition Ref </Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('requisitionRef', e.target.value) } placeholder="Requisition Ref" />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Item</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('item', e.target.value) } placeholder="Item" />
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('amount', e.target.value) } placeholder='Amount' />
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Who is making the Requisition</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('requisitionOwner', e.target.value) } placeholder="Who is making the Requisition" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Who is making approving</Form.Label>
                                                        <Form.Control type='text' onChange={ e => setField('approval', e.target.value) } placeholder="Who is making approving " />
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