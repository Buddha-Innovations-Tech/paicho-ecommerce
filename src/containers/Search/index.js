import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { listProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
const Search = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productList);

  const [searched, setSearched] = useState([]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const { productname } = useParams();

  useEffect(() => {
    const searchedProduct = products.filter((item) =>
      item.name.toLowerCase().includes(productname.toLocaleLowerCase())
    );
    setSearched(searchedProduct);
  }, [products, productname]);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="product__row gy-3 mt-4">
          {searched.length > 0 ? (
            searched.map((curElm, index) => {
              return (
                <Col md={3}>
                  <ProductCard key={index} {...curElm} />
                </Col>
              );
            })
          ) : (
            <p className="mt-5" style={{ fontSize: "25px", fontWeight: "600" }}>
              Searched product is not found in list
            </p>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
