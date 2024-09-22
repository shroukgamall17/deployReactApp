import React from "react";
import Header from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Todo 
export default function AppLayout() {
  const lang = useSelector((state) => state.language.language);
  //en ltr
  //ar rtl
  return (
    <>
      <div dir={`${lang == "en" ? "ltr" : "rtl"}`}>
        <Header />
        <Todo></Todo>
        <Outlet></Outlet>
      </div>
    </>
  );
}
