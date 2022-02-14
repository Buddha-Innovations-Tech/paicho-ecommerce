import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPhoto from "../../assets/images/productdetail.png";
import Slider from "react-slick";
import Mangopickle from "../../assets/images/mango-pickle.png";

const ProductDetailComp = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
  return (
    <>
      <div className="product">
        <Container>
          <Row className="product__rows">
            <Col md={5}>
              <div className="product__image" >
                <img src={ProductPhoto} alt="" className="img-fluid" />
              </div>
              <div className="product__sliders">
              <Slider {...settings}>
          <div>
            <img src={Mangopickle} alt="" />
          </div>
          <div>
            <img src={Mangopickle} alt="" />
          </div>
          <div>
            <img src={Mangopickle} alt="" />
          </div>
          <div>
            <img src={Mangopickle} alt="" />
          </div>
          <div>
            <img src={Mangopickle} alt="" />
          </div>
          </Slider>

              </div>

            </Col>
            <Col md={7}>
              <div className="product__heading">
                <p className="product__heading--main">Mango Pickle </p>
                <span className="product__heading--span">
                  Category : Paicho Pickle | Product ID : 3021
                </span>
              </div>
              <div className="product__price">
                <span className="product__price--totalprice">Price:Rs180</span>
                <p className="product__price--stock">IN STOCK</p>
              </div>

              <div className="product__inc-dec d-flex">
                <p className="product__inc-dec--quantity">Quantity</p>
                <div className="ms-5 product__inc-dec--button">
                  <table>
                    <tr>
                      <td className="product__inc-dec--button--dec">-</td>
                      <td className="product__inc-dec--button--num">3</td>
                      <td className="product__inc-dec--button--dec">+</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="product__btns">
                <Link to="" className="product__btns--addtocart">
                  Add To Cart
                </Link>
                <Link to="" className="product__btns--buynow">
                  Buy Now
                </Link>
              </div>

              <div className="product__lists">
                <p>About this Item </p>
                <ul>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="product__description">
          <Container>
            <Row>
              <Col md={10}>
                <p className="product__description--heading">Description of the Product</p>
                <p className="product__description--descriptionpara">
                  Eastern philosophy has described much about the significance
                  of pickle. Though less, it is inevitable part of our meal.
                  Spicy, bitter, sour taste pickle speaks of significance of
                  Nepali meal. It helps to crave for more food even if you have
                  no appetite for it. It adds taste to food by two folds. The
                  regular and balanced consumption of pickle also helps in
                  weight loss because it contains few calories.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ProductDetailComp;
