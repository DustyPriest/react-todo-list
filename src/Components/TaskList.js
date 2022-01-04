import { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Draggable from 'react-draggable';
import { FaHamburger } from 'react-icons/fa';

const TaskList = ({
  modeState,
  listId,
  pos,
  title,
  tasks,
  index,
  setPos,
  setTitle,
  toggleCheck,
  deleteTask,
  addTask,
  deleteTaskList,
  promoteZIndex,
}) => {
  const posLoaded = useRef(false);
  const nodeRef = useRef(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editTaskName, setEditTaskName] = useState(false);
  const [onDeleteList, setOnDeleteList] = useState(false);
  const [deltaPos, setDeltaPos] = useState({ x: pos.x, y: pos.y });

  useEffect(() => {
    if (!posLoaded.current) {
      document.getElementById(listId).style.left = `${pos.x}px`;
      document.getElementById(listId).style.top = `${pos.y}px`;
      posLoaded.current = true;
    }
  });

  function handleDrag(e, pos) {
    const { x, y } = deltaPos;
    setDeltaPos({ x: x + pos.deltaX, y: y + pos.deltaY });
    document.getElementById(listId).style.opacity = 0.9;
  }

  function handleStop() {
    setPos(listId, deltaPos.x, deltaPos.y);
    document.getElementById(listId).style.opacity = 1;
    // console.log(deltaPos);
  }

  const handleDeleteConfirmation = () => {
    if (!onDeleteList) {
      document.getElementById(`${listId}-confirm`).style.display = 'flex';
      // document.querySelector(
      //   '.confirm-task-list-delete-backdrop'
      // ).style.display = 'flex';
      setOnDeleteList(!onDeleteList);
    } else {
      document.getElementById(`${listId}-confirm`).style.display = 'none';
      // document.querySelector(
      //   '.confirm-task-list-delete-backdrop'
      // ).style.display = 'none';
      setOnDeleteList(!onDeleteList);
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle='#handle'
      bounds='parent'
      onDrag={handleDrag}
      onStart={() => promoteZIndex(listId)}
      onStop={handleStop}
    >
      <div
        id={listId}
        className={`container ${modeState ? 'light' : 'dark'} `}
        style={{ zIndex: `${index * 10}` }}
        ref={nodeRef}
        onClick={() => promoteZIndex(listId)}
      >
        <div
          id={`${listId}-confirm`}
          className='confirm-task-list-delete-backdrop'
          onClick={() => handleDeleteConfirmation()}
        >
          <div className='confirm-task-list-delete'>
            <span>Delete this list?</span>
            <div className='confirmation-button-container'>
              <button
                className='btn btn-scale delete'
                onClick={() => deleteTaskList(listId)}
              >
                {' '}
                Delete
              </button>
              <button
                className='btn btn-scale cancel'
                onClick={() => handleDeleteConfirmation()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className='task-list-controls'>
          <hr className='rounded' id='handle'></hr>
          <span className='task-list-menu'>
            <FaHamburger
              className='icon'
              onClick={() => handleDeleteConfirmation()}
            />
          </span>
        </div>
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
