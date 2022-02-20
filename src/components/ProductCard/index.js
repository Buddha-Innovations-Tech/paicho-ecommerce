import Card from "react-bootstrap/Card";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, stock, imageSource, path }) => {
  return (
    <>
      <Card className="product__card">
        <Link to={`${path}`}>
          <Card.Img
            variant="top"
            src={imageSource}
            className="img-fluid product__card--image"
            alt="product"
          />
        </Link>

        <Card.Body className="product__card--body">
          <Card.Title className="product__card--body--title">
            <span className="product__card--body--title--heading">{name}</span>
            <FiHeart className="product__card--body--title--icon" />
          </Card.Title>
          <Card.Text className="product__card--body--price">
            <span className="price">Rs {price}</span>
            <span className="product__card--body--price-inout"> {stock}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
