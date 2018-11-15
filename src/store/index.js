import {createStore} from 'redux';
import reducer from './reducer';// 去reducer拿数据，把小本子给管理员
//创建store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// redux三个原则
// 1.store必须是唯一的
// 2.只有store能够改变自己的内容，store拿到reducer的数据，自己更新
// 3.Ruducer必须是一个纯函数，纯函数指的是给固定的输入，就会有固定的输出，而且不会有任何副作用，