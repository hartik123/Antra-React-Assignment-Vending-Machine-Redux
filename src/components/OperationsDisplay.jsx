import React, { useState } from "react";
import Currency from "./Currency";
import "./OperationsDisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { buyItems } from "../redux/features/vendingmachine/vendingmachineSlice";
import ShowSelectedProducts from "./ShowSelectedProducts";

const currencies = [
  {
    currenciesDisplay: 0.5,
    value: 0.5,
  },
  {
    currenciesDisplay: 1.0,
    value: 1.0,
  },
  {
    currenciesDisplay: 5.0,
    value: 5.0,
  },
];

const OperationsDisplay = () => {
  const selectedProducts = useSelector(
    (state) => state.vendingMachine.productCountState
  );
  const moneyCount = useSelector((state) => state.vendingMachine.moneyState);
  const change = useSelector((state) => state.vendingMachine.lastChange);

  const dispatch = useDispatch();

  const handleBuy = () => {
    console.log(selectedProducts, moneyCount);
    dispatch(buyItems());
  };

  return (
    <div className="operations-display">
      <div className="selected-item">
        <h2>Selected Item</h2>
        <ShowSelectedProducts />
      </div>

      <div className="money-display">
        <h2>Insert Money</h2>
        <div className="currencies">
          {currencies.map((currency, idx) => {
            return (
              <Currency
                key={idx}
                currency={currency}
                currentCount={moneyCount[currency.currenciesDisplay]}
              />
            );
          })}
        </div>
      </div>

      <div>
        <button className="buy-btn" onClick={handleBuy}>
          BUY
        </button>
      </div>

      <div className="pick-product">
        <h2>Pick Product</h2>
      </div>

      <div className="money-change">
        <h2>Take Change</h2>
        <span style={{ fontSize: "1.5rem" }}>
          {change !== 0 ? `$ ${change}` : ""}
        </span>
      </div>
    </div>
  );
};

export default OperationsDisplay;
