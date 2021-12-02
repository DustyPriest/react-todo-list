import { useState } from 'react';
import PageHeader from './Components/PageHeader';
import TaskList from './Components/TaskList';

const App = () => {
  const [toggleMode, setToggleMode] = useState(false);

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
      <TaskList />
    </div>
  );
};

export default App;
