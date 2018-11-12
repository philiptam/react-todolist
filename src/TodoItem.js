import React, {Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    super(props);
    this.handleClick = this.handleClick.bind(this)// 可以节约性能
  }

  handleClick() {
    const {deleteItem, index} = this.props;// 解构赋值
    deleteItem(index);
    // this.props.deleteItem(this.props.index)

  }

  render() {
    const {content, test} = this.props;
    return (
      <div onClick={this.handleClick}>{test}{content}</div>
    )
  }
}

// 校验传值的类型,isRequired必须要传递,可以通过arrayOf接收多个类型
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.number,PropTypes.string),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 默认值
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem