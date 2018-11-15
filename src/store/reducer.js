// 笔记本，存储数据

const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
};


// reducer 可以接收state，但不能修改state，所以要拷贝出来,state存放整个图书馆全部信息，上一次信息的集合，action是用户传过来的那句话
// state = defaultState设置默认数据
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));// 拷贝上一次state里面的数据
    newState.inputValue = action.value;
    return newState;// newState返回给store
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));// 拷贝上一次state里面的数据
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}