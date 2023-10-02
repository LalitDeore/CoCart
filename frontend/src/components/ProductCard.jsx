import React from "react";
import "../componentsCSS/ProductCard.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { Button } from "@mui/material";
import { useAppContext } from "../Shares/ContextFile";
import { ToastContainer, toast } from "react-toastify";
import StarRating from "./StarRating";

const ProductCard = ({ Earphones, addToCartClick }) => {
  const { cartItem, setCartItem } = useAppContext();

  const addToCartEventHandler = () => {
    const newItem = {
      name: Earphones.name,
      price: Earphones.price,
      star: Earphones.star,
      src: Earphones.src,
      quantity: 1,
    };

    setCartItem([...cartItem, newItem]);
    toast.promise(Promise.resolve(), {
      success: `${Earphones.name} added to cart successfully`,
      type: "success",
      autoClose: 3000,
    });
  };

  return (
    <React.Fragment>
      <div className="product-card">
        <img src={Earphones.src} alt="" height={150} width={300} />
        <h3>{Earphones.name}</h3>
        <div className="rating">
          <span>
            <StarRating star={Earphones.star} />
          </span>
          <span className="review">({Earphones.customerReviews} Reviews)</span>
        </div>
        <div className="button-container">
          <button className="purchase-button">
            <BsCurrencyRupee className="rupee-icon" />
            <span>{Earphones.price}</span>
          </button>
          <Button
            className="card-button"
            onClick={addToCartEventHandler}
            style={{ textTransform: "none" }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default ProductCard;
