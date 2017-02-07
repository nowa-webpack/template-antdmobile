import React from 'react';
import ReactDOM from 'react-dom';

import Misc from './components/Misc';
import Carousel from './components/Carousel';
import Form from './components/Form';
import RefreshControl from './components/RefreshControl';
import Modal from './components/Modal';
import Popup from './components/Popup';

import './index.less';
import './iconfont/iconfont.css';

class App extends React.Component {
  render() {
    const items = [{ id: '1' }, { id: 'header' }];
    return (<div className="container" id="container">
      <div className="body">
        <Misc />
        <Carousel />
        <Modal /> <Popup />
        <Form /> <hr />
        <RefreshControl /> <hr />
      </div>
      <div className="fixed-bottom">底部固定条</div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('example'));
