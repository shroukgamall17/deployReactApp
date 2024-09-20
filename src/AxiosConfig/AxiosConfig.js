import axios from "axios";
import store from "../store/store";
import { changeLoader } from "../store/slices/loader";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});


//interceptors

//request interceptors
axiosInstance.interceptors.request.use(
  (config) => {
   // console.log(config);

store.dispatch(changeLoader(true))

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//response interceptors
axiosInstance.interceptors.response.use(
  (res) => {
    store.dispatch(changeLoader(false))
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axiosInstance;
