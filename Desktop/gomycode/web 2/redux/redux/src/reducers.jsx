// src/reducers.js
import { combineReducers } from 'redux';
import { ADD_TASK, TOGGLE_DONE, DELETE_TASK } from '../src/action';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          isDone: false,
        },
      ];
    case TOGGLE_DONE:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
      );
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
