import { Table, Tag, Space,Row, Col, Input, Pagination } from 'antd';
import Search from 'antd/lib/transfer/search';
import React from 'react'

function RejectDeliveryCampaignList() {
    
    const columns = [
        {
          title: 'ID',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Username',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Campaign Name',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Campaign Execution Date',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
    const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
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
        <Table data={data} columns={columns} />
        <Pagination style={{display:'flex', justifyContent:'flex-end'}} total={500} itemRender={itemRender} />
        </Col>
      </Row>
    )
}

export default RejectDeliveryCampaignList
