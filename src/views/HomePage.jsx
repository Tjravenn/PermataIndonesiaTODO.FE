import Category from "../components/Category";
import Todo from "../components/Todo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function HomePage() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <Container style={{ padding: "2rem" }}>
        <Row>
          <Col>
            <Category />
          </Col>
          <Col>
            <Todo />
          </Col>
        </Row>
      </Container>
      <Nav.Link
        className="btn btn-outline-light btn-lg px-5 bg-dark text-white"
        onClick={handleLogout}
      >
        Log out
      </Nav.Link>
    </>
  );
}

export default HomePage;
