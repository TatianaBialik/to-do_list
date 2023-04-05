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
      <h3 className='item__title'>{props.title}</h3>
      <p className='item__text'>{props.description}</p>
      <button className='item__delete-button' onClick={handleDeleteButtonClick} />
    </li>
  )
};

export default ListItem;
