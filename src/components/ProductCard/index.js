import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  deleteSingleWishlist,
} from "../../actions/wishListAction";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";
import { getSubscriberDetails } from "../../actions/subscriberaction";
import { BsCheck } from "react-icons/bs";

const ProductCard = ({
  _id,
  name,
  price,
  countInStock,
  image,
  path,
  previous,
  discount,
}) => {
  // const {}
  const dispatch = useDispatch();
  const { subscriber } = useSelector((state) => state.subscriberDetails);
  const { success: wishlistSuccess } = useSelector(
    (state) => state.wishlistCreate
  );
  const { success: wishlistDeleteSuccess } = useSelector(
    (state) => state.wishlistDelete
  );
  const [addIcon, setAddIcon] = useState(true);
  var discountData = price - (discount / 100) * price;
  const [showA, setShowA] = useState(false);
  const [show, setShow] = useState(false);
  const wishlistCreate = (id) => {
    dispatch(addToWishlist(id));
    setAddIcon(false);
    setShow(true);
  };
  const wishlistDelete = (id) => {
    dispatch(deleteSingleWishlist(id));
    setAddIcon(true);
    setShowA(true);
  };
  useEffect(() => {
    if (wishlistSuccess) {
      dispatch(getSubscriberDetails("profile"));
    }
  }, [wishlistSuccess]);
  useEffect(() => {
    if (wishlistDeleteSuccess) {
      dispatch(getSubscriberDetails("profile"));
    }
  }, [wishlistDeleteSuccess]);
  return (
    <>
      <Card className="product__card">
        <Link to={`/productdetail/${_id}`}>
          <Card.Img
            variant="top"
            src={image}
            className="img-fluid product__card--image"
            alt="product"
          />
        </Link>

        <Card.Body className="product__card--body">
          <Card.Title className="product__card--body--title">
            <span className="product__card--body--title--heading">{name}</span>
            {/* <FiHeart
              className="product__card--body--title--icon"
              onClick={() => {
                wishlistCreate(_id);
              }}
            /> */}
            {subscriber?.wishlists?.find((item) => item._id === _id) ? (
              <>
                <BsFillHeartFill
                  className="product__card--body--title--icon"
                  onClick={() => {
                    wishlistDelete(_id);
                  }}
                />
                <Toast
                  onClose={() => setShowA(false)}
                  show={showA}
                  delay={2000}
                  autohide
                >
                  <Toast.Body style={{ color: "#fff" }}>
                    Product has been deleted from Wishlist !{" "}
                    <BsCheck className="checkicon" />
                  </Toast.Body>
                </Toast>
              </>
            ) : (
              <>
                <FiHeart
                  className="product__card--body--title--icon"
                  onClick={() => {
                    wishlistCreate(_id);
                  }}
                />
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={2000}
                  autohide
                >
                  <Toast.Body style={{ color: "#fff" }}>
                    Product has been added to Wishlist !{" "}
                    <BsCheck className="checkicon" />
                  </Toast.Body>
                </Toast>
              </>
            )}
            {/* {addIcon ? (
              <FiHeart
                className="product__card--body--title--icon"
                onClick={() => {
                  wishlistCreate(_id);
                }}
              />
            ) : (
              <BsFillHeartFill
                className="product__card--body--title--icon"
                onClick={() => {
                  wishlistCreate(_id);
                }}
              />
            )} */}
          </Card.Title>
          <Card.Text className="product__card--body--price">
            <div>
              <span className="price">Rs {discountData}</span>
              <div className="newpricediv">
                <span className="previous_price">Rs{price}</span>
                <span className="new_price ms-3">-{discount} %</span>
              </div>
            </div>
            <span
              className="product__card--body--price-inout"
              style={{
                backgroundColor: countInStock !== 0 ? "#004f9a" : "#e84b23",
              }}
            >
              {countInStock !== 0 ? "In Stock" : "Out Of Stock"}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
