import { configureStore } from "@reduxjs/toolkit";
import vendingMachineSliceReducer from "./features/vendingmachine/vendingmachineSlice";

export const store = configureStore({
    reducer:{
        vendingMachine: vendingMachineSliceReducer,
    },
})