import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)// 可以节约性能
  }

  handleClick() {
    const {deleteItem, index} = this.props;// 解构赋值
    deleteItem(index);
    // this.props.deleteItem(this.props.index)

  }

  render() {
    const {content} = this.props;
    return (
      <div onClick={this.handleClick}>{content}</div>
    )
  }
}

export default TodoItem