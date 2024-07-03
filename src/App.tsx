import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ColorProvider } from './contexts/ColorContext';
import ColorList from './components/ColorList/ColorList';
import ColorForm from './components/ColorForm/ColorForm';
import './styles/main.scss'

function App() {
  return (
    <ColorProvider>
      <Container fluid className="app-container">
        <Row className="h-100">
          <Col md={6} className="first-column">
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
