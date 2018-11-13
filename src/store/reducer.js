// 笔记本

const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
};


// reducer 可以接收state，但不能修改
export default (state = defaultState, action) => {
  console.log(state);
  console.log(action);
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
}