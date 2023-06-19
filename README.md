UI dispatch 1 action, reducer lắng nghe, xử lý, cập nhật state tương ứng

## Redux-Core

### actions

export const addTodo = (data) =>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

### reducer (separated for easy management)

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoReducer
})

// filter

const initState = {
        search: ' ',
        status: 'All',
        priority: []
}
const filterReducer = (state = initState, action)=>{
    switch(action.type){
        case 'filter/searchFilterChange':
            return {
                ...state,
                search: action.payload
                }
        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filter/priorityFilterChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }
}

// todoList
const initState = [
        { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
        { id: 2, name: "learn redux", completed: true, priority: "High" },
        { id: 3, name: "learn responsive", completed: false, priority: "Low" }
]

const todoReducer = (state = initState, action)=>{
    switch(action.type){
        case 'todoList/addTodo':
            return [...state,
                    action.payload
                ]
        default:
            return state;
    }
}

### selectors (for UI fetch data)
export const statusFilterSelector = state => state.filters.status;
export const priorityFilterChange = state => state.filters.priority;

### store

### UI (UI dispatch)
const handleAddButtonClick = () => {
    dispatch(addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false
    }));
    setTodoName("");
    setPriority("Medium");
}