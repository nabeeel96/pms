import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalComponent = ({visible,onOk,setVisible,title,footer,children,component, onCancel}) => {
  

  return (
    <>
      <Modal title={title ? title : false} footer={footer ? footer : false} visible={visible} onOk={onOk ? onOk : null} onCancel={()=>setVisible(false)}>
        <>{children ? children : component }</>
      </Modal>
    </>
  );
};

export default ModalComponent;