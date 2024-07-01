import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import ColorList from './components/ColorList/ColorList';
import ColorForm from './components/ColorForm/ColorForm';

function App() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ColorList />
        </Col>
        <Col md={6}>
          <ColorForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
