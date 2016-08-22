//ACTION TYPES
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//ANOTHER CONSTATS
export const VisibilityFilters = {
    SHOW_ALL       : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE    : 'SHOW_ACTIVE'
}

//ACTION CREATORS
export const AddTodo = (text) => ({
    type: ADD_TODO,
    text
})
export const toggleTodo = (index) => ({
    type:TOGGLE_TODO,
    index
})
export  const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})