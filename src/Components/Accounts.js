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
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })
    }

    const findFormErrors = () => {
        const { recieptNo, receiptDate, client, amountPaid, amountInWords, amountOutstanding, paymentDate, paymentRef, paymentTo, paymentFor, requisitionDate, requisitionRef, item, amount, requisitionOwner, approval } = form
        const newErrors = {}
        
        // recieptNo errors
        if ( !recieptNo || recieptNo === '' ) newErrors.recieptNo = 'cannot be blank!'
        else if ( recieptNo.length > 30 ) newErrors.recieptNo = 'Reciept Number is too long!'
        
        // receiptDate errors
        if ( !receiptDate || receiptDate === '' ) newErrors.receiptDate = 'select a date!'
        
        // cleint errors
        if ( !client || client === '' ) newErrors.client = 'Enter Client Name!'
        
        // amountPaid errors
        if ( !amountPaid || amountPaid === '' ) newErrors.amountPaid = 'Enter amount paid!'
        
        // amountInWords errors
        if ( !amountInWords || amountInWords === '' ) newErrors.amountInWords = 'Enter amount paid in words!'
        
        // amountOutstanding errors
        if ( !amountOutstanding || amountOutstanding === '' ) newErrors.amountOutstanding = 'Enter the remaining amount!'
        
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


        return newErrors
    }
    const invoicesErrors = () => {
        const { invoiceNo, invoiceDate, iClient, description, rate, quantity, total } = form
        const newErrors = {}
        
        // invoiceNo errors
        if ( !invoiceNo || invoiceNo === '' ) newErrors.invoiceNo = 'Enter invoice number!'
        
        // invoiceDate errors
        if ( !invoiceDate || invoiceDate === '' ) newErrors.invoiceDate = 'Choose invoice date!'
        
        // iClient errors
        if ( !iClient || iClient === '' ) newErrors.iClient = 'Choose invoice date!'
        
        // description errors
        if ( !description || description === '' ) newErrors.description = 'Add a description!'
        
        // rating errors
        if (!rate || rate > 5 || rate < 1) newErrors.rate = 'must assign a rating between 1 and 5!'
        
        // quantity errors
        if ( !quantity || quantity === '' ) newErrors.quantity = 'Add quatity!'
        
        // total errors
        if ( !total || total === '' ) newErrors.total = 'Total missing!'


        return newErrors
    }
    const paymentErrors = () => {
        const { pAmountPaid, pAmountOutstanding, paymentDate, paymentRef, paymentTo, paymentFor } = form
        const newErrors = {}
        
        
        // amountPaid errors
        if ( !pAmountPaid || pAmountPaid === '' ) newErrors.pAmountPaid = 'Enter amount paid!'
        
        // amountOutstanding errors
        if ( !pAmountOutstanding || pAmountOutstanding === '' ) newErrors.pAmountOutstanding = 'Enter the remaining amount!'
        
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

        return newErrors
    }

    const requisitionErrors = () => {
        const { requisitionDate, requisitionRef, item, amount, requisitionOwner, approval } = form
        const newErrors = {}
        
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


        return newErrors
    }

    const handleSubmitReciept = e => {
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
    const handleSubmitInvoices = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = invoicesErrors()
        // Conditional logic:
        if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        setErrors(newErrors)
        } else {
        // No errors! Put any logic here for the form submission!
        alert('Thank you for your submission!')
        }
    }
    const handleSubmitPayments = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = paymentErrors()
        // Conditional logic:
        if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        setErrors(newErrors)
        } else {
        // No errors! Put any logic here for the form submission!
        alert('Thank you for your submission!')
        }
    }
    const handleSubmitRequisitions = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = requisitionErrors()
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
                                        <Form id="form-prospectus" onSubmit={handleSubmitReciept}>
                                            <h1>Reciepts</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Reciept No</Form.Label>
                                                        <Form.Control 
                                                            type="text" 
                                                            placeholder="Reciept No"
                                                            nChange={e => setField('recieptNo', e.target.value)}
                                                            isInvalid={ !!errors.recieptNo }
                                                            
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.recieptNo }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Receipt Date</Form.Label>
                                                        <Form.Control 
                                                            type="date" 
                                                            onChange={e => setField('receiptDate', e.target.value)}
                                                            isInvalid={!!errors.receiptDate}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.receiptDate }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Cleint</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('client', e.target.value) } 
                                                            placeholder="Client"
                                                            isInvalid={!!errors.client}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.client }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Paid </Form.Label>
                                                        <Form.Control 
                                                            type='number' 
                                                            onChange={ e => setField('amountPaid', e.target.value) } 
                                                            placeholder="Amount paid"
                                                            isInvalid={!!errors.amountPaid}
                                                         />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.amountPaid }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Amount in words</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('amountInWords', e.target.value) } 
                                                            placeholder="Amount in words" 
                                                            isInvalid={!!errors.amountInWords}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.amountInWords }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Outstanding</Form.Label>
                                                        <Form.Control 
                                                            type='number' 
                                                            onChange={ e => setField('amountOutstanding', e.target.value) } 
                                                            placeholder="Amount Outstanding " 
                                                            isInvalid={!!errors.amountInWords}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.amountInWords }
                                                        </Form.Control.Feedback>
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
                                        <Form id="form-prospectus" onSubmit={handleSubmitInvoices}>
                                            <h1>Invoices</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Invoice No</Form.Label>
                                                        <Form.Control 
                                                            type='number' 
                                                            onChange={ e => setField('invoiceNo', e.target.value) } 
                                                            placeholder="Invoice number"
                                                            isInvalid={!!errors.invoiceNo}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.invoiceNo }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Invoice Date </Form.Label>
                                                        <Form.Control 
                                                            type="date" 
                                                            onChange={ e => setField('invoiceDate', e.target.value) } 
                                                            isInvalid={!!errors.invoiceDate}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.invoiceDate }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Client</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('iClient', e.target.value) } 
                                                            placeholder="Client" 
                                                            isInvalid={!!errors.iClient}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.iClient }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Description </Form.Label>
                                                        <Form.Control 
                                                            onChange={ e => setField('description', e.target.value) } 
                                                            as="textarea"
                                                            rows={3}
                                                            isInvalid={!!errors.description}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.description }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Rate</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('rate', e.target.value) } 
                                                            placeholder="Rate" 
                                                            isInvalid={!!errors.rate}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.rate }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Quantity</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('quantity', e.target.value) } 
                                                            placeholder="Quantity"
                                                            isInvalid={!!errors.quantity}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.quantity }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Total</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('total', e.target.value) } 
                                                            placeholder="Total"
                                                            isInvalid={!!errors.total}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.total }
                                                        </Form.Control.Feedback>
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
                                        <Form id="form-prospectus" onSubmit={handleSubmitPayments}>
                                            <h1>Payments</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment Date</Form.Label>
                                                        <Form.Control 
                                                            type="date" 
                                                            onChange={ e => setField('paymentDate', e.target.value) } 
                                                            isInvalid={!!errors.paymentDate}                                                        
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.paymentDate }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment Ref </Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('paymentRef', e.target.value) } 
                                                            placeholder="Payment Ref"  
                                                            isInvalid={!!errors.paymentRef}                         
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.paymentRef }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment To</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('paymentTo', e.target.value) } 
                                                            placeholder="Payment To" 
                                                            isInvalid={!!errors.paymentTo} 
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.paymentTo }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Payment For </Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('paymentFor', e.target.value) } 
                                                            placeholder="Payment For"
                                                            isInvalid={!!errors.paymentFor}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.paymentFor }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                            </Form.Row><br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Amount Paid</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('pAmountPaid', e.target.value) } 
                                                            placeholder="Amount Paid" 
                                                            isInvalid={!!errors.pAmountPaid}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.pAmountPaid }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount Outstanding</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('pAmountOutstanding', e.target.value) } 
                                                            placeholder="Amount Outstanding " 
                                                            isInvalid={!!errors.pAmountOutstanding}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.pAmountOutstanding }
                                                        </Form.Control.Feedback>
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
                                        <Form id="form-prospectus" onSubmit={handleSubmitRequisitions}>
                                            <h1>Requisitions</h1>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Requisition Date</Form.Label>
                                                        <Form.Control 
                                                            type="date" 
                                                            onChange={ e => setField('requisitionDate', e.target.value) }  
                                                            isInvalid={!!errors.requisitionDate}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.requisitionDate }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Requisition Ref </Form.Label>
                                                        <Form.Control 
                                                            type='text'
                                                            onChange={ e => setField('requisitionRef', e.target.value) } 
                                                            placeholder="Requisition Ref" 
                                                            isInvalid={!!errors.requisitionRef}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.requisitionRef }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Item</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('item', e.target.value) } 
                                                            placeholder="Item" 
                                                            isInvalid={!!errors.item}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.item }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Amount</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('amount', e.target.value) } 
                                                            placeholder='Amount' 
                                                            isInvalid={!!errors.amount}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.amount }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Who is making the Requisition</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('requisitionOwner', e.target.value) } 
                                                            placeholder="Who is making the Requisition" 
                                                            isInvalid={!!errors.requisitionOwner}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.requisitionOwner }
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Who is making approving</Form.Label>
                                                        <Form.Control 
                                                            type='text' 
                                                            onChange={ e => setField('approval', e.target.value) } 
                                                            placeholder="Who is making approving " 
                                                            isInvalid={!!errors.approval}
                                                        />
                                                        <Form.Control.Feedback type='invalid'>
                                                            { errors.approval }
                                                        </Form.Control.Feedback>
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