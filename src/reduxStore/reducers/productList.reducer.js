import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";

export const productsSlice = createSlice({
    name: "productList",
    initialState: {},
  reducers: {
    updateProductList: (state, action) => {
      state.productList = action.payload;
  },
  addProduct: (state, action) => {
    const { date, productType, productName, productPrices } = action.payload;
    const latestRecord = Object.keys(state.productList).sort().pop();
    const latestData = state.productList[latestRecord];

    if (!state.productList[date]) {
      state.productList[date] = { ...latestData };
    }

    state.productList[date] = {
      ...state.productList[date],
      [productType]: {
        ...state.productList[date][productType],
        [productName]: productPrices,
      },
    };
    addCollectionAndDocuments("Products", date, state.productList[date]);
  },
  },
});

    export const { addProduct, updateProductList } = productsSlice.actions;
    export const productReducer = productsSlice.reducer;
