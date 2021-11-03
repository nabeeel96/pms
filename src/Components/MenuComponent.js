import {
    UserAddOutlined,
} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import { Menu} from "antd"
import { useEffect, useState } from "react"
import Sider from "antd/es/layout/Sider";
import logo from "../Assets/LOGO.png";
import small from "../Assets/favicon.png";
import {RiDashboardLine,RiNurseLine,RiTableAltLine,BsTruck,RiEBike2Line,MdOutlineFactCheck,CgFileDocument} from 'react-icons/all'

const { SubMenu } = Menu
const rootSubmenuKeys = ['sub1', 'sub2'];

const MenuComponent = ({isToggled}) => {

    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState("/")
    let location = useLocation()

    useEffect(() => {
        setSelectedKey(location.pathname)
    }, [location])

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Sider collapsed={isToggled} width={250} style={{overflow: 'hidden'}} >
            
            <Menu style={{height:'100%' }} mode="vertical"  defaultSelectedKeys={[selectedKey] }
            
                  openKeys={openKeys} onOpenChange={onOpenChange}
            >
                <div className="logo" style={{ textAlign: 'center', height:'45px', marginBottom:'40px' }}>
                    <Link to="/dashboard">
                        {/* style={{width: isToggled ? "" : "110px"}} */}
                       {isToggled? <img src={small} alt="App logo" height={40} />:
                        <img src={logo} alt="App logo" height={50} width={150}/>}
                        
                    </Link>
            </div>
                <Menu.Item key="/dashboard" icon={<RiDashboardLine />}>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>
                {/* <SubMenu title="Forms" key="pmsforms" icon={<RiNurseLine/>}> */}
                <Menu.Item title="Patient Enrollment" key="/PR" icon={<UserAddOutlined />}>
                    <Link to="/patient-registration">Patient Enrollment</Link>
                </Menu.Item>
                <Menu.Item key="/d&d" icon={<CgFileDocument />}>
                    <Link to={"/d&d"}>Data & Documentations</Link>
                </Menu.Item> 
                {/* </SubMenu> */}
                {/* <SubMenu title="Reports" key="pmsreports" icon={<VscNote/>}>   */}
                <Menu.Item key="ea" icon={<MdOutlineFactCheck/>}>
                    <Link to="/enrollment-approval"> Enrollment Approval </Link>
                </Menu.Item> 
                <Menu.Item key="dist" icon={<RiEBike2Line/>}>
                    <Link to="/distribution"> Distribution</Link>
                </Menu.Item>
                {/* </SubMenu> */}
                <Menu.Item key="delivery" icon={<BsTruck/>}>
                    <Link to="/delivery"> Delivery </Link>
                </Menu.Item>
                
                
            </Menu>
        </Sider>
    )
}

export default MenuComponent