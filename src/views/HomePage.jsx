import Category from "../components/Category";
import Todo from "../components/Todo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HomePage() {
  return (
    <>
    <Container style={{padding: '2rem'}}>
      <Row>
        <Col><Category /></Col>
        <Col><Todo/></Col>
      </Row>
    </Container>
    </>
  );
}

export default HomePage;
