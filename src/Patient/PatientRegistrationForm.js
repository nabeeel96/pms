import { FileExcelTwoTone, InboxOutlined, SmileOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Card,
  DatePicker,
  Button,
  Select,
  Upload,
  message,
  Radio,
  Col,
  Row,
  Divider,
} from "antd";
import Dragger from "antd/lib/upload/Dragger";
import { useState } from "react";

const PatientRegistrationForm = () => {
  const [value, setValue] = useState();
  const { Dragger } = Upload;
  

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
    };
    console.log("Received values of form: ", values);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const { Option } = Select;

  return (
    <>
    <Divider orientation="left"> Patient Registration Form </Divider>
    <Card style={{ margin: "30px", display:'flex', justifyContent:'center', alignContent:'center' }}>
      <Form  onFinish={onFinish} layout="vertical">
        <Row gutter={[100, 10]}>
        <Col span={24}>
          <Row gutter={[80]}>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Form.Item
                style={{ width: "100%" }}
                label="First Name"
                name="username"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Form.Item label="Middle Name" name="middle">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Form.Item
                label="Last Name"
                name="username"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[80]}>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Form.Item
                label="Contact Number"
                name="contact"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact Number!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <Form.Item name="maritial" label="Maritial Status">
                <Select
                  defaultValue="Select Maritial Status"
                  style={{ width: "100%" }}
                >
                  <Option value="single">Single</Option>
                  <Option value="Married">Married</Option>
                  <Option value="Divorced">Divorced</Option>
                  <Option value="Widowed">Widowed</Option>
                </Select>
              </Form.Item>
              
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[80]}>
           
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name="gender" label="Gender">
                <Select defaultValue="Select Gender" style={{ width: "100%" }}>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other"> Other </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
                label="City"
                name="city"
                rules={[
                  { required: true, message: "Please input your city name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[80]}>
            <Col xl={12} lg={12} md={12} sm={24} xs={12}>
              <Form.Item
                label="State"
                name="state"
                rules={[
                  { required: true, message: "Please input your state name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24 } xs={24}>
              <Form.Item
                label="Zip"
                name="zip"
                rules={[
                  { required: true, message: "Please input your zip code!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>
                <Col  xl={12} lg={12} md={24} sm={24} xs={24}>
                  <Form.Item
                  
                    name="number"
                    label="Upload your previous documents "
                    
                  >
                    <Dragger
                      height={232}
                      listType="picture"
                    >
                      <p className="ant-upload-drag-icon">
                        <FileExcelTwoTone />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        You can upload campaign numbers through the CSV
                        file by clicking here.
                      </p>
                    </Dragger>
                  </Form.Item>
                </Col>
        </Row>
        

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Card>
    </>
  );
};

export default PatientRegistrationForm;
