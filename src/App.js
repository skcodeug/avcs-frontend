import "bootstrap/dist/css/bootstrap.min.css";
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
import UserReport from "./Components/Users/UserReport";
import ProtectedRoute from "./Components/ProtectedRoutes";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <ProtectedRoute
          path="/logout"
          render={() => {
            localStorage.removeItem("access-token");
            return <Redirect to="/" />;
          }}
        />
        <ProtectedRoute path="/dashboard/clients" component={Clients} exact />
        <ProtectedRoute path="/dashboard/operations" component={Operations} />
        <ProtectedRoute
          path="/dashboard/users"
          component={Users}
          exact
        ></ProtectedRoute>
        <ProtectedRoute
          path="/dashboard/maritalstatus"
          component={MaritalStatus}
          exact
        />
        <ProtectedRoute
          path="/dashboard/annualleave"
          component={AnnualLeave}
          exact
        />
        <ProtectedRoute
          path="/dashboard/annualleavedepartments"
          component={AnnualLeaveDepartments}
          exact
        />
        <ProtectedRoute
          path="/dashboard/annualleavemds"
          component={AnnualLeaveMds}
          exact
        />
        <ProtectedRoute
          path="/dashboard/annualleaverecommenders"
          component={AnnualLeaveRecommenders}
          exact
        />
        <ProtectedRoute
          path="/dashboard/approvals"
          component={Approvals}
          exact
        />
        <ProtectedRoute path="/dashboard/biodata" component={BioData} exact />
        <ProtectedRoute
          path="/dashboard/clientcategories"
          component={ClientCategories}
          exact
        />
        <ProtectedRoute path="/dashboard/clients" component={Clients} exact />
        <ProtectedRoute
          path="/dashboard/consultantfirmconsultants"
          component={ConsultantFirmConsultants}
          exact
        />
        <ProtectedRoute
          path="/dashboard/consultantcategories"
          component={ConsultantCategories}
          exact
        />
        <ProtectedRoute
          path="/dashboard/consultantfirms"
          component={ConsultantFirms}
          exact
        />
        <ProtectedRoute
          path="/dashboard/consultants"
          component={Consultants}
          exact
        />
        <ProtectedRoute
          path="/dashboard/contracts"
          component={Contracts}
          exact
        />
        <ProtectedRoute
          path="/dashboard/corporateclients"
          component={CorporateClients}
          exact
        />
        <ProtectedRoute
          path="/dashboard/departments"
          component={Departments}
          exact
        />
        <ProtectedRoute
          path="/dashboard/individualclients"
          component={IndividualClients}
          exact
        />
        <ProtectedRoute
          path="/dashboard/individualconsultants"
          component={IndividualConsultants}
          exact
        />
        <ProtectedRoute
          path="/dashboard/interviewevaluation"
          component={InterviewEvaluation}
          exact
        />
        <ProtectedRoute path="/dashboard/invoices" component={Invoices} exact />
        <ProtectedRoute
          path="/dashboard/nextofkin"
          component={NextOfKin}
          exact
        />
        <ProtectedRoute path="/dashboard/payments" component={Payments} exact />
        <ProtectedRoute
          path="/dashboard/projectstatus"
          component={ProjectStatus}
          exact
        />
        <ProtectedRoute
          path="/dashboard/prospects"
          component={Prospects}
          exact
        />
        <ProtectedRoute
          path="/dashboard/qualifications"
          component={Qualifications}
          exact
        />
        <ProtectedRoute
          path="/dashboard/quotation"
          component={Quotation}
          exact
        />
        <ProtectedRoute
          path="/dashboard/quotationdetails"
          component={QuotationDetails}
          exact
        />
        <ProtectedRoute path="/dashboard/receipts" component={Receipts} exact />
        <ProtectedRoute
          path="/dashboard/requisitions"
          component={Requisitions}
          exact
        />
        <ProtectedRoute
          path="/dashboard/staffverifications"
          component={StaffVerifications}
          exact
        />
        <ProtectedRoute
          path="/dashboard/userdetails1"
          component={UserDetails1}
          exact
        />
        <ProtectedRoute
          path="/dashboard/userdetails2"
          component={UserDetails2}
          exact
        />
        <ProtectedRoute
          path="/dashboard/userrelations"
          component={UserRelations}
          exact
        />
        <ProtectedRoute path="/reports/users" component={UserReport} exact />
        <ProtectedRoute path="/reports/clients" component={Clients} exact />
        <ProtectedRoute path="/reports/operations" component={Operations} />
        <ProtectedRoute
          path="/reports/maritalstatus"
          component={MaritalStatus}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleave"
          component={AnnualLeave}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleavedepartments"
          component={AnnualLeaveDepartments}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleavemds"
          component={AnnualLeaveMds}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleaverecommenders"
          component={AnnualLeaveRecommenders}
          exact
        />
        <ProtectedRoute path="/reports/approvals" component={Approvals} exact />
        <ProtectedRoute path="/reports/biodata" component={BioData} exact />
        <ProtectedRoute
          path="/reports/clientcategories"
          component={ClientCategories}
          exact
        />
        <ProtectedRoute path="/reports/clients" component={Clients} exact />
        <ProtectedRoute
          path="/reports/consultantfirmconsultants"
          component={ConsultantFirmConsultants}
          exact
        />
        <ProtectedRoute
          path="/reports/consultantcategories"
          component={ConsultantCategories}
          exact
        />
        <ProtectedRoute
          path="/reports/consultantfirms"
          component={ConsultantFirms}
          exact
        />
        <ProtectedRoute
          path="/reports/consultants"
          component={Consultants}
          exact
        />
        <ProtectedRoute path="/reports/contracts" component={Contracts} exact />
        <ProtectedRoute
          path="/reports/corporateclients"
          component={CorporateClients}
          exact
        />
        <ProtectedRoute
          path="/reports/departments"
          component={Departments}
          exact
        />
        <ProtectedRoute
          path="/reports/individualclients"
          component={IndividualClients}
          exact
        />
        <ProtectedRoute
          path="/reports/individualconsultants"
          component={IndividualConsultants}
          exact
        />
        <ProtectedRoute
          path="/reports/interviewevaluation"
          component={InterviewEvaluation}
          exact
        />
        <ProtectedRoute path="/reports/invoices" component={Invoices} exact />
        <ProtectedRoute path="/reports/nextofkin" component={NextOfKin} exact />
        <ProtectedRoute path="/reports/payments" component={Payments} exact />
        <ProtectedRoute
          path="/reports/projectstatus"
          component={ProjectStatus}
          exact
        />
        <ProtectedRoute path="/reports/prospects" component={Prospects} exact />
        <ProtectedRoute
          path="/reports/qualifications"
          component={Qualifications}
          exact
        />
        <ProtectedRoute path="/reports/quotation" component={Quotation} exact />
        <ProtectedRoute
          path="/reports/quotationdetails"
          component={QuotationDetails}
          exact
        />
        <ProtectedRoute path="/reports/receipts" component={Receipts} exact />
        <ProtectedRoute
          path="/reports/requisitions"
          component={Requisitions}
          exact
        />
        <ProtectedRoute
          path="/reports/staffverifications"
          component={StaffVerifications}
          exact
        />
        <ProtectedRoute
          path="/reports/userdetails1"
          component={UserDetails1}
          exact
        />
        <ProtectedRoute
          path="/reports/userdetails2"
          component={UserDetails2}
          exact
        />
        <ProtectedRoute
          path="/reports/userrelations"
          component={UserRelations}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
