import { Container, Row, Col } from "react-bootstrap";
import AccountSideNav from "../../components/AccoountSideNav";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Table } from "react-bootstrap";
import Productimage from "../../assets/images/ProductImage.png";

const OrderHistory = () => {
  return (
    <>
      <NavBar />
      <section className="order__history">
        <Container>
          <Row>
            <Col lg={2}>
              <AccountSideNav />
            </Col>
            <Col lg={10}>
              <div className="order__history--title">
                <div className="box">
                  <span className="heading">My Order History </span>
                </div>
                <div className="order__history--table">
                  <Table>
                    <tbody>
                      <tr>
                        <td style={{ paddingLeft: "60px" }}>Item Name</td>
                        <td>Date</td>
                        <td>Ship to </td>
                        <td>Status</td>
                        <td>Total Price</td>
                        <td>Action</td>
                      </tr>

                      <tr>
                        <td className="order__history--table-data">
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "225px" }}
                          >
                            <img src={Productimage} alt="" />
                            <div>
                              <p>Mango Pickle</p>
                              <span>Category: Paicho Pickle</span>
                            </div>
                          </div>
                        </td>
                        <td>2022-01-24 </td>
                        <td>Esta Kunwar </td>
                        <td className="deliver">Delivered</td>
                        <td>Rs. 1500</td>
                        <td className="cancel">Cancel Order</td>
                      </tr>

                      <tr>
                        <td className="order__history--table-data">
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "225px" }}
                          >
                            <img src={Productimage} alt="" />
                            <div>
                              <p>Mango Pickle</p>
                              <span>Category: Paicho Pickle</span>
                            </div>
                          </div>
                        </td>
                        <td>2022-01-24 </td>
                        <td>Esta Kunwar </td>
                        <td className="cancel">Cancelled</td>
                        <td>Rs. 1500</td>
                        <td className="reorder">Re Order</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default OrderHistory;
