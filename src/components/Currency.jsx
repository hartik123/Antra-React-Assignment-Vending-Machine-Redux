import React from "react";
import { addMoney } from "../redux/features/vendingmachine/vendingmachineSlice";
import { useDispatch } from "react-redux";

const Currency = ({ currency, currentCount }) => {
  const dispatch = useDispatch();
  const handleAddCurrencyClick = () => {
    dispatch(addMoney(currency));
  };
  return (
    <button onClick={handleAddCurrencyClick}>
      <span style={{fontSize:"1.2rem", fontWeight:"bolder"}}>+${currency.currenciesDisplay}</span>
      <br />
      <span style={{fontSize:"1rem", fontWeight:"bold"}}>{currentCount > 0 ?  "x "+currentCount  : null}</span>
    </button>
  );
};

export default Currency;
