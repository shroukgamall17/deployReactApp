import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { colorContext } from "../../contexts/colorContext";

export default function AboutUs() {

 const {color,setColor} = useContext(colorContext)
  return (
    <>
    color is {color}
    <br></br>
    <button className="btn btn-danger" onClick={()=>{
      setColor((color == 'black')? 'white':'black')
    }}> change color</button>



    </>
  );
}
