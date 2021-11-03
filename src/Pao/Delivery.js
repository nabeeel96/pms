import React, { useEffect, useState } from "react";
import {
  CloseCircleOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import {
  Table,
  Tag,
  Space,
  Row,
  Col,
  Input,
  Button,
  Modal,
  Form,
  Select,
  DatePicker,
} from "antd";
import ModalComponent from "../Components/ModalComponents";
import PatientRegistrationForm from "../Patient/PatientRegistrationForm";

const Delivery = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [resetFilter, setResetFilter] = useState(false);
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "p_name",
      key: "p_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Patient's contact",
      dataIndex: "p_contact",
      key: "p_contact",
    },
    {
      title: "Delivery place",
      dataIndex: "d_place",
      key: "d_place",
    },
    {
      title: "Delivery status",
      dataIndex: "d_status",
      key: "d_status",
      render: (text) =>
      text === 1 || text === "1" ? (
        <Tag color="#87d068">Delivered</Tag>
      ) : (
        <Tag color="#d8694d">Not Delivered</Tag>
      ),
    },
    ];
  const data = [
    {
        p_name: "Abdul Qadeer",
        p_contact: "0312-2342897",
        d_place: "Hospital",
        d_status: "1 ",
    },
    {
        p_name: "Karachi",
        p_contact: "042-22982652",
        d_place: "Home",
        d_status: "2",
    },
    {
        p_name: "Karachi",
        p_contact: "021-38768764",
        d_place: "Hospital",
        d_status: "1",
    },
  ];

  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  }
  const resetFormFilter = () => {
    setResetFilter(true);
  };

  return (
    <Row style={{ marginTop: "40px" }}>
      <Col style={{ flexGrow: 1 }}>
        <Search
          size="large"
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          enterButton
        />
      </Col>
      <Col span={24} style={{ marginTop: "40px" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
          }}
        >
          Distribution
        </h1>
        <div style={{ textAlign: "right", marginBottom: "2px", marginRight:'20px' }}>
          <Space>
            <Button
              onClick={() => resetFormFilter()}
              type="primary"
              danger
              icon={<CloseCircleOutlined />}
            >
              Reset Filter
            </Button>
            <Button
              onClick={() => setFilterVisible(true)}
              icon={<FilterOutlined />}
            >
              Filter
            </Button>
          </Space>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          style={{ padding: "20px" }}
        />
      </Col>
      <ModalComponent
        
        title="Nabeel "
        footer={<Button onClick={()=>setFilterVisible(false)} type="primary">Submit</Button>}
        visible={filterVisible}
        setVisible={setFilterVisible}
        component={<CallDetailedReportFilter />}
      />
    </Row>
  );
};
const CallDetailedReportFilter = ({ visible, setVisible, resetField }) => {
  const [form] = Form.useForm();

  useEffect(() => form.resetFields(), [resetField]);

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item name="range" label="Date Time">
          <DatePicker.RangePicker showTime />
        </Form.Item>
        <Form.Item name="tests" label="Test Names">
          <Select defaultValue="Test Name" style={{ width: "100%" }}>
            <Select.Option value="blood">Blood Test</Select.Option>
            <Select.Option value="x-ray">X-ray Test</Select.Option>
            <Select.Option value="sugar"> Sugar Test </Select.Option>
            <Select.Option value="ecg"> ECG </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="contact" label="Contact Number">
          <Input />
        </Form.Item>
        <Form.Item name="dname" label="Doctor's Name">
          <Select defaultValue="Doctor's Name" style={{ width: "100%" }}>
            <Select.Option value="john">John</Select.Option>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="yiminghe"> yiminghe </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};

export default Delivery;
