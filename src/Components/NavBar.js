import React from "react";
import "../App.css";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Nav fill>
      <Nav.Item>
        <Nav.Link
          activeClassName="active"
          href="/dashboard/clients"
          id="navlinks"
        >
          Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/dashboard/operations" eventKey="link-4" id="navlinks">
          Operations
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/dashboard/users" eventKey="link-8" id="navlinks">
          Users
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          href="/dashboard/maritalstatus"
          eventKey="link-10"
          id="navlinks"
        >
          Marital Status
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleave"
          href="/dashboard/annualleave"
          id="navlinks"
        >
          Annual Leave
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleavedepartments"
          href="/dashboard/annualleavedepartments"
          id="navlinks"
        >
          Annual Leave Departments
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleavemds"
          href="/dashboard/annualleavemds"
          id="navlinks"
        >
          Annual Leave MDs
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleaverecommenders"
          href="/dashboard/annualleaverecommenders"
          id="navlinks"
        >
          Annual Leave Recommenders
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="approvals"
          href="/dashboard/approvals"
          id="navlinks"
        >
          Approvals
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="biodata" href="/dashboard/biodata" id="navlinks">
          BioData
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="clientcategories"
          href="/dashboard/clientcategories"
          id="navlinks"
        >
          Client Categories
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="clients" href="/dashboard/clients" id="navlinks">
          Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultantfirmconsultants"
          href="/dashboard/consultantfirmconsultants"
          id="navlinks"
        >
          Consultant Firm Consultants
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultantcategories"
          href="/dashboard/consultantcategories"
          id="navlinks"
        >
          Consultant Categories
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultantfirms"
          href="/dashboard/consultantfirms"
          id="navlinks"
        >
          Consultant Firms
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultants"
          href="/dashboard/consultants"
          id="navlinks"
        >
          Consultants
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="corporateclients"
          href="/dashboard/corporateclients"
          id="navlinks"
        >
          Corporate Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="departments"
          href="/dashboard/departments"
          id="navlinks"
        >
          Departments
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="individualclients"
          href="/dashboard/individualclients"
          id="navlinks"
        >
          Individual Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="individualconsultants"
          href="/dashboard/individualconsultants"
          id="navlinks"
        >
          Individual Consultants
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="interviewevaluation"
          href="/dashboard/interviewevaluation"
          id="navlinks"
        >
          Interview Evaluation
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="invoices" href="/dashboard/invoices" id="navlinks">
          Invoices
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="nextofkin"
          href="/dashboard/nextofkin"
          id="navlinks"
        >
          Next of Kin
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="payments" href="/dashboard/payments" id="navlinks">
          Payments
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="projectstatus"
          href="/dashboard/projectstatus"
          id="navlinks"
        >
          Project Status
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="prospects"
          href="/dashboard/prospects"
          id="navlinks"
        >
          Prospects
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="qualifications"
          href="/dashboard/qualifications"
          id="navlinks"
        >
          Qualifications
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="quotation"
          href="/dashboard/quotation"
          id="navlinks"
        >
          Quotation
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="quotationdetails"
          href="/dashboard/quotationdetails"
          id="navlinks"
        >
          Quotation Details
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="receipts" href="/dashboard/receipts" id="navlinks">
          Receipts
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="requisitions"
          href="/dashboard/requisitions"
          id="navlinks"
        >
          Requisitions
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="staffverifications"
          href="/dashboard/staffverifications"
          id="navlinks"
        >
          Staff Verifications
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="userdetails1"
          href="/dashboard/userdetails1"
          id="navlinks"
        >
          User Details I
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="userdetails2"
          href="/dashboard/userdetails2"
          id="navlinks"
        >
          User Details II
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="userrelations"
          href="/dashboard/userrelations"
          id="navlinks"
        >
          User Relations
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="reports" href="/reports/users" id="navlinks">
          Reports
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default NavBar;
