import React, { useEffect, useRef, useState,notification } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Spin } from 'antd';
import {loginUser} from "../Actions/UserAction";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import background from "../Assets/bg-01.jpg";
import leftlogo from "../Assets/leftside-logo11.png";


const Login = () => {

    const dispatch = useDispatch()
    const User = useSelector(state => state.User)
    const formRef = useRef()
    const history = useHistory()
    const[record, setRecord] = useState({'username': localStorage.getItem('user'),'password': localStorage.getItem('password')})    
    const [checked, setChecked]= useState(false)
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')


    const onFinish = (values) => {
        // dispatch(loginUser(values.username, values.password))
        // if(checked) {
        //     setUsername(values.username)
        //     setPassword(values.password)
        // }else {
        //     setUsername('')
        //     setPassword('')
        // }
        localStorage.setItem('token',values.username)
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

      const rightboxStyle = {
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        padding: '40px 20px',
        background: '#fff',
        borderRadius: 1,
        height: 400,
        marginTop:'120px',
        minWidth: 300
    }
    const leftboxStyle = {
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        padding: '40px 20px',
        background: '#6766ff',
        height: 400,
        marginTop:'120px',
        minWidth: 300,
    }
    const layoutStyle = {
        minHeight: '85vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover'
    }
    return (
        <div style={layoutStyle}>
            <Row justify="center" align="middle">
            <Col  xs={0} sm={0} md={4} lg={4} >
                <div style={leftboxStyle}>
                    <img src={leftlogo} style={{marginLeft:'auto', marginRight:'auto', width:'50%', display: 'block'}}/>
                    <h1 style={{color:'#fff'}} >Patient Management System</h1>
                </div>
            </Col>
            <Col sm={18} md={16} lg={9}>
                <div style={rightboxStyle}>
                    <Spin spinning={User.isLoading} >
                        <Form
                            ref={formRef}
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            initialValues={record}
                            size="large"
                        >
                            <h1 style={{textAlign:'center' }}>Login</h1>
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

                            <Form.Item style={{margin:'25px 50px'}} name="remember" valuePropName="checked">
                                <Checkbox onChange={onChange}> Remember me </Checkbox>
                            </Form.Item>
                            
                            <Form.Item style={{margin:'25px 50px'}}>
                                
                                <Button size="large" type="primary" shape="rounded" block htmlType="submit" >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
            </Col>
            </Row>
        </div>
        
    )
}

export default Login
