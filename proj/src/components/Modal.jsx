import React from 'react';
import { Modal, Button, SearchBar } from 'antd-mobile';

class ModalWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.setState({
      visible: false,
    });
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  render() {
    return (
      <div>
        <Button type="ghost" size="small" inline onClick={this.showModal}>
          Modal 弹出层
        </Button>
        <Modal
          closable
          title="这是 title"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            <SearchBar placeholder="搜索" />
          </div>
          <div style={{ marginTop: 500, padding: 20 }}>
            <input type="text" style={{ border: '1px solid #ccc' }} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalWrap;
