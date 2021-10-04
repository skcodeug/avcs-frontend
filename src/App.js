import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Operations from "./Components/Operations/Operations";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
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
import ContractsUpdate from "./Components/Contracts/Update";
import CorporateClients from "./Components/CorporateClients/CorporateClients";
import Departments from "./Components/Departments/Departments";
import IndividualClients from "./Components/IndividualClients/IndividualClients";
import IndividualConsultants from "./Components/IndividualConsultants/IndividualConsultants";
import InterviewEvaluation from "./Components/InterviewEvaluations/InterviewEvaluations";
import InterviewEvaluationUpdate from "./Components/InterviewEvaluations/Update";
import Invoices from "./Components/Invoices/Invoices";
import Payments from "./Components/Payments/Payments";
import NextOfKin from "./Components/NextOfKin/NextOfKin";
import PaymentsUpdate from "./Components/Payments/Update";
import ProjectStatus from "./Components/ProjectStatus/ProjectStatus";
import Prospects from "./Components/Prospects/Prospects";
import ProspectsUpdate from "./Components/Prospects/Update";
import Qualifications from "./Components/Qualifications/Qualifications";
import Quotation from "./Components/Quotation/Quotation";
import QuotationUpdate from "./Components/Quotation/Update";
import QuotationDetails from "./Components/QuotationDetails/QuotationDetails";
import Receipts from "./Components/Receipts/Receipts";
import ReceiptsUpdate from "./Components/Receipts/Update";
import RequisitionsUpdate from "./Components/Requisitions/Update";
import Requisitions from "./Components/Requisitions/Requisitions";
import StaffVerifications from "./Components/StaffVerifications/StaffVerifications";
import StaffVerificationsUpdate from "./Components/StaffVerifications/Update";
import UserDetails1 from "./Components/UserDetails1/UserDetails1";
import UserDetails2 from "./Components/UserDetails2/UserDetails2";
import UserRelations from "./Components/UserRelations/UserRelations";
import Users from "./Components/Users/Users";
import UsersUpdate from "./Components/Users/Update";
import OperationsUpdate from "./Components/Operations/Update";
import ClientsUpdate from "./Components/Clients/Update";
import AnnualLeaveUpdate from "./Components/AnnualLeave/Update";
import ApprovalsUpdate from "./Components/Approvals/Update";
import ConsultantsUpdate from "./Components/Consultants/Update";
import InvoicesUpdate from "./Components/Invoices/Update";

import ProtectedRoute from "./Components/ProtectedRoutes";
import AllRoute from "./Components/AllRoute";
import HrRoute from "./Components/HrRoute";
import HrSalesRoute from "./Components/HrSalesRoute";
import FinanceRoute from "./Components/FinanceRoute";
import SalesRoute from "./Components/SalesRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route
          path="/logout"
          render={() => {
            localStorage.removeItem("access-token");
            localStorage.removeItem("role");
            localStorage.removeItem("roles");
            return <Redirect to="/" />;
          }}
        />
        <AllRoute path="/annualleave" component={AnnualLeave} exact />
        <AllRoute path="/requisitions" component={Requisitions} exact />
        <AllRoute
          path="/requisitions/update"
          component={RequisitionsUpdate}
          exact
        />
        <HrRoute path="/users" component={Users} exact />
        <HrRoute path="/users/update" component={UsersUpdate} />
        <HrRoute path="/approvals/update" component={ApprovalsUpdate} />
        <HrRoute path="/operations/update" component={OperationsUpdate} />
        <HrRoute path="/annualleave/update" component={AnnualLeaveUpdate} />
        <HrRoute path="/clients/update" component={ClientsUpdate} />
        <HrRoute path="/consultants" component={Consultants} exact />
        <HrRoute path="/consultants/update" component={ConsultantsUpdate} />

        <HrSalesRoute path="/clients" component={Clients} exact />
        <HrSalesRoute
          path="/interviewevaluation"
          component={InterviewEvaluation}
          exact
        />
        <HrSalesRoute
          path="/interviewevaluation/update"
          component={InterviewEvaluationUpdate}
          exact
        />
        <HrSalesRoute
          path="/staffverifications"
          component={StaffVerifications}
          exact
        />
        <HrSalesRoute
          path="/staffverifications/update"
          component={StaffVerificationsUpdate}
          exact
        />

        <SalesRoute path="/prospects" component={Prospects} exact />
        <SalesRoute
          path="/prospects/update"
          component={ProspectsUpdate}
          exact
        />
        <SalesRoute path="/contracts" component={Contracts} exact />
        <SalesRoute
          path="/contracts/update"
          component={ContractsUpdate}
          exact
        />
        <SalesRoute path="/quotations" component={Quotation} exact />
        <SalesRoute
          path="/quotations/update"
          component={QuotationUpdate}
          exact
        />
        <SalesRoute path="/operations" component={Operations} />

        <FinanceRoute path="/invoices" component={Invoices} exact />
        <FinanceRoute
          path="/invoices/update"
          component={InvoicesUpdate}
          exact
        />
        <FinanceRoute path="/receipts" component={Receipts} exact />
        <FinanceRoute
          path="/receipts/update"
          component={ReceiptsUpdate}
          exact
        />
        <FinanceRoute path="/payments" component={Payments} exact />
        <FinanceRoute
          path="/payments/update"
          component={PaymentsUpdate}
          exact
        />
        <FinanceRoute path="/approvals" component={Approvals} exact />

        <ProtectedRoute path="/maritalstatus" component={MaritalStatus} exact />
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
        <ProtectedRoute path="/biodata" component={BioData} exact />
        <ProtectedRoute
          path="/clientcategories"
          component={ClientCategories}
          exact
        />
        {/* <ProtectedRoute path="/clients" component={Clients} exact /> */}
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
        <ProtectedRoute path="/nextofkin" component={NextOfKin} exact />
        <ProtectedRoute path="/projectstatus" component={ProjectStatus} exact />
        <ProtectedRoute
          path="/qualifications"
          component={Qualifications}
          exact
        />
        <ProtectedRoute
          path="/quotationdetails"
          component={QuotationDetails}
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
