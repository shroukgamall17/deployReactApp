import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useRouteError } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../AxiosConfig/AxiosConfig";

export default function ProductDetails() {
const eachProduct=  useLoaderData()
console.log(eachProduct);

  return (

    <div>
      ProductDetails and pro id is
      <br />
      <Card>
        <Card.Img
          variant="top"
          src={eachProduct.image}
          style={{ width: "400px", height: "400px" }}
        />
        <Card.Body>
          <Card.Title>{eachProduct.title}</Card.Title>
          <Card.Text>{eachProduct.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export const loader = async (arg) => {
  console.log(arg);
  //const res = await axiosInstance.get(`/products/${arg.params.id}`);
  //return res.data;
};

