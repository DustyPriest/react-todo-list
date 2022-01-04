import TaskList from './TaskList';

const TaskLists = ({
  modeState,
  taskLists,
  setPos,
  setTitle,
  toggleCheck,
  deleteTask,
  addTask,
  deleteTaskList,
  promoteZIndex,
}) => {
  const findTaskListIndex = (taskList) => {
    return taskLists.findIndex((tlist) => tlist.id === taskList.id);
  };
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
          deleteTaskList={deleteTaskList}
          index={findTaskListIndex(taskList)}
          promoteZIndex={promoteZIndex}
        >
          {' '}
        </TaskList>
      ))}
    </>
  );
};

export default TaskLists;
