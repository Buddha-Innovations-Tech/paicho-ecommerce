import React, { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";
import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productAction";
import { useLocation, useParams } from "react-router-dom";
import CategoryFilter from "../../components/CategoryFilter";
import { listCategories } from "../../actions/categoryAction";

const KetchupSauce = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const name = params.name;
  const location = useLocation();
  const data = location.state;

  const { products } = useSelector((state) => state.productList);
  const { categories } = useSelector((state) => state.categoryList);
  const [checked, setChecked] = useState(false);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [display, setDisplay] = useState([]);
  const [subCategories, setSubcategories] = useState([]);
  const handlePriceRange = (e) => {
    e.preventDefault();
    setDisplay(products.filter((x) => x.price >= min && x.price <= max));
    setMin("");
    setMax("");
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && !checked) {
      setDisplay(
        products.filter((i) => i.category && i.category.name === params.name)
      );
    }
  }, [products, params, checked]);

  useEffect(() => {
    if (data !== null) {
      setDisplay(
        products.filter((x) => {
          console.log(x);
          return x.subcategories === data;
        })
      );
    }
  }, [data]);

  const handleCheck = (e, subcat) => {
    setDisplay(products.filter((x) => x.subcategories === subcat));
    setChecked(e.target.checked);
  };
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories) {
      categories.forEach((item) => {
        if (item.name && item.name === name) {
          const subcategories = item.subcategories;
          setSubcategories(subcategories);
        }
      });
    }
  }, [categories, name]);
  useEffect(() => {
    if (checked === false) {
      setSubcategories([]);
      setTimeout(() => {
        categories.forEach((item) => {
          if (item.name && item.name === name) {
            const subcategories = item.subcategories;
            setSubcategories(subcategories);
          }
        });
      }, 100);
    }
  }, [checked]);

  return (
    <>
      <NavBar />
      <section className="product">
        <Container>
          <Row>
            <Col md={3}>
              <div className="category-wrapper">
                <p className="category-wrapper__filter">{params.name}</p>

                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid rgba(212, 215, 217, 0.5)",
                    padding: "17px 0px 2px 0",
                  }}
                >
                  <p className="category-wrapper__subcategory">Sub Category</p>
                  <p
                    className="category-wrapper__clearfilter"
                    onClick={() => setChecked(false)}
                  >
                    Clear-Filter
                  </p>
                </div>
                <ul>
                  {subCategories?.map((item, index) => {
                    return (
                      <li className="d-flex align-items-center" key={index}>
                        {/* <InputGroup.Checkbox
                          value={checked}
                          onChange={(e) => handleCheck(e, item.name)}
                        /> */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            value={
                              data === null
                                ? checked
                                : item.name === data
                                ? checked
                                : false
                            }
                            checked={item.name === data ? true : false}
                            onChange={(e) => handleCheck(e, item.name)}
                          />
                          <label
                            className="form-check-label ml-16 ms-2"
                            htmlFor="gridRadios2"
                          >
                            {item.name}
                          </label>
                        </div>

                        {/* <span className="ms-1">{item.name}</span> */}
                      </li>
                    );
                  })}
                </ul>
                <p className="category-wrapper__price">Price</p>
                <div className="d-flex category-wrapper__minmax">
                  <div>
                    <p>Min</p>
                    <InputGroup>
                      <FormControl
                        type="number"
                        placeholder="0"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                  <div className="ms-1">
                    <p>Max</p>
                    <InputGroup>
                      <FormControl
                        type="number"
                        placeholder="0"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                </div>
                <div className="category-wrapper__buttons">
                  <button
                    className="category-wrapper__buttons--apply"
                    onClick={handlePriceRange}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <Row className="product__row gy-4">
                {display &&
                  display.map((curElm, index) => {
                    return (
                      <Col md={4}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
                {/* {!checked ? (
                  <>
                    {products &&
                      products
                        ?.filter(
                          (i) => i.category && i.category.name === params.name
                        )

                        .map((curElm, index) => {
                          return (
                            <Col md={4}>
                              <ProductCard key={index} {...curElm} />
                            </Col>
                          );
                        })}
                  </>
                ) : (
                  <>
                    {products &&
                      products
                        .filter((x) => {
                          return (
                            x.category && x.category.subcategory === checked
                          );
                        })

                        .map((curElm, index) => {
                          return (
                            <Col md={4}>
                              <ProductCard key={index} {...curElm} />
                            </Col>
                          );
                        })}
                  </>
                )} */}
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
