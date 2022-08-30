import { createSelector } from "reselect";

export const searchSelector = state => state.filters.search;
export const statusFilterSelector = state => state.filters.status;
export const priorityFilterChange = state => state.filters.priority;
export const todoListSelector = state => state.todoList;

// export const todoListSelector = (state) => {
//     const searchText = searchSelector(state);
//     const todosRamaining = state.todoList.filter((todo)=>{
//         return todo.name.include(state.filter.search);
//     })
//     return todosRamaining;
// };

//reselector
export const todosRamaining = createSelector(todoListSelector,statusFilterSelector, searchSelector,priorityFilterChange,
    (todoList, status, searchText,priorities)=>{
        return todoList.filter((todo)=>{
            if(status === 'All'){
                return priorities.length
                ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                : todo.name.includes(searchText);
            }
            return (todo.name.includes(searchText) && 
            ( status === 'Completed'?todo.completed:!todo.completed) && 
            (priorities.length ? priorities.includes(todo.priority):true)
        );
    });
}
)
