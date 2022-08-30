// *********redux core

import { legacy_createStore as createStore} from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers );
// rootReducer: 1 function dùng để cập nhật lại state trong kho chung.
// initValue: giá trị mặc định
//enhancers: config middleware

export default store;

// *********redux toolkit
// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../components/TodoList/TodoSlice";
// import filterReducer from "../components/Filters/FilterSlice";


// const store = configureStore({
//     reducer: {
//         filters: filterReducer,
//         todoList: todoReducer
//     }
// })

// export default store;