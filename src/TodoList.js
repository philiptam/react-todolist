import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem'

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

  handleButtonClick() {
    // 重新赋值给数组,并清空inputValue
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDel(index) {
    // index 数组索引
    // immutable state不允许做任何的改变,拷贝副本出来修改
    const list = [...this.state.list];// 拷贝数组
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  render() {
    return (
      // 第一层必须要包裹元素，如果不用div包裹，可以在Fragment代替div，而且并不会显示任何元素
      <Fragment>
        <div>
          {/*label点击时可以自动聚焦到input标签*/}
          <label htmlFor="insertArea">输入内容</label>
          <input id='insertArea' className='input' value={this.state.inputValue}
                 onChange={this.handleInputChange.bind(this)}
                 type="text"/>
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            //dangerouslySetInnerHTML 可以将输入的标签转化成标签，但是可能会被攻击
            this.state.list.map((item, index) => {
              //通过content这个属性转给子组件,将方法传给子组件
              return (
                <TodoItem index={index}
                          content={item}
                          deleteItem={this.handleItemDel.bind(this)}
                          key={index}/>
                /*<li key={index}
                    onClick={this.handleItemDel.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}
                ></li>*/
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
