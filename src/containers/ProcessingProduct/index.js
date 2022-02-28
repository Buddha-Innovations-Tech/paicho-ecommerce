import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import CategoryFilter from "../../components/CategoryFilter";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import product__image from "../../assets/images/ProductImage.png";

const ProcessingProduct = () => {
 
  return (
    <>
      <NavBar />
      <section className="product">
        <Container>
          <Row>
            <Col md={3}>
              <CategoryFilter
                category={[
                  { name: "Paicho Mix Jam" },
                  { name: "Paicho Chuck" },
                  { name: "Khudo" },
                  { name: "Guava Juice" },
                  { name: "Mixed Fruit Juice" },
                  { name: "Paicho sweetcorn" },
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

export default ProcessingProduct;
