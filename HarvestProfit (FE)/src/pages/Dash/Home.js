// import { render } from '@testing-library/react';
// import { Modal } from 'bootstrap';
import React from "react";
// import { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import Chart from '../../components/chart/Chart'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Table from "./Table";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "./Table";
import { Col, Row } from "reactstrap";

const Home = () => {
  return (
    <>
      <Topbar />
      <Row>
        <Col className="col-3">
          <Sidebar />
        </Col>
        <Col className="col-9">
          <Table />
        </Col>
      </Row>
    </>
  );
};

export default Home;
