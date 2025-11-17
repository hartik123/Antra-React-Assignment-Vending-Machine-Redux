import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/features/vendingmachine/vendingmachineSlice";

const ShowSelectedProducts = () => {
  const dispatch = useDispatch();
  const selectedProductCount = useSelector(
    (state) => state.vendingMachine.productCountState
  );

  const handleItemRemove = (id, count) => {
    dispatch(removeItem({ "id": id, "count": count }));
  };
  return (
    <div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {Object.keys(selectedProductCount).map((productId) => {
          return (
            <div key={productId}>
              ID: {productId}, Count: {selectedProductCount[productId]["count"]}{" "}
              <button
                onClick={() =>
                  handleItemRemove(
                    productId,
                    selectedProductCount[productId]["count"]
                  )
                }
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowSelectedProducts;
