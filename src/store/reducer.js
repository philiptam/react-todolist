// 笔记本，存储数据
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionType'

const defaultState = {
  inputValue: '',
  list: []
};


// reducer 可以接收state，但不能修改state，所以要拷贝出来,state存放整个图书馆全部信息，上一次信息的集合，action是用户传过来的那句话
// state = defaultState设置默认数据
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));// 拷贝上一次state里面的数据
    newState.inputValue = action.value;
    return newState;// newState返回给store
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));// 拷贝上一次state里面的数据
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));// 拷贝上一次state里面的数据
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}