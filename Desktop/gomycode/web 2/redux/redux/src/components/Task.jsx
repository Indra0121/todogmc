// Task.js

import React from 'react';

const Task = ({ task }) => {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.description}</td>
      <td>{task.isDone ? 'Done' : 'Not Done'}</td>
      <td>
        <button>Mark {task.isDone ? 'Not Done' : 'Done'}</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
