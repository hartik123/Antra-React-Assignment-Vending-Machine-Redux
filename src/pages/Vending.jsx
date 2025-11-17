import React, { useEffect, useState } from "react";

import "./Vending.css";
import ProductsDisplay from "../components/ProductsDisplay";
import OperationsDisplay from "../components/OperationsDisplay";

const Vending = () => {

  return (
    <>
      <div className="vending-machine">
        <div className="products-display">
          <ProductsDisplay />
        </div>
        <div className="operation-display">
          <OperationsDisplay />
        </div>
      </div>
    </>
  );
};

export default Vending;
