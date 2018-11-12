import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css';

class TodoList extends Component {

  // 最优先执行的一个函数
  constructor(props) {
    super(props);
    // 组件的状态
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    // const value = this.input.value; // 不建议用ref
    // 通过setState函数改变数据,新写法,对象变成函数，会同步变异步，所以target.value先要保存一下
    this.setState(() => ({
      inputValue: value
    }), () => {
      //因为setState是异步执行的，所以在setState第二个参数是执行完之后的回调函数
    });
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleButtonClick() {
    this.setState(() => ({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }));

    // 重新赋值给数组,并清空inputValue
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDel(index) {
    // index 数组索引
    // immutable state不允许做任何的改变,拷贝副本出来修改
    // prevState可接收上一次的参数
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    });
  }

  getTodoItem() {
//dangerouslySetInnerHTML 可以将输入的标签转化成标签，但是可能会被攻击
    return this.state.list.map((item, index) => {
      //通过content这个属性转给子组件,将方法传给子组件
      return (
        <TodoItem index={index}
                  content={item}
                  deleteItem={this.handleItemDel}
                  key={index}/>
        /*<li key={index}
            onClick={this.handleItemDel.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
        ></li>*/
      );
    });
  }

  // componentWillMount 在组件即将被挂载到页面的时刻自动执行
  // componentWillMount() {
  //   console.log('componwillmount');
  // }

  render() {
    return (
      // 第一层必须要包裹元素，如果不用div包裹，可以在Fragment代替div，而且并不会显示任何元素
      <Fragment>
        <div>
          {/*label点击时可以自动聚焦到input标签*/}
          <label htmlFor="insertArea">输入内容</label>
          <input id='insertArea' className='input' value={this.state.inputValue}
                 onChange={this.handleInputChange}
                 type="text"/>
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue}></Test>
      </Fragment>
    );
  }

  // componentDidMount 组件挂载后执行
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // 组件被更新之前它会自动被执行 需要返回一个布尔值 true 更新 false 组件不更新
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // 组件被更新之前它会自动执行，但是他在shouldComponentUpdate之后执行，如果shouldComponentUpdate返回true他才会执行，如果返回false就不会执行
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // 组件更新完成之后它会被执行
  // componentDidUpdate(){
  //   console.log('componentDidUpdate');
  // }



}

export default TodoList;
