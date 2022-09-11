import React from 'react';

function ListItem(props) {

  function handleClick() {
    props.onDone(props.id);
  };

  function handleDeleteButtonClick() {
    props.onDelete(props.id);
  };

  function handleEditClick() {

  }

  return (
    <li className='to-do-list__item item' onClick={handleClick} onDoubleClick={handleEditClick}>
      <p className='item__text'>{props.content}</p>
      <button className='item__delete-button' onClick={handleDeleteButtonClick} />
    </li>
  )
};

export default ListItem;
