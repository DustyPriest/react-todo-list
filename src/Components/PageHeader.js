import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PageHeader = ({ toggleMode, modeState }) => {
  return (
    <div className='page-header'>
      <div style={{ position: 'absolute', left: '10px' }}>
        {new Date().toLocaleDateString('en-au', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </div>
      <button className='btn btn-scale' style={{ positon: 'absolute' }}>
        {' '}
        New List{' '}
      </button>
      {!modeState ? (
        <FaSun
          className='icon'
          onClick={toggleMode}
          style={{
            fontSize: '1.5em',
            position: 'absolute',
            right: '10px',
          }}
        />
      ) : (
        <FaMoon
          className='icon'
          onClick={toggleMode}
          style={{
            fontSize: '20',
            position: 'absolute',
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
