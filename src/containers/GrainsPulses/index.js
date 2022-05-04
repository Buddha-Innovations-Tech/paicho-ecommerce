import ProductCard from "../../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import product__image from "../../assets/images/ProductImage.png";
import CategoryFilter from "../../components/CategoryFilter";
import { listProducts } from "../../actions/productAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GrainsPulses = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <section className="product">
        <Container>
          <Row>
            <Col md={3}>
              <CategoryFilter
                category={[
                  { name: "Paicho Chamal" },
                  { name: "Paicho Daal" },
                  { name: "Phapar Dana" },
                  { name: "Kodo Ko Pitho" },
                  { name: "Paicho Sweet Backwheat Pitho" },
                  { name: "Paicho Gahat Dana" },
                ]}
                filter="Grains & Pulses"
              />
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {products &&
                  products
                    ?.filter((i) => i.category.name === "Grain And Pulses")
                    .map((curElm, index) => {
                      return (
                        <Col md={4}>
                          <ProductCard key={index} {...curElm} />
                        </Col>
                      );
                    })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default GrainsPulses;
