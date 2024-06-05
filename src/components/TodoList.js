import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editValue;
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className='tobo-wrapper our-gaping'>
      <div className='container'>
        <div className='title-box'>
          <h3>Todo List</h3>
        </div>
        <div className='todo-list-box'>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new todo"
          />
          <button className='buy-btn' onClick={handleAddTodo}>Add Todo</button>
        </div>

        <ul className='tobo-list'>
          {todos.map((todo, index) => (
            <li key={index}>
              <div className='todo-edit-list'>
                {editIndex === index ? (
                  <div className='save-btn'>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button className='buy-btn' onClick={handleSaveEdit}>Save</button>
                  </div>
                ) : (
                  <span>{todo}</span>
                )}
                <div className='tobo-btn'>
                  <button className='buy-btn' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='buy-btn' onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;