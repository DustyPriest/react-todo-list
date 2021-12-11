import { useState, useRef } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Draggable from 'react-draggable';

const TaskList = ({
  modeState,
  listId,
  pos,
  title,
  tasks,
  setPos,
  setTitle,
  toggleCheck,
  deleteTask,
  addTask,
}) => {
  const nodeRef = useRef(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editTaskName, setEditTaskName] = useState(false);
  const [deltaPos, setDeltaPos] = useState({ x: 0, y: 0 });

  // Save task -- CAN DO SIMILAR FOR CREATING NEW LIST
  //const addTask = (task) => {
  //const id = Math.floor(Math.random() * 1000) + 1;
  //const newTask = { id, ...task };
  // setTasks([...tasks, newTask]);
  //};

  function handleDrag(e, pos) {
    const { x, y } = deltaPos;
    setDeltaPos({ x: x + pos.deltaX, y: y + pos.deltaY });
  }

  function handleStop() {
    setPos(listId, deltaPos.x, deltaPos.y);
    // console.log(deltaPos);
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle='#handle'
      bounds='parent'
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        className={`container ${modeState ? 'light' : 'dark'}`}
        ref={nodeRef}
      >
        <hr className='rounded' id='handle'></hr>
        <Header
          title={title}
          listId={listId}
          onEditTaskName={() => setEditTaskName(!editTaskName)}
          editTaskName={editTaskName}
          changeTaskName={setTitle}
          onAddTask={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && (
          <AddTask
            listId={listId}
            onAdd={addTask}
            toggleShowAddTask={() => setShowAddTask(!showAddTask)}
          />
        )}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            listId={listId}
            onDelete={deleteTask}
            onToggle={toggleCheck}
          />
        ) : (
          <div className='backmsg'> No Tasks </div>
        )}
      </div>
    </Draggable>
  );
};

export default TaskList;
