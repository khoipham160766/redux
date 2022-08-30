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

export default todoReducer;