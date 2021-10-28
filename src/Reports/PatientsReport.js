import { Table, Tag, Space,Row, Col, Input } from 'antd';
import Search from 'antd/lib/transfer/search';
import React from 'react'

function PatientsReport() {
    
    const columns = [
        {
          title: ' ID',
          dataIndex: 'id',
          key: 'id',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Symptoms',
          dataIndex: 'symptoms',
          key: 'symptoms',
        },
        {
          title: 'Contact',
          key: 'contact',
          dataIndex: 'contact',
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
      ];
    const data = [
        {
          id: '1',
          contact:'0213-5645654',
          name: 'John ',
          symptoms: 'Cancer',
          address: 'New York No. 1 Lake Park',
          status: 2,
        },
        {
            id: '2',
            contact:'0213-5645654',
            name: 'Brown',
            symptoms: 'Cancer',
            address: 'New York No. 1 Lake Park',
            status: 1,
          },
          {
            id: '3',
            contact:'0213-5645654',
            name: 'John Brown',
            symptoms: 'Cancer',
            address: 'New York No. 1 Lake Park',
            status: 1,
          },
      ];
      const onSearch = value => console.log(value);
      const { Search } = Input;

      function itemRender(current, type, originalElement) {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      }
      
    return (
        <Row style={{marginTop:'40px'}}>
        <Col style={{flexGrow:1}}>
        <Search 
        size="large"
        placeholder="input search text"
        allowClear 
        onSearch={onSearch} 
        enterButton
        />
        </Col>
        <Col span={24} style={{marginTop:'40px'}}>
            <h1 style={{display:'flex', justifyContent:'center', fontSize:'25px'}}>Patient's Report</h1>
        <Table dataSource={data} columns={columns} style={{padding:'20px'}} />
        </Col>
      </Row>
    )
}

export default PatientsReport
