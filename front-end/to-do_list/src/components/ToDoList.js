import React from "react";
import ListItem from "./ListItem";

function ToDoList(props) {
  
  return (
    <section className='list'>
      <ul className='to-do-list'>
        {props.list.map((item) =>(
          <ListItem key={item._id} title={item.title} description={item.description} onDelete={props.onDeleteItem} id={item.id} onDone={props.onDoneItem} />
        ))}
      </ul>
    </section>
  )
};

export default ToDoList;
