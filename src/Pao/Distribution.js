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

const Distribution = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [resetFilter, setResetFilter] = useState(false);
  const columns = [
    {
      title: "Distribution Office",
      dataIndex: "distr",
      key: "distr",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Hospital / Clinic ",
      dataIndex: "hospital",
      key: "hospital",
    },
    {
      title: "Patient’s Door Step",
      dataIndex: "pds",
      key: "pds",
    },
    ];
  const data = [
    {
      distr: "Karachi",
      hospital: "Agha khan",
      pds: "1 ",
    },
    {
        distr: "Lahore",
        hospital: "South City Hospital",
        pds: "2 ",
    },
    {
        distr: "Karachi",
        hospital: "Indus Hospital",
        pds: "1 ",
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

export default Distribution;
