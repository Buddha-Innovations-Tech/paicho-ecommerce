import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import CategoryFilter from "../../components/CategoryFilter";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productAction";
import ProductCard from "../../components/ProductCard";
const PaichoDryFoods = () => {
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
                  { name: "Paicho Alaichi" },
                  { name: "Paicho Aaapko Chana" },
                  { name: "Phapar Bakulla Dana" },
                  { name: "Kodo Barro" },
                  { name: "Paicho Besaar" },
                  { name: "Paicho Bhango" },
                  { name: "Paicho Sukeko Dalle" },
                  { name: "Paicho Dry Apple" },
                  { name: "Paicho Sukeko Karela" },
                ]}
                filter="Dry Foods"
              />
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {products &&
                  products
                    ?.filter((i) => i.category.name === "Paich Dry Foods")
                    .map((curElm, index) => {
                      return (
                        <Col md={3}>
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

export default PaichoDryFoods;
