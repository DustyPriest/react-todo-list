import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PageHeader = ({ toggleMode, modeState }) => {
  return (
    <div className='page-header'>
      <div style={{ padding: '10px' }}>
        {new Date().toLocaleDateString('en-au', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </div>
      {!modeState ? (
        <FaSun
          className='icon'
          onClick={toggleMode}
          style={{
            fontSize: '20',
            display: 'inline',
            position: 'relative',
            right: '10px',
          }}
        />
      ) : (
        <FaMoon
          className='icon'
          onClick={toggleMode}
          style={{
            fontSize: '20',
            display: 'inline',
            position: 'relative',
            right: '10px',
          }}
        />
      )}
    </div>
  );
};

PageHeader.propTypes = {
  toggleMode: PropTypes.func,
  modeState: PropTypes.bool,
};

export default PageHeader;
