import { combineReducers } from "redux";

import todoReducer from "../components/TodoList/TodoSlice";
import filterReducer from "../components/Filters/FilterSlice";

// const rootReducer = (state = {}, action)=>{
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoReducer
})

export default rootReducer;