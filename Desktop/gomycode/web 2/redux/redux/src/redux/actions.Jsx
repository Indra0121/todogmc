// actions.jsx

export const addTask = (description) => {
    return {
      type: 'ADD_TASK',
      payload: {
        description,
      },
    };
  };
  
  export const toggleTaskStatus = (id) => {
    return {
      type: 'TOGGLE_TASK_STATUS',
      payload: {
        id,
      },
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: 'DELETE_TASK',
      payload: {
        id,
      },
    };
  };
  