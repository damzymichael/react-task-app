import React, {useState} from 'react';

const TaskForm = ({addNewTask}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    try {
      addNewTask(value);
      setValue('');
    } catch (error) {
      setError(error.message);
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type='submit'>Add new task</button>
      {showError && <div className='error'>{error}</div>}
    </form>
  );
};

export default TaskForm;
