import React, { useState } from "react";
import { Button, Card, Col, Divider, Row } from "antd";
import { CiOutlined, PhoneTwoTone } from "@ant-design/icons";
import StackedBar from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import bg from "../Assets/bg.jpg";
import BarChart from "../Components/BarChart";

const cardStyling = {
  flex: "1 1 auto",
  padding: "1.25rem 1.25rem",
  backgroundColor: "#35a989",
  color: "white",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  border:'none',
};
const textRight = {
  fontSize: "16px",
  color: "#ffffff4d",
  fontWeight: "bold",
  position: "absolute",
  top: "80px",
  right: "-9px",
  letterSpacing: "2px",
  transform: "rotate(-90deg)",
  WebkitTransform: "rotate(-90deg)",
};
const iconClass = {
  fontSize: "4.5rem",
  position: "absolute",
  right: "56px",
  top: "-18px",
  color: "#ffffff4d",
};

const badge = {
  borderRadius: "3px",
  background: "#eff2f7",
  color: "#343a40",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
};
const callHeading = {
  fontSize: "16px",
  color: "#ffffff4d",
  fontWeight: "bold",
  letterSpacing: "2px",
};

const bgImg = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  height: "200px",
  padding: "20px 30px 99px 30px",
  color: "#fff",
  boxShadow:
    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
};

function Dashboard() {
  return (
    <div>
      <Row justify="space-around" >
        <Col span={24}>
          <div style={bgImg}>
            <h4 style={{ fontWeight: "600", fontSize: "18px", color: "white" }}>
              Dashboard
            </h4>
            <h5 style={{ color: "#adb5bd" }}>
              Welcome to Patient Management System
            </h5>
          </div>
        </Col>
        <Col span={24} style={{ position: "relative", top: "-68px", padding:'0 10px'}}>
          <Row gutter={[20,20]}>
            <Col  xl={6} lg={6} md={12} sm={12} xs={24}>
              <Card style={cardStyling}>
                <div>
                  <h5 style={textRight}>PATIENTS</h5>
                  <h5 style={callHeading}>PATIENTS</h5>
                  <h3 style={{ color: "white" }}>1253</h3>
                  <div>
                    <span style={badge}>+11%</span>
                    <span style={{ marginLeft: ".5rem" }}>
                      From previous period
                    </span>
                  </div>
                </div>
                <div style={iconClass}>
                  <CiOutlined />
                </div>
              </Card>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={24}>
              <Card style={cardStyling}>
                <div>
                  <h5 style={textRight}>REPORTS</h5>
                  <h5 style={callHeading}>REPORTS</h5>
                  <h3 style={{ color: "white" }}>1253</h3>
                  <div>
                    <span style={badge}>+11%</span>
                    <span style={{ marginLeft: ".5rem" }}>
                      From previous period
                    </span>
                  </div>
                </div>
                <div style={iconClass}>
                  <CiOutlined />
                </div>
              </Card>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={24}>
              <Card style={cardStyling}>
                <div>
                  <h5 style={textRight}>CLINICS</h5>
                  <h5 style={callHeading}>CLINICS</h5>
                  <h3 style={{ color: "white" }}>1253</h3>
                  <div>
                    <span style={badge}>+11%</span>
                    <span style={{ marginLeft: ".5rem" }}>
                      From previous period
                    </span>
                  </div>
                </div>
                <div style={iconClass}>
                  <CiOutlined />
                </div>
              </Card>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={24}>
              <Card style={cardStyling}>
                <div>
                  <h5 style={textRight}>DOCTORS</h5>
                  <h5 style={callHeading}>DOCTORS</h5>
                  <h3 style={{ color: "white" }}>1253</h3>
                  <div>
                    <span style={badge}>+11%</span>
                    <span style={{ marginLeft: ".5rem" }}>
                      From previous period
                    </span>
                  </div>
                </div>
                <div style={iconClass}>
                  <CiOutlined />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{padding:'10px'}} gutter={[20, 5]}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={18}>
              <Card>
                <BarChart />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card style={{ height: "100%" }}>
                <h4>Yearly Patients Report</h4>
                <div style={{ marginTop: "20px" }}>
                  <Button type="primary" style={{ marginRight: "5px" }}>
                    2019
                  </Button>
                  <Button type="primary" style={{ marginRight: "5px" }}>
                    2020
                  </Button>
                  <Button type="primary">2021</Button>
                </div>
                <h2 style={{ marginTop: "20px" }}>PKR 175,62</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the 
                </p>
                <a href="#">Read More...</a>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card style={{ height: "100%" }}>
            <PieChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
