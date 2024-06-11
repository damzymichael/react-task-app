import React from 'react';

const TaskItem = ({task, deleteTask, checkTask}) => {
  return (
    <div className='task'>
      <input
        type='checkbox'
        defaultChecked={task.completed}
        onChange={() => checkTask(task.id)}
      />
      <h3>{task.name}</h3>
      <button onClick={() => deleteTask(task.id)}>+</button>
    </div>
  );
};

export default TaskItem;
