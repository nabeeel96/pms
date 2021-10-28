import React, { useState,useEffect } from 'react'
import { Divider, Layout} from "antd"
import '../App.less'
import '../index.less'
import MenuComponent from '../Components/MenuComponent';
import HeaderComponent from '../Components/HeaderComponent';
import ContentComponent from '../Components/ContentComponent';
import { useSelector,useDispatch } from 'react-redux';
import { LoggedIN } from '../Shared/LoggedIN';
import { userStatus } from '../Actions/UserAction';



const { Header, Footer, Content } = Layout

function Main() {
  const dispatch = useDispatch()
    const [isToggled, setToggled] = useState(true);
    const [login, setLogin] = useState();
    const toggleTrueFalse = () => setToggled(!isToggled);
    const onClose = () => {
      setToggled(false);
    };

    const User = useSelector(state => state.User)

    console.log(User)
    return (
      <Layout style={{ minHeight:'100vh'}}>

       {User.loggedIn && <MenuComponent  onClose={onClose} isToggled={isToggled} />}
      <Layout style={{background:'#f4f5f6'}}>
          {User.loggedIn &&<HeaderComponent style={{float:'right'}} User={User} setToggled={setToggled} isToggled={isToggled} />}
          <ContentComponent />
          {User.loggedIn &&<Footer style={{ textAlign: 'center', fontWeight: 'bold', background: '#f4f5f6', color: '#35a989' }}>Patient Management System ©2021 | Powered by Telecard Ltd.</Footer>}
      </Layout>
  </Layout>
    )
}

export default Main
