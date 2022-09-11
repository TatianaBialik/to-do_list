import React from "react";
import ListItem from "./ListItem";

function ToDoList(props) {
  
  return (
    <section className='list'>
      <ul className='to-do-list'>
        {props.list.map((item) =>(
          <ListItem key={item.id} content={item.title} onDelete={props.onDeleteItem} id={item.id} onDone={props.onDoneItem} />
        ))}
      </ul>
    </section>
  )
};

export default ToDoList;
