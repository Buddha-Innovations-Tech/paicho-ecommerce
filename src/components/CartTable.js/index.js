import React from "react";
import { InputGroup, Table } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import Productimage from "../../assets/images/ProductImage.png";
import IncrementDecrement from "../IncrementDecrement";
import { CgChevronDoubleLeft } from "react-icons/cg";
import { Link } from "react-router-dom";

const CartTable = ({ icon, tableheading, btnnn }) => {
  const mainTableData = [
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
  ];
  return (
    <>
      <div className="carttable">
        <div className="d-flex justify-content-between align-items-center">
          <div className="carttable__heading d-flex align-items-center">
            <InputGroup.Checkbox />
            <span className="carttable__heading--selectitem">
              Select All(3 items)
            </span>
          </div>
          <div className="carttable__heading d-flex align-items-center">
            <RiDeleteBinLine className="carttable__heading--deleteicon" />
            <span className="carttable__heading--selectitem">
              <u>Clear Cart</u>
            </span>
          </div>
        </div>
        <div className="carttable__maintable">
          <Table>
            <tbody>
              <tr>
                <td style={{ paddingLeft: "60px" }}>Item List</td>
                <td>Unit</td>
                <td>Quantity</td>
                <td>Unit Cost</td>
                <td>{tableheading}</td>
                <td></td>
              </tr>
              {mainTableData.map((data, index) => {
                return (
                  <tr>
                    <td className="carttable__maintable--firstdata">
                      <div
                        className="d-flex align-items-center"
                        style={{ width: "225px" }}
                      >
                        <InputGroup.Checkbox />
                        <img src={data.img} alt="" />
                        <div>
                          <p>{data.productname}</p>
                          <span>Category:{data.category}</span>
                        </div>
                      </div>
                    </td>
                    <td>{data.unit}</td>
                    <td>
                      <IncrementDecrement />
                    </td>
                    <td>{data.unitcost}</td>
                    {window.location.href.includes("shoppingcart") && (
                      <td>Rs 500</td>
                    )}
                    {window.location.href.includes("wishlist") && (
                      <td>
                        {" "}
                        <button className="carttable__maintable--crossicon">
                          Add to Cart
                        </button>{" "}
                      </td>
                    )}
                    
                    <td className="carttable__maintable--deleteicon">
                      {icon}{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="carttable__pagination">
          <Link to="/">
            <CgChevronDoubleLeft className="me-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartTable;
