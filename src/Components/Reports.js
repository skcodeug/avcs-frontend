import React from 'react';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';

function Reports() {
    return (
        <div>
            <Container>
                <Row>
                    
                    <Col sm={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Other Names</th>
                                    <th>Client Category</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Tel No 1</th>
                                    <th>Tel No 2</th>
                                    <th>Employer</th>
                                    <th>Email 1</th>
                                    <th>Email 2</th>
                                    <th>Town/City</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                {/* <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </Col>
                   
                </Row>
            </Container>

        </div>
    )
};
export default Reports;


