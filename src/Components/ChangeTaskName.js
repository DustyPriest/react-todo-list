import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckSquare } from 'react-icons/fa';
import { useState } from 'react';

const ChangeTaskName = ({ title, listId, onChange, onEditTaskName }) => {
  const [newTitle, setNewTitle] = useState(title);

  const submitTitle = (e) => {
    e.preventDefault();

    onChange(listId, newTitle);
    onEditTaskName();

    setNewTitle('');
  };

  return (
    <form className='task-name-form' onSubmit={submitTitle}>
      <input
        type='text'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        autoFocus
        onBlur={submitTitle}
      />

      <button type='submit' className='icon-button'>
        <FaCheckSquare
          type='submit'
          className='icon'
          fontSize='1.1em'
          style={{ marginLeft: '10px' }}
        />
      </button>
    </form>
  );
};

ChangeTaskName.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default ChangeTaskName;
