import "./ProductDescription.css";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useUserData } from "../../../../contexts/UserDataProvider";

export const ProductDescription = ({ selectedProduct }) => {
  const {
    addToCartHandler,
    
    cartLoading
  } = useUserData();
return (
    <div className="product-details-description">
      <h1 className="product-name">{selectedProduct?.name}</h1>

      <div className="ratings-reviews">
        <span></span>
        <span>{selectedProduct?.rating}</span>{" "}
        <BsFillStarFill color={"orange"} />
        <span>
          <span className="review">({selectedProduct?.reviews}) reviews </span>
        </span>
      </div>

      <div className="product-price-container">
        
        <span className="product-discount-price">
          {" "}
          &#x20B9;{selectedProduct?.discounted_price}
        </span>
      </div>

      <p className="description-container">
        <span>Description</span>: {selectedProduct?.description}
      </p>

      <span className="gender-container">
        <span>Gender</span>: {selectedProduct?.category_name}
      </span>
      <p className="size-container">
        <span>Size</span>: {selectedProduct?.size}
      </p>

      <div className="tags">
        {!selectedProduct?.is_stock && (
          <span className="out-of-stock">
            {selectedProduct?.is_stock ? "In Stock" : "Out of stock"}
          </span>
        )}
        {selectedProduct?.trending && (
          <span className="trending">
            {selectedProduct?.trending ? "Trending" : ""}
          </span>
        )}
      </div>
      <div className="product-card-buttons-container">
        <button disabled={cartLoading}
          
          className="add-to-cart-btn"
        > Add to Cart 
        </button>
        <button disabled={cartLoading}
          
          className="add-to-wishlist-btn"
        >
        Add to Wishlist 
        </button>
      </div>
    </div>
  );
};
