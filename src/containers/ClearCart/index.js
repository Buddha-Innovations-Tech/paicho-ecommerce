import { Col, Container, Row } from "react-bootstrap";
import Clear from "../../assets/images/clear__cart.png";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const ClearCart = () => {
  return (
    <>
      <NavBar />
      <section className="clear__cart">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="clear__cart--title">Your Cart is Clear...</div>
              <div className="clear__cart--image">
                <img src={Clear} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ClearCart;
