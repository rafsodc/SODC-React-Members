import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Col, Container, Row} from "react-bootstrap";

const loading = () => {
  return (
    <Container className={"h-100"}>
      <Row className="justify-content-md-center align-items-center loading">
        <Col md="auto">
          <Spinner animation="border" role="status" className={"spinner"}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  );
}

export default loading;