// import { Accordion, Card, useAccordionToggle, Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
//import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import clients from './Components/Clients';
import prospectus from './Components/Prospectus';
import Quotations from './Components/Quotation';
import Contracts from './Components/Contracts';
import Operations from './Components/Operations';
import Accounts from './Components/Accounts';
import Hr from './Components/HR';
import Reports from './Components/Reports';


// function CustomToggle({ children, eventKey }) {
//   const decoratedOnClick = useAccordionToggle(eventKey, () =>
//     console.log('totally custom!'),
//   );

//   return (
//     <Button
//       variant="primary"
      
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </Button>
//   );
// }
function App() {
  return (
    <div id="body">
<Router>
      <NavBar />
      <br></br>
      <div>  
          <Switch>
            <Route path="/home" component={clients} axact></Route>
            <Route path="/prospectus" component={prospectus}></Route>
            <Route path="/quotations" component={Quotations}></Route>
            <Route path="/contracts" component={Contracts}></Route>
            <Route path="/operations" component={Operations}></Route>
            <Route path="/accounts" component={Accounts}></Route>
            <Route path="/hr" component={Hr}></Route>
            <Route path="/reports" component={Reports}></Route>
            
          </Switch>
      </div>
    </Router>

      





    {/* <Container>
        <Row>
          <Col sm={4}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">Client</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
  </Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="1">Prospects</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="2">Quotations</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="3">Contracts</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="4">Prospects</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="5">Operations</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="6">Accounts</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="7">HR</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="8">Settings</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="9">Reports</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="10">Invoices</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="11">Payments</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="12">Requisitions</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
           <Col sm={4}>sm=4</Col> 
         </Row> 
</Container> */}
      
    </div>


  );
}


export default App;
