import Card from "react-bootstrap/Card";
import product__image from "../../assets/images/ProductImage.png";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ name, price, stock }) => {
  return (
    <>
      <Card className="product__card">
        <Card.Img
          variant="top"
          src={product__image}
          className="img-fluid product__card--image"
          alt="product"
        />

        <Card.Body className="product__card--body">
          <Card.Title className="product__card--body--title">
            <span className="product__card--body--title--heading">{name}</span>
            <FiHeart className="product__card--body--title--icon" />
          </Card.Title>
          <Card.Text className="product__card--body--price">
            <span>Rs {price}</span>
            <span className="product__card--body--price-inout"> {stock}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
