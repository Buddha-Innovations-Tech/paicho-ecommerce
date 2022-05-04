import { Col, Container, Row, InputGroup } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import CategoryFilter from "../../components/CategoryFilter";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { listProducts } from "../../actions/productAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../actions/categoryAction";

const ProcessingProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productList);
  const [data, setData] = useState({});
  const { categories } = useSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  useEffect(() => {
    if (categories) {
      categories.forEach((item) => {
        console.log(item);
        if (item.name && item.name === categories.name) {
          const subcategories = item.subcategories;
          setData((prevState) => {
            return { ...prevState, subcategories };
          });
        }
      });
    }
  }, [categories]);
  return (
    <>
      <NavBar />
      <section className="product">
        <Container>
          <Row>
            <Col md={3}>
              <div className="category-wrapper">
                <p className="category-wrapper__filter">Paicho Pickle</p>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid rgba(212, 215, 217, 0.5)",
                    padding: "17px 0px 2px 0",
                  }}
                >
                  <p className="category-wrapper__subcategory">Sub Category</p>
                  <p className="category-wrapper__clearfilter">Clear-Filter</p>
                </div>
                <ul>
                  {data.subcategories?.map((item, index) => {
                    return (
                      <li className="d-flex align-items-center" key={index}>
                        <InputGroup.Checkbox />
                        <span className="ms-1">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="category-wrapper__price">Price</p>
                <div className="d-flex category-wrapper__minmax">
                  <div>
                    <p>Min</p>
                    <input type="number" placeholder="0" />
                  </div>
                  <div className="ms-1">
                    <p>Max</p>
                    <input type="number" placeholder="0" />
                  </div>
                </div>
                <div className="category-wrapper__buttons">
                  <button className="category-wrapper__buttons--apply">
                    Apply
                  </button>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {products &&
                  products
                    ?.filter((i) => i.category.name === "Processing Products")
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

export default ProcessingProduct;
