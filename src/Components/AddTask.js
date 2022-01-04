import { useState } from 'react';

const AddTask = ({ listId, onAdd, toggleShowAddTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [check, setCheck] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add task name');
      return;
    }

    onAdd(listId, { text, day, check });

    setText('');
    setDay('');
    setCheck(false);
    toggleShowAddTask();
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control check'>
        <label>Completed</label>
        <input
          type='checkbox'
          checked={check}
          value={check}
          onChange={(e) => setCheck(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
