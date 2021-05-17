import React from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Form, Table } from "react-bootstrap";
import axios from "axios";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        firstName: "",
        surname: "",
        otherNames: "",
        fullName: "",
        dob: "",
        gender: "",
        maritalStatusId: "",
        nationalIdNumber: "",
        workEmail: "",
        personalEmail: "",
        phoneNumbers: "",
        staffId: "",
        groupId: "",
        password: "",
        roles: [""],
        users: [],
        maritals: [],
        groups:[],
       
    }



    handleChange() { }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        let temp = this.state;

        delete temp.selectedValue;
        delete temp.users;
        axios
            .post("https://avcs-platform.herokuapp.com/users", temp)
            .then(() =>
                this.setState(() => ({
                    firstName: "",
                    surname: "",
                    otherNames: "",
                    fullName: "",
                    dob: "",
                    gender: "",
                    maritalStatusId: "",
                    nationalIdNumber: "",
                    workEmail: "",
                    personalEmail: "",
                    phoneNumbers: "",
                    staffId: "",
                    groupId: "",
                    password: "",
                    roles: [""],
                }))
            )
            .catch((error) => console.log(error));
    };

    fetchUsers = () => {
        axios
            .get("https://avcs-platform.herokuapp.com/users")
            .then((res) => {
                this.setState({ ...this.state, users: res.data })
            })
            .catch((error) => console.log(error));
    };

    componentDidMount() {
        this.fetchUsers()
    }

    fetchgroups = () => {
        axios
            .get("https://avcs-platform.herokuapp.com/groups")
            .then((res) => {
                this.setState({ ...this.state, groups: res.data })
            })
            .catch((error) => console.log(error));
    };

    componentDidMount() {
        this.fetchgroups()
    }


    fetchMaritalStatus = () => {
        axios
            .get("https://avcs-platform.herokuapp.com/maritalStatus")
            .then((res) => {
                this.setState({ ...this.state, maritals: res.data })
            })
            .catch((error) => console.log(error));
    };

    componentDidMount() {
        this.fetchMaritalStatus()
    }

//    getAll =()=>{ Promise.all([
//         fetch('https://avcs-platform.herokuapp.com/groups'),
//         fetch('https://avcs-platform.herokuapp.com/maritalStatus')
//     ]).then(function (responses) {
//         // Get a JSON object from each of the responses
//         return Promise.all(responses.map(function (response) {
//             return response.json();
//         }));
//     }).then(function (data) {
//         // Log the data to the console
//         // You would do something with both sets of data here
//         console.log(data);
//     }).catch(function (error) {
//         // if there's an error, log it
//         console.log(error);
//     })};
    


    render() {
        
        return (
            <>
                <Container>
                    <Card.Body>
                        <Form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <h1>Users</h1>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.firstName}
                                            onChange={this.changeHandler}
                                            name="firstName"
                                            required
                                            placeholder="First Name"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Surname</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.surname}
                                            onChange={this.changeHandler}
                                            name="surname"
                                            required
                                            placeholder="Surname"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Other Names</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.otherName}
                                            onChange={this.changeHandler}
                                            name="otherName"
                                            required
                                            placeholder="Other Names"
                                        />

                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Fullname</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.fullName}
                                            onChange={this.changeHandler}
                                            name="fullName"
                                            required
                                            placeholder="Fullname"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date Of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={this.state.dob}
                                            onChange={this.changeHandler}
                                            name="dateOfBirth"
                                            id="defaultFormRegisterPasswordEx4"
                                            placeholder="Date Of Birth"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter Date Of Birth!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={this.state.gender}
                                            onChange={this.changeHandler}
                                            name="gender"
                                            placeholder="Gender"
                                            required
                                        >
                                            <div className="invalid-feedback">
                                                Enter Prospect Date!
                                            </div>
                                            <option
                                                value=""
                                                selected="selected"
                                            >
                                                --
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Marital Status</Form.Label>
                                        <Form.Control
                                            as="select"
                                            // value={this.state.maritalStatusId}
                                            onChange={this.changeHandler}
                                            // name="maritalStatusId"
                                            // placeholder="Gender"
                                            required
                                        >
                                            <div className="invalid-feedback">
                                                Enter Prospect Date!
                                            </div>
                                            {this.state.maritals && this.state.maritals.map((marital) => (
                                                <option value={this.state.groupId} name="groupId">{marital.name}</option>

                                                ))}
                                        </Form.Control>
                                    </Form.Group>


                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>NIN</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.nationalIdNumber}
                                            onChange={this.changeHandler}
                                            name="nationalIdNumber"
                                            required
                                            placeholder="National Id Numner"
                                        />
                                        <div className="invalid-feedback">
                                            Required!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>
                                            Work Email Address
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter work email"
                                            value={this.state.workEmail}
                                            onChange={this.changeHandler}
                                            name="workEmail"
                                        />
                                        <div className="invalid-feedback">
                                            Enter a valid email address!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>
                                            Personal Email Address
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter personal email"
                                            value={this.state.personalEmail}
                                            onChange={this.changeHandler}
                                            name="personalEmail"
                                        />
                                        <div className="invalid-feedback">
                                            Enter a valid email address!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.phoneNumbers}
                                            onChange={this.changeHandler}
                                            name="phoneNumbers"
                                            required
                                            placeholder="Enter phone numbers e.g. 0700237434, 0779883527"
                                        />
                                        <div className="invalid-feedback">
                                            Enter your primary phone number!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Staff ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.staffId}
                                            onChange={this.changeHandler}
                                            name="staffId"
                                            required
                                            placeholder="Enter staff ID"
                                        />
                                        <div className="invalid-feedback">
                                            Enter your staff ID!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Group ID</Form.Label>
                                        <Form.Control
                                           as="select" 
                                            onChange={this.changeHandler}
                                            // name="groupId"
                                            required 
                                        >
                                        <div className="invalid-feedback">
                                            Enter your group ID!
                                        </div>
                                        {this.state.groups && this.state.groups.map((group) => (
                                                <option value={this.state.groupId} name="groupId">{group.name}</option>

                                                ))}
                                                </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.changeHandler}
                                            name="password"
                                            required
                                            placeholder="Enter password"
                                        />
                                        <div className="invalid-feedback">
                                            Enter your password!
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Roles</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={this.state.roles}
                                            onChange={this.changeHandler}
                                            name="roles"
                                            required
                                            placeholder="Enter your roles"
                                        />
                                        <div className="invalid-feedback">
                                            Enter your roles!
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Button id="add-button" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Container>

                <Container>
                    <Card.Body>
                        <h1>Table</h1>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Fullname</th>
                                    <th>Staff ID</th>
                                    <th>Work email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users && this.state.users.map((user) => (
                                    <tr>
                                        <td>{user.fullName}</td>
                                        <td>{user.staffId}</td>
                                        <td>{user.workEmail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Container>
            </>
        );
    }
}
export default Users;
