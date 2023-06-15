// ListTask.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../redux/actions';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (id) => {
    dispatch(toggleTaskStatus(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
              <td>{task.isDone ? 'Done' : 'Not Done'}</td>
              <td>
                <button onClick={() => handleToggleTask(task.id)}>
                  Mark {task.isDone ? 'Not Done' : 'Done'}
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTask;
