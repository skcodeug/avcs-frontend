import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Operations from "./Components/Operations/Operations";
import Login from "./Components/Login/Login";
import MaritalStatus from "./Components/MaritalStatus/MaritalStatus";
import Users from "./Components/Users/Users";
import AnnualLeave from "./Components/AnnualLeave/AnnualLeave";
import AnnualLeaveDepartments from "./Components/AnnualLeaveDepartment/AnnualLeaveDepartments";
import AnnualLeaveMds from "./Components/AnnualLeaveMds/AnnualLeaveMds";
import AnnualLeaveRecommenders from "./Components/AnnualLeaveRecommenders/AnnualLeaveRecommenders";
import Approvals from "./Components/Approvals/Approvals";
import BioData from "./Components/BioData/BioData";
import ClientCategories from "./Components/ClientCategories/ClientCategories";
import Clients from "./Components/Clients/Clients";
import ConsultantFirmConsultants from "./Components/ConsultantFirmConsultants/ConsultanFirmConsultants";
import ConsultantCategories from "./Components/ConsultantCategories/ConsultantCategories";
import ConsultantFirms from "./Components/ConsultantFirms/ConsultantFirms";
import Consultants from "./Components/Consultants/Consultants";
import Contracts from "./Components/Contracts/Contracts";
import CorporateClients from "./Components/CorporateClients/CorporateClients";
import Departments from "./Components/Departments/Departments";
import IndividualClients from "./Components/IndividualClients/IndividualClients";
import IndividualConsultants from "./Components/IndividualConsultants/IndividualConsultants";
import InterviewEvaluation from "./Components/InterviewEvaluations/InterviewEvaluations";
import Invoices from "./Components/Invoices/Invoices";
import NextOfKin from "./Components/NextOfKin/NextOfKin";
import Payments from "./Components/Payments/Payments";
import ProjectStatus from "./Components/ProjectStatus/ProjectStatus";
import Prospects from "./Components/Prospects/Prospects";
import Qualifications from "./Components/Qualifications/Qualifications";
import Quotation from "./Components/Quotation/Quotation";
import QuotationDetails from "./Components/QuotationDetails/QuotationDetails";
import Receipts from "./Components/Receipts/Receipts";
import Requisitions from "./Components/Requisitions/Requisitions";
import StaffVerifications from "./Components/StaffVerifications/StaffVerifications";
import UserDetails1 from "./Components/UserDetails1/UserDetails1";
import UserDetails2 from "./Components/UserDetails2/UserDetails2";
import UserRelations from "./Components/UserRelations/UserRelations";
import ProtectedRoute from "./Components/ProtectedRoutes";

function App() {
  return (
    <div id="body">
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <ProtectedRoute path="/clients" component={Clients} exact />
          <ProtectedRoute path="/operations" component={Operations} />
          <ProtectedRoute
            path="/users"
            component={Users}
            exact
          ></ProtectedRoute>
          <ProtectedRoute
            path="/maritalstatus"
            component={MaritalStatus}
            exact
          />
          <ProtectedRoute path="/annualleave" component={AnnualLeave} exact />
          <ProtectedRoute
            path="/annualleavedepartments"
            component={AnnualLeaveDepartments}
            exact
          />
          <ProtectedRoute
            path="/annualleavemds"
            component={AnnualLeaveMds}
            exact
          />
          <ProtectedRoute
            path="/annualleaverecommenders"
            component={AnnualLeaveRecommenders}
            exact
          />
          <ProtectedRoute path="/approvals" component={Approvals} exact />
          <ProtectedRoute path="/biodata" component={BioData} exact />
          <ProtectedRoute
            path="/clientcategories"
            component={ClientCategories}
            exact
          />
          <ProtectedRoute path="/clients" component={Clients} exact />
          <ProtectedRoute
            path="/consultantfirmconsultants"
            component={ConsultantFirmConsultants}
            exact
          />
          <ProtectedRoute
            path="/consultantcategories"
            component={ConsultantCategories}
            exact
          />
          <ProtectedRoute
            path="/consultantfirms"
            component={ConsultantFirms}
            exact
          />
          <ProtectedRoute path="/consultants" component={Consultants} exact />
          <ProtectedRoute path="/contracts" component={Contracts} exact />
          <ProtectedRoute
            path="/corporateclients"
            component={CorporateClients}
            exact
          />
          <ProtectedRoute path="/departments" component={Departments} exact />
          <ProtectedRoute
            path="/individualclients"
            component={IndividualClients}
            exact
          />
          <ProtectedRoute
            path="/individualconsultants"
            component={IndividualConsultants}
            exact
          />
          <ProtectedRoute
            path="/interviewevaluation"
            component={InterviewEvaluation}
            exact
          />
          <ProtectedRoute path="/invoices" component={Invoices} exact />
          <ProtectedRoute path="/nextofkin" component={NextOfKin} exact />
          <ProtectedRoute path="/payments" component={Payments} exact />
          <ProtectedRoute
            path="/projectstatus"
            component={ProjectStatus}
            exact
          />
          <ProtectedRoute path="/prospects" component={Prospects} exact />
          <ProtectedRoute
            path="/qualifications"
            component={Qualifications}
            exact
          />
          <ProtectedRoute path="/quotation" component={Quotation} exact />
          <ProtectedRoute
            path="/quotationdetails"
            component={QuotationDetails}
            exact
          />
          <ProtectedRoute path="/receipts" component={Receipts} exact />
          <ProtectedRoute path="/requisitions" component={Requisitions} exact />
          <ProtectedRoute
            path="/staffverifications"
            component={StaffVerifications}
            exact
          />
          <ProtectedRoute path="/userdetails1" component={UserDetails1} exact />
          <ProtectedRoute path="/userdetails2" component={UserDetails2} exact />
          <ProtectedRoute
            path="/userrelations"
            component={UserRelations}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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

//     </div>

//   );
// }

// export default App;
