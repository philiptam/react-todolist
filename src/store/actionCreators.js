import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_TODO_LIST} from './actionType';
import axios from 'axios';
// 提高代码可读性
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type:INIT_TODO_LIST,
  data
})

// 引入thunk中间件以后，可以变成返回时函数
export const getInitTodoList = () => {
  return (dispatch) => {
    axios.get('./api/todolist').then((res) => {
      const action=initListAction(res.data);
      dispatch(action);
    })
  }
}