import { InboxOutlined, PlusOutlined, SmileOutlined } from "@ant-design/icons";
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
  Modal,
} from "antd";
import { useState } from "react";

function getBase64(file) {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
}

const DoctorPrescribedForm = () => {
  const [value, setValue] = useState();
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])

  const handleCancel = () => setPreviewImage(false);
  const handlePreview = async file => {
      if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
      }
      console.log('sssssssssss',file);
      setPreviewImage(file.url || file.preview)
      setPreviewVisible(true)
      setPreviewTitle(file.name);
  };
  const handleChange = ({ fileList }) => setFileList(fileList);
  const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

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
            <Col span={24}>
              <Form.Item
              label="Upload Media files">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={()=>setPreviewVisible(false)}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
              </Form.Item>
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
