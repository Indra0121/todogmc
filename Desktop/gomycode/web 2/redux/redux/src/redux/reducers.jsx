// reducers.js

const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = {
          id: state.tasks.length + 1,
          description: action.payload.description,
          isDone: false,
        };
        return {
          ...state,
          tasks: [...state.tasks, newTask],
        };
  
      case 'TOGGLE_TASK_STATUS':
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              return {
                ...task,
                isDone: !task.isDone,
              };
            }
            return task;
          }),
        };
  
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  