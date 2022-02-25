import { Col, Container, Row } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md={3} className="footer__blocks footer__blocks--about">
              <h5 className="footer__blocks--header mb-30">
                About Paicho Pasal{" "}
              </h5>
              <p className="footer__blocks--content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit leo
                consequat tincidunt tortor risus, mattis enim varius. Pulvinar
                molestie
              </p>
            </Col>
            <Col md={3} className="footer__blocks footer__blocks--quick-links">
              <h5 className="footer__blocks--header mb-30">Quick Links </h5>
              <ul className="clearfix footer__blocks--content">
                <li className="mb-10">
                  <a href="/about">About Paicho </a>
                </li>
                <li className="mb-10">
                  <a href="#">Return & Refund Policy</a>
                </li>
                <li className="mb-10">
                  <a href="#">Terms & Condition</a>
                </li>
                <li className="mb-10">
                  <a href="#">Privacy Policy </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer__blocks footer__blocks--contact">
              <h5 className="footer__blocks--header mb-30">
                Customer Support{" "}
              </h5>

              <ul className="clearfix footer__blocks--content">
                <li className="mb-20">
                  {" "}
                  <FaPhoneAlt className="icon mr-13" />
                  071-540545, 986745345
                </li>
                <li className="mb-20">
                  <FaEnvelope className="icon mr-13" />
                  paichopasal@gmail.com
                </li>
                <li className="mb-20">
                  {" "}
                  <FaMapMarkerAlt className="icon mr-13" />
                  Milanchowk , Butwal{" "}
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer__blocks footer__blocks--social-media">
              <h5 className="footer__blocks--header mb-30">
                Social Media Links{" "}
              </h5>
              <p className="footer__blocks--content">
                <FaFacebook className="icon mr-13" />
                <RiInstagramFill className="icon mr-13" />
                <FaTwitter className="icon" />
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="footer__bottom">
                <div className="footer__bottom--center">
                  <span>Copyright © Paicho Pasal 2022  |  All Right Reserved</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
