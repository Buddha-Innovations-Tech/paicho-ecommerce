import ProductCard from "../../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import CategoryFilter from "../../components/CategoryFilter";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productAction";

const IndeginousProduct = () => {
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
                  { name: "Paicho Sinki" },
                  { name: "Paicho Masyaura" },
                  { name: "kabuno" },
                  { name: "Nettle Powder" },
                ]}
                filter="Indengious Products"
              />
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {products &&
                  products
                    ?.filter((i) => i.category.name === "Indeginous Products")
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

export default IndeginousProduct;
