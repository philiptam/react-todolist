import React, {Component} from 'react'
import {Input, Button, List} from 'antd';

class TodoListUi extends Component {
  render() {
    return (
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <div>
          <Input value={this.props.inputValue} onChange={this.props.handleOnChange} style={{width: '300px'}}/>
          <Button onClick={this.props.handleBtnClick} type='primary'>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {
              this.props.handleDeleteItem(index)
            }}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoListUi;