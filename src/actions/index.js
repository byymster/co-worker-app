export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: Date.now(),
        text
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const toggleAllTodo = () => {
    return {
        type: 'TOGGLE_ALL_TODO'
    };
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    };
};