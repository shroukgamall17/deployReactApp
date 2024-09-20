import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../AxiosConfig/AxiosConfig";

export const productsAction = createAsyncThunk("products/getAll", async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
});

 const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder.addCase(productsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    // builder.addCase(productsAction.rejected,(state,action)=>{

    // })
    // builder.addCase(productsAction.pending,(state,action)=>{

    // })
  },
});

export default productSlice.reducer
