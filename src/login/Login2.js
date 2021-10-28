import React, { useRef, useState } from 'react'
import bg from "../Assets/bg.svg";
import wave from "../Assets/wave.png";
import avatar from "../Assets/avatar.svg";
import './style.css'
import { Row,Col,Form,Input } from 'antd';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {loginUser} from "../Actions/UserAction";
import {LockOutlined, UserOutlined} from "@ant-design/icons";



const Login2 = () => {

const dispatch = useDispatch()
const User = useSelector(state => state.User)
const formRef = useRef()
const history = useHistory()
const[record, setRecord] = useState({'username': localStorage.getItem('user'),'password': localStorage.getItem('password')})    
const [checked, setChecked]= useState(false)
const [username, setUsername]= useState('')
const [password, setPassword]= useState('')


const onFinish = (values) => {
    localStorage.setItem('token',values.username)
    dispatch(loginUser(values.username, values.password))
    // if(checked) {
    //     setUsername(values.username)
    //     setPassword(values.password)
    // }else {
    //     setUsername('')
    //     setPassword('')
    // }
    history.push('/dashboard')
};

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openNotificationWithIcon = (type, content) => {
    console.log("object",type)
    // notification[type]({
    //     message: type === 'success' ? 'Success': 'Error' ,
    //     description: content,
    // })
}
  function onChange(e) {
    if(e.target.checked)
        setChecked(true)
    else
        setChecked(false)
}
    return (
      <Row className="login-container">
          <Col span={24} >
          <img src={wave} alt="image" className="wave"/>
	<div className="container">
		<div className="img">
            <img src={bg} alt="" />
		</div>
		<div className="login-content">
			<Form
            ref={formRef}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={record}
            size="large"
            
            >
                <img src={avatar} alt="" />
				<h2 className="title">Welcome</h2>
           		
                <div>

                <Form.Item
                                style={{margin:'25px 50px'}}
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User Name" />
                            </Form.Item>

                            <Form.Item
                                style={{margin:'25px 50px'}}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                            </Form.Item>
                </div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login"/>
            </Form>
        </div>
    </div>
      </Col>
      </Row>
    )
}

export default Login2
