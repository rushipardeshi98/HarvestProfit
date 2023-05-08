import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import {
  CardImg,
  CardGroup,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
} from "reactstrap";

import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/11.jpg";

function Table() {
  return (
    <>
      <Topbar />
      <Row>
        <Col className="col-3">
          <Sidebar />
        </Col>
        <Col>
          <div className="featured">
            <div className="featuredItem">
              <span className="featuredTitle">TODAY SALES</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">1</span>
              </div>
            </div>
            <div className="featuredItem">
              <span className="featuredTitle">YESTERDAY SALES</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">1</span>
              </div>
            </div>
            <div className="featuredItem">
              <span className="featuredTitle">LAST 7 DAYS SALES</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">1</span>
              </div>
            </div>
            <div className="featuredItem">
              <span className="featuredTitle">ALL TIME SALES</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">1</span>
              </div>
            </div>
          </div>
          <br />

          <div>
            <CardGroup>
              <Card
                className="mx-2"
                style={{ boxShadow: "0 0 9px rgba(0, 0, 1)" }}
              >
                <CardImg top width="100%" src={img5} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="text-center"></CardTitle>

                  <CardText className="text-center">
                    "Without farmers, no country can progress."
                  </CardText>
                </CardBody>
              </Card>
              <Card
                className="mx-2"
                style={{ boxShadow: "0 0 9px rgba(0, 0, 1)" }}
              >
                <CardImg top width="100%" src={img6} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="text-center"></CardTitle>

                  <CardText className="text-center">
                    "No discipline seems pleasant at the time, but later it
                    produces a harvest of righteousness."
                  </CardText>
                </CardBody>
              </Card>
              <Card
                className="mx-2"
                style={{ boxShadow: "0 0 9px rgba(0, 0, 1)" }}
              >
                <CardImg top width="100%" src={img7} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="text-center"></CardTitle>

                  <CardText className="text-center">
                    "A better fruitful future to the farmers who grow us
                    healthier."
                  </CardText>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Table;