import React from "react"
import "../App.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Nav } from "react-bootstrap"

function NavBar() {
  return (
    <Nav fill>
      <Nav.Item>
        <Nav.Link activeClassName="active" href="/clients" id="navlinks">
          Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/operations" eventKey="link-4" id="navlinks">
          Operations
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/users" eventKey="link-8" id="navlinks">
          Users
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/maritalstatus" eventKey="link-10" id="navlinks">
          Marital Status
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="annualleave" href="/annualleave" id="navlinks">
          Annual Leave
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleavedepartments"
          href="/annualleavedepartments"
          id="navlinks"
        >
          Annual Leave Departments
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleavemds"
          href="/annualleavemds"
          id="navlinks"
        >
          Annual Leave MDs
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="annualleaverecommenders"
          href="/annualleaverecommenders"
          id="navlinks"
        >
          Annual Leave Recommenders
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="approvals" href="/approvals" id="navlinks">
          Approvals
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="biodata" href="/biodata" id="navlinks">
          BioData
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="clientcategories"
          href="/clientcategories"
          id="navlinks"
        >
          Client Categories
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="clients" href="/clients" id="navlinks">
          Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="collection" href="/collection" id="navlinks">
          Collection
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultantfirmconsultant"
          href="/consultantfirmconsultant"
          id="navlinks"
        >
          Consultant Firm Consultants
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultantcategories"
          href="/consultantcategories"
          id="navlinks"
        >
          Consultant Categories
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="consultantfirms"
          href="/consultantfirms"
          id="navlinks"
        >
          Consultant Firms
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="consultants" href="/consultants" id="navlinks">
          Consultants
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="corporateclients"
          href="/corporateclients"
          id="navlinks"
        >
          Corporate Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="departments" href="/departments" id="navlinks">
          Departments
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="individualclients"
          href="/individualclients"
          id="navlinks"
        >
          Individual Clients
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="individualconsultants"
          href="/individualconsultants"
          id="navlinks"
        >
          Individual Consultants
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="interviewevaluation"
          href="/interviewevaluation"
          id="navlinks"
        >
          Interview Evaluation
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="invoicedetails"
          href="/invoicedetails"
          id="navlinks"
        >
          Invoice Details
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="invoices" href="/invoices" id="navlinks">
          Invoices
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="nextofkin" href="/nextofkin" id="navlinks">
          Next of Kin
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="payments" href="/payments" id="navlinks">
          Payments
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="projectstatus" href="/projectstatus" id="navlinks">
          Project Status
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="prospects" href="/prospects" id="navlinks">
          Prospects
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="qualifications"
          href="/qualifications"
          id="navlinks"
        >
          Qualifications
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="quotation" href="/quotation" id="navlinks">
          Quotation
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="quotationdetails"
          href="/quotationdetails"
          id="navlinks"
        >
          Quotation Details
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="receiptdetails"
          href="/receiptdetails"
          id="navlinks"
        >
          Receipt Details
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="receipts" href="/receipts" id="navlinks">
          Receipts
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="requisitions" href="/requisitions" id="navlinks">
          Requisitions
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          eventKey="staffverifications"
          href="/staffverifications"
          id="navlinks"
        >
          Staff Verifications
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="userdetails1" href="/userdetails1" id="navlinks">
          User Details I
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="userdetails2" href="/userdetails2" id="navlinks">
          User Details II
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="userrelations" href="/userrelations" id="navlinks">
          User Relations
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
export default NavBar
