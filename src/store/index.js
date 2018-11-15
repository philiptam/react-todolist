import {createStore} from 'redux';
import reducer from './reducer';// 去reducer拿数据，把小本子给管理员
//创建store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;