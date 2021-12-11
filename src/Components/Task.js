import { FaTimes } from 'react-icons/fa';

const Task = ({ task, listId, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.check ? 'complete' : ''}`}
      onDoubleClick={() => onToggle(listId, task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          className='icon'
          style={{ color: 'crimson' }}
          onClick={() => onDelete(listId, task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
