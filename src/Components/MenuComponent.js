import {
    AuditOutlined,
    BarChartOutlined,
    BoxPlotOutlined, CalendarOutlined,
    CodepenCircleOutlined, CodeSandboxSquareFilled,
    DashboardOutlined, DiffOutlined,
    FileTextOutlined, FormatPainterOutlined, FundOutlined,
    GoldOutlined, HddOutlined, Html5Outlined, LayoutOutlined, LockOutlined,
    LoginOutlined, PauseCircleOutlined,
    SettingOutlined, SnippetsOutlined,
    SoundOutlined, StockOutlined,
    UnlockOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import { Menu} from "antd"
import { useEffect, useState } from "react"
import Sider from "antd/es/layout/Sider";
import logo from "../Assets/LOGO.png";
import small from "../Assets/favicon.png";
import {VscNote,RiDashboardLine,RiNurseLine,RiTableAltLine} from 'react-icons/all'

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
        <Sider collapsed={isToggled} width={320} style={{overflow: 'hidden'}} >
            
            <Menu style={{height:'100%' }} mode="vertical"  defaultSelectedKeys={[selectedKey] }
            
                  openKeys={openKeys} onOpenChange={onOpenChange}
            >
                <div className="logo" style={{ textAlign: 'center', height:'45px', marginBottom:'40px' }}>
                    <Link to="/dashboard">
                        {/* style={{width: isToggled ? "" : "110px"}} */}
                        <img src={isToggled ? small : logo} alt="App logo" style={{width:'auto', height:'60px'}} />
                    </Link>
            </div>
                <Menu.Item key="/dashboard" icon={<RiDashboardLine />}>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>

                <SubMenu title="Forms" key="pmsforms" icon={<RiNurseLine/>}>
                <Menu.Item key="/PR" icon={<UserAddOutlined/>}>
                    <Link to="/patient-registration">Patient Registration</Link>
                </Menu.Item>
                <Menu.Item key="/dpf" icon={<VscNote />}>
                    <Link to={"/doctor-prescribed-form"}>Doctor Prescribed Form</Link>
                </Menu.Item> 
                </SubMenu>
                <SubMenu title="Reports" key="pmsreports" icon={<VscNote/>}>  
                <Menu.Item key="pr" icon={<RiTableAltLine/>}>
                    <Link to="/patients-report"> Patients Report </Link>
                </Menu.Item> <Menu.Item key="cr" icon={<RiTableAltLine/>}>
                    <Link to="/call-report"> Call Detailed Report</Link>
                </Menu.Item>
                    

                </SubMenu>
                
                
            </Menu>
        </Sider>
    )
}

export default MenuComponent