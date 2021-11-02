import React, { useEffect, useState } from "react";
import {
    CheckOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
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
  Switch,
} from "antd";
import ModalComponent from "../Components/ModalComponents";
import PatientRegistrationForm from "../Patient/PatientRegistrationForm";

const PaoReport = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [resetFilter, setResetFilter] = useState(false);
  const [assign, setAssign] = useState(false)


  
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Assign to agent",
      dataIndex: "assign",
      key: "assign",
     
    },
    {
      title: "Contact Number ",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Date & Time",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "City",
      key: "city",
      dataIndex: "city",
    },
    {
      title: "Documents",
      dataIndex: "documents",
      key: "documents",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) =>
        text === 1 || text === "1" ? (
          <Tag color="#87d068">Delivered</Tag>
        ) : (
          <Tag color="#d8694d">Not Delivered</Tag>
        ),
    },
    {
      title: "Approval",
      key: "approval",
      render: (text, item) => (
        <Form.Item name="  " label="">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>
      ),
    },
  ];
  const data = [
    {
      name: "Jack",
      assign: (
        <Button icon={<EyeOutlined />} onClick={() => setAssign(true)}></Button>
      ),
      status: 1,
      contact: "0213-5645654",
      date: "26 OCT 2021",
      city: "Karachi",
      documents: <Button icon={<EyeOutlined />}></Button>,
      status: 1,
    },

    {
      name: "Lucy",
      assign: (
        <Button icon={<EyeOutlined />} onClick={() => setAssign(true)}></Button>
      ),
      contact: "0213-5644234",
      date: "26 OCT 2021",
      city: "Islamabad",
      documents: <Button icon={<EyeOutlined />}></Button>,
      status: 1,
    },
    {
      name: "John",
      assign: (
        <Button icon={<EyeOutlined />} onClick={() => setAssign(true)}></Button>
      ),
      contact: "0213-5631254",
      date: "26 OCT 2021",
      city: "Lahore",
      documents: <Button icon={<EyeOutlined />}></Button>,
      status: 2,
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
            Patients data
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
        title="Assign to Agent" 
        footer={<Button onClick={()=>setFilterVisible(false)} type="primary">Submit</Button>}
        visible={filterVisible ? filterVisible : assign}
        setVisible={filterVisible ? setFilterVisible : setAssign}
        component={filterVisible ? <CallDetailedReportFilter /> : <AssignAgent/>}
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
        <Form.Item name="Patient" label="Patient Name">
          <Select defaultValue="Jack" style={{ width: "100%" }}>
            <Select.Option value="Jack">Jack</Select.Option>
            <Select.Option value="Lucy">Lucy</Select.Option>
            <Select.Option value="Sarah"> Sarah </Select.Option>
            <Select.Option value="John"> John </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="contact" label="Contact Number">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};


const AssignAgent = ({ visible, setVisible, resetField }) => {
  const [form] = Form.useForm();

  useEffect(() => form.resetFields(), [resetField]);

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item name="agent" label="Assign Agent">
          <Select defaultValue="Jack" style={{ width: "100%" }}>
            <Select.Option value="j">Jack</Select.Option>
            <Select.Option value="l">Lucy</Select.Option>
            <Select.Option value="s"> Sarah </Select.Option>
            <Select.Option value="jo"> John </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="agent_contact" label="Contact Number">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default PaoReport;
