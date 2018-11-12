import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    super(props);
    this.handleClick = this.handleClick.bind(this);// 可以节约性能
  }

  componentDidMount() {
    console.log('ajax请求');
  }

  // 提高性能，避免无为渲染
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content;
  }

  handleClick() {
    const {deleteItem, index} = this.props;// 解构赋值
    deleteItem(index);
    // this.props.deleteItem(this.props.index)
  }

  render() {
    console.log('child render');
    const {content, test} = this.props;
    return (
      <div onClick={this.handleClick}>{test}{content}</div>
    );
  }

  // 当一个组件要从父组件接收了参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }

  // 当组件即将被剔除就被触发
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

}

// 校验传值的类型,isRequired必须要传递,可以通过arrayOf接收多个类型
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

// 默认值
TodoItem.defaultProps = {
  test: 'hello world'
};
export default TodoItem;