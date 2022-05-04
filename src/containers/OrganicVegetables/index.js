import ProductCard from "../../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import CategoryFilter from "../../components/CategoryFilter";
import { listProducts } from "../../actions/productAction";

const OrganicVegetables = () => {
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
                  { name: "Fresh Tomatoes" },
                  { name: "Cauliflower" },
                  { name: "Chillies" },
                  { name: "Dalle Khursani" },
                  { name: "Cabbage" },
                  { name: "Potatoes" },
                  { name: "Fresh Spring Onion" },
                ]}
                filter="Organic Vegetales"
              />
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {products &&
                  products
                    ?.filter((i) => i.category.name === "Organic Vegetables")
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

export default OrganicVegetables;
