import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import store from './store/index';


class TodoList1 extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();// getState()获取store里面的数据
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);//subscribe 这个组件去订阅store，
  }

  handleOnChange(e) {
    //创建一个action
    const action = getInputChangeAction(e.target.value);
    // 用dispatch把这句话传给store
    store.dispatch(action)
  }

  handleStoreChange() {
    //console.log('store change');// 感知到组件变化
    this.setState(store.getState());// 跟数据保持联动
  }

  // 按钮点击事件
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action)
  }

  // 点击删除每一项
  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action)
  }


  render() {
    return (
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <div>
          <Input value={this.state.inputValue} onChange={this.handleOnChange} style={{width: '300px'}}/>
          <Button onClick={this.handleBtnClick} type='primary'>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList1