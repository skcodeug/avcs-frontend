import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Operations from "./Components/Operations";
import Login from "./Components/Login";
import MaritalStatus from "./Components/MaritalStatus";
import Users from "./Components/Users/Users";
import AnnualLeave from "./Components/AnnualLeave/AnnualLeave";
import AnnualLeaveDepartments from "./Components/AnnualLeaveDepartment/AnnualLeaveDepartments";
import AnnualLeaveMds from "./Components/AnnualLeaveMds/AnnualLeaveMds";
import AnnualLeaveRecommenders from "./Components/AnnualLeaveRecommenders/AnnualLeaveRecommenders";
import Approvals from "./Components/Approvals/Approvals";
import BioData from "./Components/BioData/BioData";
import ClientCategories from "./Components/ClientCategories/ClientCategories";
import Clients from "./Components/Clients-Beta/Clients";
import ConsultantFirmConsultants from "./Components/ConsultantFirmConsultants/ConsultanFirmConsultants";
import ConsultantCategories from "./Components/ConsultantCategories/ConsultantCategories";
import ConsultantFirms from "./Components/ConsultantFirms/ConsultantFirms";
import Consultants from "./Components/Consultants";
import Contracts from "./Components/Contracts";
import CorporateClients from "./Components/CorporateClients";
import Departments from "./Components/Departments";
import IndividualClients from "./Components/IndividualClients";
import IndividualConsultants from "./Components/IndividualConsultants";
import InterviewEvaluation from "./Components/InterviewEvaluations";
import InvoiceDetails from "./Components/InvoiceDetails";
import Invoices from "./Components/Invoices";
import NextOfKin from "./Components/NextOfKin";
import Payments from "./Components/Payments";
import ProjectStatus from "./Components/ProjectStatus";
import Prospects from "./Components/Prospects";
import Qualifications from "./Components/Qualifications";
import Quotation from "./Components/Quotation";
import QuotationDetails from "./Components/QuotationDetails";
import ReceiptDetails from "./Components/ReceiptDetails";
import Receipts from "./Components/Receipts";
import Requisitions from "./Components/Requisitions";
import StaffVerifications from "./Components/StaffVerifications";
import UserDetails1 from "./Components/UserDetails1";
import UserDetails2 from "./Components/UserDetails2";
import UserRelations from "./Components/UserRelations";
// import { Redirect } from "react-router-dom"

function App() {
  // const checkIfUserIsAuthorized = () => {
  //   if (
  //     localStorage.getItem("access-token") !== null &&
  //     localStorage.getItem("access-token") !== undefined
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  return (
    <div id="body">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Login} exact></Route>
            <Route path="/clients" component={Clients} exact></Route>
            <Route path="/operations" component={Operations}></Route>
            <Route path="/users" component={Users} exact></Route>
            {/* <Route
              path="/users"
              render={() => {
                console.log(checkIfUserIsAuthorized())
                return checkIfUserIsAuthorized() ? (
                  <Users />
                ) : (
                  <Redirect to="/" />
                )
              }}
              exact
            ></Route> */}
            <Route
              path="/maritalstatus"
              component={MaritalStatus}
              exact
            ></Route>
            <Route path="/annualleave" component={AnnualLeave} exact></Route>
            <Route
              path="/annualleavedepartments"
              component={AnnualLeaveDepartments}
              exact
            ></Route>
            <Route
              path="/annualleavemds"
              component={AnnualLeaveMds}
              exact
            ></Route>
            <Route
              path="/annualleaverecommenders"
              component={AnnualLeaveRecommenders}
              exact
            ></Route>
            <Route path="/approvals" component={Approvals} exact></Route>
            <Route path="/biodata" component={BioData} exact></Route>
            <Route
              path="/clientcategories"
              component={ClientCategories}
              exact
            ></Route>
            <Route path="/clients" component={Clients} exact></Route>
            <Route path="/collection" component={Collection} exact></Route>
            <Route
              path="/consultantfirmconsultants"
              component={ConsultantFirmConsultants}
              exact
            ></Route>
            <Route
              path="/consultantcategories"
              component={ConsultantCategories}
              exact
            ></Route>
            <Route
              path="/consultantfirms"
              component={ConsultantFirms}
              exact
            ></Route>
            <Route path="/consultants" component={Consultants} exact></Route>
            <Route path="/contracts" component={Contracts} exact></Route>
            <Route
              path="/corporateclients"
              component={CorporateClients}
              exact
            ></Route>
            <Route path="/departments" component={Departments} exact></Route>
            <Route
              path="/individualclients"
              component={IndividualClients}
              exact
            ></Route>
            <Route
              path="/individualconsultants"
              component={IndividualConsultants}
              exact
            ></Route>
            <Route
              path="/interviewevaluation"
              component={InterviewEvaluation}
              exact
            ></Route>
            <Route
              path="/invoicedetails"
              component={InvoiceDetails}
              exact
            ></Route>
            <Route path="/invoices" component={Invoices} exact></Route>
            <Route path="/nextofkin" component={NextOfKin} exact></Route>
            <Route path="/payments" component={Payments} exact></Route>
            <Route
              path="/projectstatus"
              component={ProjectStatus}
              exact
            ></Route>
            <Route path="/prospects" component={Prospects} exact></Route>
            <Route
              path="/qualifications"
              component={Qualifications}
              exact
            ></Route>
            <Route path="/quotation" component={Quotation} exact></Route>
            <Route
              path="/quotationdetails"
              component={QuotationDetails}
              exact
            ></Route>
            <Route
              path="/receiptdetails"
              component={ReceiptDetails}
              exact
            ></Route>
            <Route path="/receipts" component={Receipts} exact></Route>
            <Route path="/requisitions" component={Requisitions} exact></Route>
            <Route
              path="/staffverifications"
              component={StaffVerifications}
              exact
            ></Route>
            <Route path="/userdetails1" component={UserDetails1} exact></Route>
            <Route path="/userdetails2" component={UserDetails2} exact></Route>
            <Route
              path="/userrelations"
              component={UserRelations}
              exact
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

{
  /* 
import { Accordion, Card, useAccordionToggle, Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
    return (
      <Button
        variant="primary"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }


  function App (){}


   <Container>
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
</Container> */
}

//     </div>

//   );
// }

// export default App;
