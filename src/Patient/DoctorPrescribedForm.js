import { InboxOutlined, SmileOutlined } from "@ant-design/icons";
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
import { useState } from "react";

const DoctorPrescribedForm = () => {
  const [value, setValue] = useState();



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
  const { TextArea } = Input;

  return (
    <>
      <Divider orientation="left"> Doctor Prescription Form </Divider>
      <Card style={{ margin: "50px" }}>
        <Form onFinish={onFinish} layout="vertical">
          <Row gutter={[100, 10]}>
            <Col span={24}>
              <Row gutter={[80]}>
                <Col span={12}>
                  <Form.Item
                    label="Patient Name"
                    name="patient"
                    rules={[
                      { required: true, message: "Please input patient name" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Doctor Name"
                    style={{ width: "100%" }}
                    name="dname"
                    rules={[
                      { required: true, message: "Please input doctor name" },
                    ]}
                  >
                    <Input style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[80]}>
                <Col span={12}>
                  <Form.Item
                    label="Medicine name"
                    name="med"
                    rules={[
                      {
                        required: true,
                        message: "Please input your medicine name",
                      },
                    ]}
                  >
                    <Input style={{ width: "100%" }} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Tests Recommendation" name="recommendation">
                    <Select defaultValue="Test Name" style={{ width: "100%" }}>
                      <Option value="blood">Blood Test</Option>
                      <Option value="x-ray">X-ray Test</Option>
                      <Option value="sugar"> Sugar Test </Option>
                      <Option value="ecg"> ECG </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[80]}>
                <Col span={24}>

                  <div style={{ margin: "14px 0" }} />
                  <Form.Item
                  label="Doctores prescribed method"
                  >
                  <TextArea
                    placeholder="Autosize height with minimum and maximum number of lines"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />

                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button style={{marginTop:'20px'}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default DoctorPrescribedForm;
