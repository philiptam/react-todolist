import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/index';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList1 extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }


  render() {
    return (
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <div>
          <Input value={this.state.inputValue} style={{width: '300px'}}/>
          <Button type='primary'>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList1