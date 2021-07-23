import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Operations from "./Components/Operations/Operations";
import Login from "./Components/Login/Login";
import MaritalStatus from "./Components/MaritalStatus/MaritalStatus";
import AnnualLeave from "./Components/AnnualLeave/AnnualLeave";
import AnnualLeaveDepartment from "./Components/AnnualLeaveDepartment/AnnualLeaveDepartments";
import AnnualLeaveMds from "./Components/AnnualLeaveMds/AnnualLeaveMds";
import AnnualLeaveRecommenders from "./Components/AnnualLeaveRecommenders/AnnualLeaveRecommenders";
import Approvals from "./Components/Approvals/Approvals";
import BioData from "./Components/BioData/BioData";
import ClientCategories from "./Components/ClientCategories/ClientCategories";
import Clients from "./Components/Clients/Clients";
import ConsultantFirmConsultants from "./Components/ConsultantFirmConsultants/ConsultantFirmConsultants";
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
import HrRoute from "./Components/HrRoute";
// import FinanceRoute from "./Components/FinanceRoute";
// import SalesRoute from "./Components/SalesRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route
          path="/logout"
          render={() => {
            localStorage.removeItem("access-token");
            localStorage.removeItem("role");
            return <Redirect to="/" />;
          }}
        />
        <HrRoute path="/users" exact />
        <ProtectedRoute path="/clients" component={Clients} exact />
        <ProtectedRoute path="/operations" component={Operations} />
        <ProtectedRoute path="/maritalstatus" component={MaritalStatus} exact />
        <ProtectedRoute path="/annualleave" component={AnnualLeave} exact />
        <ProtectedRoute
          path="/annualleavedepartments"
          component={AnnualLeaveDepartment}
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
        <ProtectedRoute path="/projectstatus" component={ProjectStatus} exact />
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
        <ProtectedRoute path="/userrelations" component={UserRelations} exact />
      </Switch>
    </Router>
  );
}

export default App;
