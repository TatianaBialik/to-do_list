import React, { useState, createRef } from "react";
import getRandomPhrase from "../utils/randomPhrase";
import { v4 as uuid } from 'uuid';

function AddForm({ onAddItemSubmit }) {

  // const [item, setItem] = useState('');

  // function handleChangeItem(e) {
  //   setItem(e.target.value);
  // }

  const itemInput = createRef('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddItemSubmit({title: itemInput.current.value, id: uuid()});
    itemInput.current.value = '';
  }

  return (
    <section className='form-section'>
      <h2 className='form-section__title'>What do you have to do?</h2>
      <form 
      className='add-item-form' 
      onSubmit={handleSubmit}>
        <input
        type='text' 
        className='add-item-form__input' 
        placeholder={getRandomPhrase()}
        ref={itemInput}
        maxLength='140'
        required />

        <button 
        className='add-item-form__submit' 
        type='submit'>Save</button>
      </form>
    </section>
    
  )
};

export default AddForm;
