import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Placeholder from "react-bootstrap/Placeholder";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../../store/slices/products";
export default function Products() {


  const navigate = useNavigate();
  const loader = useSelector((state) => state.loader.loader);

  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.products);

  useEffect(() => {
    dispatch(productsAction());
  }, []);

  return (
    <Fragment>
      {loader ? (
        <div className="d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </div>
      ) : (
        <Row xs={1} md={4} className="g-4">
          {products.map((prd) => (
            <Col key={prd.id}>
              <Card>
                <Card.Img variant="top" src={prd.image} />
                <Card.Body>
                  <Card.Title>{prd.title}</Card.Title>
                  <Card.Text>{prd.description}</Card.Text>
                </Card.Body>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate(`/productDetails/${prd.id}`);
                  }}
                >
                  {" "}
                  details
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
}
