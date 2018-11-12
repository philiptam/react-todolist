import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)// 可以节约性能
  }

  handleClick() {
    this.props.deleteItem(this.props.index)

  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.props.content}</div>
    )
  }
}

export default TodoItem