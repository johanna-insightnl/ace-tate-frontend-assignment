import React from 'react';
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import ColorList from './components/ColorList/ColorList';
import ColorForm from './components/ColorForm/ColorForm';
import { ColorProvider } from './contexts/ColorContext';

function App() {
  return (
    <ColorProvider>
      <Container fluid className="app-container">
        <Row>
          <Col md={6}>
            <ColorList />
          </Col>
          <Col md={6} className="second-column">
            <ColorForm />
          </Col>
        </Row>
      </Container>
    </ColorProvider>
  );
}

export default App;
