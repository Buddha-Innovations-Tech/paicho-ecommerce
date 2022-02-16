import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import banner__img from "../../assets/images/banner__img.png";

const OrganicVegetables = () => {
  return (
    <>
      <NavBar />
      <section className="pickle">
        <Container>
          <Row>
            <Col lg={6}>
              <Banner
                title="Quality Is Our Identity"
                para="Organic Food, Good Health , Good Mood "
              />
            </Col>
            <Col lg={6}>
              <div className="hero__banner">
                <img src={banner__img} className="hero__banner--img" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default OrganicVegetables;
