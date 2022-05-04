import ProductCard from "../../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import CategoryFilter from "../../components/CategoryFilter";
import { listProducts } from "../../actions/productAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const KetchupSauce = () => {
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
                  { name: "Paicho Chilly sauce" },
                  { name: "Paicho Tomato Ketchup" },
                  { name: "Paicho Tomato Puree" },
                  { name: "Paicho Vinegar" },
                  { name: "Paicho Hot & Sweet" },
                  { name: "Paicho Soya Sauce" },
                ]}
                filter="Ketchup & Sauces"
              />
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {products &&
                  products
                    ?.filter((i) => i.category.name === "Katchup Sauce")
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

export default KetchupSauce;
