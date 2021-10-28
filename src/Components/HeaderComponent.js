import { Layout, Menu, Row, Col, Dropdown, Avatar } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Actions/UserAction";
import { Link } from "react-router-dom";
// import logo from "../Assets/LOGO.png"
import React from "react";
import { LoggedIN } from "../Shared/LoggedIN";
import { useHistory } from "react-router";
import { useEffect } from "react";

const { Header } = Layout;
const { SubMenu } = Menu;
const HeaderComponent = ({ setToggled, User, isToggled }) => {
  const dispatch = useDispatch();
  let history = useHistory()
  
  const handleUpload = () => {
    dispatch(logoutUser())
    history.push('/sign-in')
  };
  
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => handleUpload()}
        icon={<LogoutOutlined />}
        key="logoutMenu"
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{padding: 0, background: "#35A989", height:'70px' }}
    >
      
      <Menu selectable={false} mode="horizontal" style={{justifyContent:'center', }} >
        {LoggedIN() && (
          <Row>
            <Col span={14} offset={10}>
              <Menu.Item key="logoMenu">
                <Link to="/dashboard">
                  {/* <img style={{ height: "40px" }} src={logo} alt="App logo" /> */}
                </Link>
              </Menu.Item>
            </Col>
          </Row>
        )}
      </Menu>
      {LoggedIN() && (
        <>
          <div style={{ float: "left" , marginLeft:'10px',  color:'#fff'}}>
            {React.createElement(
              isToggled ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick:() => isToggled ? setToggled(false) : setToggled(true)
              }
            )}
          </div>
          <div style={{ float: "right",marginRight:'10px'}} >
            <Dropdown overlay={menu} >
              <div>
                <span
                  id="iconMenu"
                  style={{ marginRight: 4, cursor: "pointer" }}
                > {localStorage.getItem('username')}
                  <Avatar icon={<UserOutlined />} style={{ height:'40px', marginLeft:'10px',width:'40px', justifyContent:'center',color:'#f5b225',backgroundColor:'#fff'}} /> 
                </span>
              </div>
            </Dropdown>
          </div>
        </>
      )}
    </Header>
  );
};

export default HeaderComponent;
