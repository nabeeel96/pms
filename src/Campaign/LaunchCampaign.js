import { InboxOutlined, SmileOutlined } from '@ant-design/icons';
    import { Form, Input, Card, DatePicker, Button,Select,Upload, message  } from 'antd';



const LaunchCampaign = () => {
    
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 5,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 12,
        },
      },
    };
    
    const config = {
        
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please select time!',
          },
        ],
      };
      const onFinish = (fieldsValue) => {
        const values = {
          ...fieldsValue,
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
    }

    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,
        action: '#',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
  

  return (
      <Card style={{margin:'30px'}} >
      <Form  {...formItemLayout} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Campaign Name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="date-time-picker" label="Campaign Start Date" {...config}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item label="Select Call Type">
          <Select>
            <Select.Option value="demo1">Demo 1 </Select.Option>
            <Select.Option value="demo2">Demo 2 </Select.Option>
            <Select.Option value="demo3">Demo 3 </Select.Option>
          </Select>
      </Form.Item>


      <Form.Item 
      label="Upload Numbers (.CSV File Only)"
      >
      <Dragger {...props} >
            <p className="ant-upload-drag-icon">
            <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
            </p>
      </Dragger>
      </Form.Item>
      <Form.Item>
        <Button 
        type="primary"
        htmlType="button"
        label="Download Sample Format"
        >
          Download Sample format
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 24,
            offset: 0,
          },
          md: {
              span:24,
              offset:0,
          },
          lg: {
              span:24,
              offset:0,
            }
        }}
      >
      <Button type="primary" htmlType="submit">
            Submit
      </Button>
      </Form.Item>








      </Form> 
      </Card>  
  );
};

export default LaunchCampaign
