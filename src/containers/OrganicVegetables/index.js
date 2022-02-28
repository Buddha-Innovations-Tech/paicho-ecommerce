import ProductCard from "../../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import CategoryFilter from "../../components/CategoryFilter";
import product__image from "../../assets/images/ProductImage.png";

const OrganicVegetables = () => {
  return (
    <>
      <NavBar />
      <section className="product">
        <Container>
          <Row>
            <Col md={3}>
              <CategoryFilter
                category={[
                  { name: "Fresh Tomatoes" },
                  { name: "Cauliflower" },
                  { name: "Chillies" },
                  { name: "Dalle Khursani" },
                  { name: "Cabbage" },
                  { name: "Potatoes" },
                  { name: "Fresh Spring Onion" },
                ]}
              />
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                <Col md={4}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
                <Col md={4} className="red">
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="out of stock"
                    imageSource={product__image}
                    path="/outofstock"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
                <Col md={4} className="red">
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="out of stock"
                    imageSource={product__image}
                    path="/outofstock"
                  />
                </Col>
                <Col md={4}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default OrganicVegetables;
