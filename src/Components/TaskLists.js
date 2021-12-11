import TaskList from './TaskList';

const TaskLists = ({
  modeState,
  taskLists,
  setPos,
  setTitle,
  toggleCheck,
  deleteTask,
  addTask,
}) => {
  return (
    <>
      {taskLists.map((taskList) => (
        <TaskList
          key={taskList.id}
          modeState={modeState}
          listId={taskList.id}
          pos={taskList.pos}
          title={taskList.title}
          tasks={taskList.tasks}
          setPos={setPos}
          setTitle={setTitle}
          toggleCheck={toggleCheck}
          deleteTask={deleteTask}
          addTask={addTask}
        >
          {' '}
        </TaskList>
      ))}
    </>
  );
};

export default TaskLists;
