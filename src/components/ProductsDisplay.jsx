import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProductsDisplay.css";
import Product from "../components/Product";
import { updateProductCount } from "../redux/features/vendingmachine/vendingmachineSlice";

const ProductsDisplay = () => {
  const inventory = useSelector((state) => state.vendingMachine.initialItems);
  const [productCount, setProductCount] = useState({});
  const dispatch = useDispatch();

  const handleProductCount = (product) => {
    dispatch(updateProductCount({id:product.id, price: product.price}));
  };

  return (
    <div className="products-collection">
      {inventory.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            className="item"
            productClick={() => handleProductCount(product)}
          />
        );
      })}
    </div>
  );
};

export default ProductsDisplay;
