import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/slices/language";
import { colorContext } from "../../contexts/colorContext";

export default function Home() {
  const lang = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    dispatch(changeLanguage(lang == "en" ? "ar" : "en"));
  };

  const changeColor=()=>{
  setColor((color == 'black')?'white':'black')
  }
  const {color,setColor} =useContext(colorContext)

  return (
    <>
      Home language is {lang}
      <br></br>
      and
      <br></br>
      color is {color}
      hello from deployment
      <br></br>
      <button
        className="btn btn-success"
        onClick={() => {
          toggleLanguage();
        }}
      >
        change language
      </button>
      <button className="btn btn-primary" onClick={() => {
        changeColor()
      }}>
        {" "}
        change color
      </button>
    </>
  );
}
