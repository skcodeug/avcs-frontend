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
import Users from "./Components/Admin/Users/Users";
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
import UserReport from "./Components/Admin/Users/UserReport";

import OperationsReport from "./Components/Operations/OperationsReport";
import MaritalStatusReport from "./Components/MaritalStatus/MaritalStatusReport";
// import AnnualLeaveReport from "./Components/AnnualLeave/AnnualLeaveReport";
// import AnnualLeaveDepartmentReport from "./Components/AnnualLeaveDepartment/AnnualLeaveDepartmentReport";
// import AnnualLeaveMdsReport from "./Components/AnnualLeaveMds/AnnualLeaveMdsReport";
// import AnnualLeaveRecommendersReport from "./Components/AnnualLeaveRecommenders/AnnualLeaveRecommendersReport";
// import ApprovalsReport from "./Components/Approvals/ApprovalsReport";
// import BioDataReport from "./Components/BioData/BioDataReport";
// import ClientCategoriesReport from "./Components/ClientCategories/ClientCategoriesReport";
// import ClientsReport from "./Components/Clients/ClientsReport";
// import ConsultantFirmConsultantsReport from "./Components/ConsultantFirmConsultants/ConsultantFirmConsultantsReport";
// import ConsultantCategoriesReport from "./Components/ConsultantCategories/ConsultantCategoriesReport";
// import ConsultantFirmsReport from "./Components/ConsultantFirms/ConsultantFirmsReport";
// import ConsultantsReport from "./Components/Consultants/ConsultantsReport";
// import ContractsReport from "./Components/Contracts/ContractsReport";
// import CorporateClientsReport from "./Components/CorporateClients/CorporateClientsReport";
// import DepartmentsReport from "./Components/Departments/DepartmentsReport";
// import IndividualClientsReport from "./Components/IndividualClients/IndividualClientsReport";
// import IndividualConsultantsReport from "./Components/IndividualConsultants/IndividualConsultantsReport";
// import InterviewEvaluationReport from "./Components/InterviewEvaluations/InterviewEvaluationsReport";
// import InvoicesReport from "./Components/Invoices/InvoicesReport";
// import NextOfKinReport from "./Components/NextOfKin/NextOfKinReport";
// import PaymentsReport from "./Components/Payments/PaymentsReport";
// import ProjectStatusReport from "./Components/ProjectStatus/ProjectStatusReport";
// import ProspectsReport from "./Components/Prospects/ProspectsReport";
// import QualificationsReport from "./Components/Qualifications/QualificationsReport";
// import QuotationReport from "./Components/Quotation/QuotationReport";
// import QuotationDetailsReport from "./Components/QuotationDetails/QuotationDetailsReport";
// import ReceiptsReport from "./Components/Receipts/ReceiptsReport";
// import RequisitionsReport from "./Components/Requisitions/RequisitionsReport";
// import StaffVerificationsReport from "./Components/StaffVerifications/StaffVerificationsReport";
// import UserDetails1Report from "./Components/UserDetails1/UserDetails1Report";
// import UserDetails2Report from "./Components/UserDetails2/UserDetails2Report";
// import UserRelationsReport from "./Components/UserRelations/UserRelationsReport";

import ProtectedRoute from "./Components/ProtectedRoutes";
// import HrRoute from "./Components/HrRoute";
// import AdminRoute from "./Components/AdminRoute";
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
        <ProtectedRoute path="/dashboard/clients" component={Clients} exact />
        <ProtectedRoute path="/dashboard/operations" component={Operations} />
        <ProtectedRoute
          path="/admin/users"
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
          component={AnnualLeaveDepartment}
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
        <ProtectedRoute
          path="/reports/operations"
          component={OperationsReport}
        />
        {/* <ProtectedRoute
          path="/reports/clients"
          component={ClientsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/maritalstatus"
          component={MaritalStatusReport}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleave"
          component={AnnualLeaveReport}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleavedepartments"
          component={AnnualLeaveDepartmentsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleavemds"
          component={AnnualLeaveMdsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/annualleaverecommenders"
          component={AnnualLeaveRecommendersReport}
          exact
        />
        <ProtectedRoute
          path="/reports/approvals"
          component={ApprovalsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/biodata"
          component={BioDataReport}
          exact
        />
        <ProtectedRoute
          path="/reports/clientcategories"
          component={ClientCategories}
          exact
        />
        <ProtectedRoute
          path="/reports/clients"
          component={ClientsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/consultantfirmconsultants"
          component={ConsultantFirmConsultantsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/consultantcategories"
          component={ConsultantCategoriesReport}
          exact
        />
        <ProtectedRoute
          path="/reports/consultantfirms"
          component={ConsultantFirmsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/consultants"
          component={ConsultantsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/contracts"
          component={ContractsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/corporateclients"
          component={CorporateClientsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/departments"
          component={DepartmentsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/individualclients"
          component={IndividualClientsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/individualconsultants"
          component={IndividualConsultantsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/interviewevaluation"
          component={InterviewEvaluationReport}
          exact
        />
        <ProtectedRoute
          path="/reports/invoices"
          component={InvoicesReport}
          exact
        />
        <ProtectedRoute
          path="/reports/nextofkin"
          component={NextOfKinReport}
          exact
        />
        <ProtectedRoute
          path="/reports/payments"
          component={PaymentsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/projectstatus"
          component={ProjectStatusReport}
          exact
        />
        <ProtectedRoute
          path="/reports/prospects"
          component={ProspectsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/qualifications"
          component={QualificationsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/quotation"
          component={QuotationReport}
          exact
        />
        <ProtectedRoute
          path="/reports/quotationdetails"
          component={QuotationDetailsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/receipts"
          component={ReceiptsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/requisitions"
          component={RequisitionsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/staffverifications"
          component={StaffVerificationsReport}
          exact
        />
        <ProtectedRoute
          path="/reports/userdetails1"
          component={UserDetails1Report}
          exact
        />
        <ProtectedRoute
          path="/reports/userdetails2"
          component={UserDetails2Report}
          exact
        />
        <ProtectedRoute
          path="/reports/userrelations"
          component={UserRelationsReport}
          exact
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
