import { useState } from 'react';
import PageHeader from './Components/PageHeader';
import TaskLists from './Components/TaskLists';

const App = () => {
  const [mode, setMode] = useState(false);
  const [taskLists, setTaskLists] = useState([
    {
      id: 0,
      pos: { x: 0, y: 0 },
      title: 'Tasks for Today',
      tasks: [
        {
          id: 0,
          text: 'StartUp Weekend!',
          day: 'Sunday 28th at 9am',
          check: false,
        },
        {
          id: 1,
          text: 'Sent Sophia & Adam phone number listing',
          day: 'Monday 29th at 9am',
          check: false,
        },
        {
          id: 2,
          text: 'Practice some react?',
          day: 'Sunday 28th at 8am',
          check: false,
        },
      ],
    },
    {
      id: 1,
      pos: { x: 458, y: 24 },
      title: 'Tasks for Today2',
      tasks: [
        {
          id: 0,
          text: 'StartUp Weekend!',
          day: 'Sunday 28th at 9am',
          check: false,
        },
        {
          id: 1,
          text: 'Sent Sophia & Adam phone number listing',
          day: 'Monday 29th at 9am',
          check: false,
        },
        {
          id: 2,
          text: 'Practice some react?',
          day: 'Sunday 28th at 8am',
          check: false,
        },
      ],
    },
  ]);

  // set Task List position
  const setPos = (id, nX, nY) => {
    setTaskLists(
      taskLists.map((tlist) =>
        tlist.id === id ? { ...tlist, pos: { x: nX, y: nY } } : tlist
      )
    );
  };

  // set Task List title
  const setTitle = (id, title) => {
    setTaskLists(
      taskLists.map((tlist) =>
        tlist.id === id ? { ...tlist, title: `${title}` } : tlist
      )
    );
  };

  // save task to list
  const addTask = (listId, task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTaskLists(
      taskLists.map((tlist) =>
        tlist.id === listId
          ? { ...tlist, tasks: [...tlist.tasks, newTask] }
          : tlist
      )
    );
  };

  // delete task from list
  const deleteTask = (listId, taskId) => {
    setTaskLists(
      taskLists.map((tlist) =>
        tlist.id === listId
          ? {
              ...tlist,
              tasks: tlist.tasks.filter((task) => task.id !== taskId),
            }
          : tlist
      )
    );
  };

  // toggle task check
  const setToggleCheck = (listId, taskId) => {
    setTaskLists(
      taskLists.map((tlist) =>
        tlist.id === listId
          ? {
              ...tlist,
              tasks: tlist.tasks.map((task) =>
                task.id === taskId ? { ...task, check: !task.check } : task
              ),
            }
          : tlist
      )
    );
  };

  // change dark/light mode
  const changeMode = () => {
    setMode(!mode);
    if (mode) {
      document.body.style.backgroundColor = '#041F35';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'cornsilk';
      document.body.style.color = 'black';
    }
  };

  return (
    <div>
      <PageHeader toggleMode={changeMode} modeState={mode} />
      <div className='drag-container'>
        <TaskLists
          modeState={mode}
          taskLists={taskLists}
          setPos={setPos}
          setTitle={setTitle}
          toggleCheck={setToggleCheck}
          deleteTask={deleteTask}
          addTask={addTask}
        />
      </div>
    </div>
  );
};

export default App;
