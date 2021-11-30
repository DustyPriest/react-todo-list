import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAddTask, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        onClick={onAddTask}
        color='black'
        text={showAdd ? 'Close' : 'Add Task'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Daily Planner',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func,
  showAdd: PropTypes.bool,
};

export default Header;
