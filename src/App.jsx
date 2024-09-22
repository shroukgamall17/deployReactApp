// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Header from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Products from "./Pages/Products/Products";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Values from "./Pages/AboutUs/Values/Values";
import Vision from "./Pages/AboutUs/Vision/Vision";
import ProductDetails, {
  loader as productDetailsLoader,
} from "./Pages/Products/ProductDetails";
import Login from "./Pages/Login/Login";
import LoginLib from "./Pages/Login/LoginLib";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ColorProvider } from "./contexts/colorContext";
import { useState } from "react";

// const routes =createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       { path: "contact", element: <ContactUs /> },
//       { path: "about", element: <AboutUs />,children:[
//         {path:"values", element:<Values></Values>}
//       ] },
//     ],

//   },
//   { path: "*", element: <NotFound /> },,
// ]);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: 
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <AboutUs />,
        children: [
          { index: true, element: <Values></Values> },
          { path: "vision", element: <Vision></Vision> },
        ],
      },
      { path: "contact", element: <ContactUs /> },
      { path: "products", element: <Products /> },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
        loader: productDetailsLoader,
        errorElement: (
          <>
            <h1>ERROR ^_^</h1>
          </>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
  ,
]);

function App() {
 const [color , setColor]= useState('black')


  //v 6.4
  return (
    <ColorProvider value={{color,setColor}}>

      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ColorProvider>
  );
}
{
  //v 6
  /* <BrowserRouter >
        <div className="container mx-5">
          <Header />
          <LoginLib />

          <Routes>
            <Route index element={<Home />} />

            <Route path="/about" element={<AboutUs />}>
              <Route index element={<Values />} />
              <Route path="vision" element={<Vision />} />
            </Route>

            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter> */
}

export default App;
