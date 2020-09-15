import React from "react";
import {} from "antd";
import { Col, Container, Row } from "reactstrap";

export default function HeaderComponent() {
  return (
    <div className="header-component">
      <Container fluid>
        <Row>
          <Col>
            <div className="header-component__top">Header top here</div>
            <div className="header-component__bottom">header bottom here</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
