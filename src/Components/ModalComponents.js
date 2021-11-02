import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalComponent = ({visible,onOk,headStyle,setVisible,title,footer,children,component,style, onCancel}) => {
  

  return (
    <>
      <Modal title={title ? title : false}  footer={footer ? footer : false} visible={visible} onOk={onOk ? onOk : null} style={style ? style:null} onCancel={()=>setVisible(false)}>
        <>{children ? children : component }</>
      </Modal>
    </>
  );
};

export default ModalComponent;