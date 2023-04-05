import React, { useState, useEffect } from 'react';
import AddForm from "./AddForm";
import ToDoList from "./ToDoList";
import { v4 as uuid } from 'uuid';
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import * as api from '../utils/api';

function Main() {

  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    api.getToDos()
      .then(res => {
        setTodos(res.filter(item => item.isCompleted === false))
      })
  }, []);

  useEffect(() => { 
    setDones([
      {
        title: 'Did something',
        id: uuid(),
      },
    ]);
  }, []);

  const handleAddItemSubmit = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDeleteToDoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleDeleteDoneItem = (id) => {
    setDones(dones.filter((done) => done.id !== id));
  }

  const handleItemIsDone = (id) => {
    const item = todos.find(todo => todo.id === id);
    setDones([item, ...dones]);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="main">
      <AddForm onAddItemSubmit={handleAddItemSubmit} />
      <NavBar />
      <Routes>
        <Route path='/' element={<ToDoList list={todos} onDeleteItem={handleDeleteToDoItem} onDoneItem={handleItemIsDone} />} />
        <Route path='done' element={<ToDoList list={dones} onDeleteItem={handleDeleteDoneItem} />} />
      </Routes>
    </main>
  );
};

export default Main;
