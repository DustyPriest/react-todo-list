import { useState } from 'react';
import PageHeader from './Components/PageHeader';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [toggleMode, setToggleMode] = useState(false);

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

  // change dark/light mode
  const changeMode = () => {
    setToggleMode(!toggleMode);
    if (toggleMode) {
      document.body.style.backgroundColor = '#041F35';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'cornsilk';
      document.body.style.color = 'black';
    }
  };

  return (
    <div>
      <PageHeader toggleMode={changeMode} modeState={toggleMode} />
      <Draggable handle='#handle'>
        <div className='container'>
          <hr className='rounded' id='handle'></hr>
          <Header
            onAddTask={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
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

App.propTypes = {
  toggleMode: PropTypes.func,
};

export default App;
