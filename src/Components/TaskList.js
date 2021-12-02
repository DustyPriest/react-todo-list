import { useState, useRef } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Draggable from 'react-draggable';

const TaskList = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const nodeRef = useRef(null);
  const [editTaskName, setEditTaskName] = useState(false);
  const [taskTitle, setTaskTitle] = useState('Tasks for Today');

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'StartUp Weekend!',
      day: 'Sunday 28th at 9am',
      reminder: false,
    },
    {
      id: 1,
      text: 'Sent Sophia & Adam phone number listing',
      day: 'Monday 29th at 9am',
      reminder: false,
    },
    {
      id: 2,
      text: 'Practice some react?',
      day: 'Sunday 28th at 8am',
      reminder: false,
    },
  ]);

  // Set task name

  // Save task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='drag-container'>
      <Draggable nodeRef={nodeRef} handle='#handle' bounds='parent'>
        <div className='container' ref={nodeRef}>
          <hr className='rounded' id='handle'></hr>
          <Header
            title={taskTitle}
            onEditTaskName={() => setEditTaskName(!editTaskName)}
            editTaskName={editTaskName}
            changeTaskName={setTaskTitle}
            onAddTask={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />{' '}
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            <div className='backmsg'> No Tasks </div>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default TaskList;
