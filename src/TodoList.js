import React, {Component, Fragment} from 'react';


class TodoList extends Component {

  // 最优先执行的一个函数
  constructor(props) {
    super(props);
    // 组件的状态
    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleInputChange(e) {
    // 通过setState函数改变数据
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      // 第一层必须要包裹元素，如果不用div包裹，可以在Fragment代替div，而且并不会显示任何元素
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} type="text"/>
          <button>提交</button>
        </div>
        <ul>
          <li>learn english</li>
          <li>learn react</li>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
