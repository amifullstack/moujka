export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const DECREMENT_VALUE = 'DECREMENT_VALUE';


export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const removeTodo = todo => ({ type: REMOVE_TODO, payload: todo });
export const incrementValue = value => ({ type: INCREMENT_VALUE, payload: value });
export const decrementValue = value => ({ type: DECREMENT_VALUE, payload: value });
