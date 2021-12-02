import PropTypes from 'prop-types';
import Button from './Button';
import { FaEdit } from 'react-icons/fa';
import ChangeTaskName from './ChangeTaskName';

const Header = ({
  title,
  onAddTask,
  showAdd,
  editTaskName,
  onEditTaskName,
  changeTaskName,
}) => {
  return (
    <header className='header'>
      <h1>
        {editTaskName ? (
          <ChangeTaskName
            title={title}
            onChange={changeTaskName}
            onEditTaskName={onEditTaskName}
          />
        ) : (
          title
        )}
        {editTaskName ? (
          ''
        ) : (
          <FaEdit
            onClick={onEditTaskName}
            className='icon'
            fontSize='0.5em'
            style={{ marginLeft: '10px' }}
          />
        )}
      </h1>
      <Button
        onClick={onAddTask}
        color='black'
        text={showAdd ? 'Close' : 'Add Task'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Tasks for Today',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func,
  showAdd: PropTypes.bool,
  editTaskName: PropTypes.bool,
  onEditTaskName: PropTypes.func,
};

export default Header;
