import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language"
import counterReducer from "./slices/counter"
import loaderReducer from "./slices/loader"
import productsReducer from "./slices/products"



const store =configureStore({

  reducer:{
    language: languageReducer,
    counter: counterReducer,
    loader: loaderReducer,
    products:productsReducer
  }
  //language :{language:en}
  //counter:{counter:0}
  //loader:{loader:false}
})
export default store
