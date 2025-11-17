import { createSlice } from "@reduxjs/toolkit";

// import { initialItems } from "../../../data/data";

const initialItems = [
    { id: '1', name: 'Chocolate', price: 1.5, stock: 3 },
    { id: '2', name: 'Soda', price: 1.0, stock: 5 },
    { id: '3', name: 'Cookies', price: 0.75, stock: 4 },
    { id: '4', name: 'Chips', price: 1.25, stock: 2 },
    { id: '5', name: 'Fruit', price: 1.5, stock: 3 },
    { id: '6', name: 'Coke', price: 1.0, stock: 5 },
    { id: '7', name: 'Water', price: 0.75, stock: 4 },
    { id: '8', name: 'Candies', price: 1.25, stock: 2 },
];

const initialMoneyState = {
}

const initialProductState = {}

export const vendingSlice = createSlice({
    name: "vendingmachine",
    initialState: {
        initialItems: initialItems,
        productCountState: initialProductState,
        moneyState: initialMoneyState,
        lastChange: 0
    },
    reducers: {
        addItem: (state) => {

        },
        removeItem: (state, action) => {
            console.log(action)
            const productId = action.payload.id;
            const countToRemove = action.payload.count;
            delete state.productCountState[productId];
            const item = state.initialItems.find(item => productId == item.id);
            item.stock += countToRemove;
        },
        updateItem: (state) => {

        },
        updateProductCount: (state, action) => {
            const productId = action.payload.id;
            state.productCountState[productId] = {count: (state.productCountState[productId]?.["count"] || 0) + 1, price: action.payload.price};
        },
        addMoney: (state, action) => {
            const { currenciesDisplay: moneyLabel, value } = action.payload;
            if (!state.moneyState[value]) {
                state.moneyState[value] = 0;
            }
            state.moneyState[value] += 1;
        },
        buyItems: (state) => {
            let currencyTotal = 0;
            Object.keys(state.moneyState).forEach(moneyLabel => {
                const totalForParticularCurrency = moneyLabel * state.moneyState[moneyLabel];
                currencyTotal += totalForParticularCurrency;
            })
            console.log("currencyTotal", currencyTotal);

            let productTotal = 0;

            Object.keys(state.productCountState).forEach(productId => {
                const pdt_count = state.productCountState[productId]["count"];
                const pdt_price = state.productCountState[productId]["price"];
                productTotal += pdt_count * pdt_price;
            });

            console.log("productTotal", productTotal);

            let itemAvailabilityShortage = "";
            Object.keys(state.productCountState).forEach(productId => {
                const item = state.initialItems.find(item => item.id === productId);
                const shortageCount = item.stock - state.productCountState[productId]["count"]
                if (shortageCount < 0) {
                    itemAvailabilityShortage += `${item.name} ${shortageCount} \n\n`;
                }
            })
            if (itemAvailabilityShortage !== "") {
                alert(`Please reduce count of following items: \n\n ${itemAvailabilityShortage}`);
                return
            }

            const change = productTotal - currencyTotal;
            if (change > 0) {
                alert(`Please add more ${change}$`);
                return;
            }
            else {
                Object.keys(state.productCountState).forEach((productId) => {
                    const item = state.initialItems.find(item => item.id === productId);
                    item.stock -= state.productCountState[productId]["count"];
                })
                state.productCountState = {};
                Object.keys(state.moneyState).forEach(moneyLabel => {
                    state.moneyState[moneyLabel] = 0;
                })
                if (change < 0)
                    alert(`Please take the product and take the change of ${-1 * change}`);
                else {
                    alert(`Please take the product`);
                }
                state.lastChange = -1 * change;
            }

        }
    }

})

export const { addItem, removeItem, updateItem, updateProductCount, addMoney, buyItems } = vendingSlice.actions;
export default vendingSlice.reducer;

