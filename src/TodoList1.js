import React, {Component} from 'react';
import 'antd/dist/antd.css';

import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import store from './store/index';
import TodoListUi from './TodoListUi'


class TodoList1 extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();// getState()获取store里面的数据
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDeleteItem=this.handleDeleteItem.bind(this);
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
    return <TodoListUi
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleOnChange={this.handleOnChange}
      handleBtnClick={this.handleBtnClick}
      handleDeleteItem={this.handleDeleteItem}
    />
  }
}

export default TodoList1