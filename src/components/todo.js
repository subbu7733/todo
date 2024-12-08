import React, { useState } from 'react';
import '../App.css'
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addTodo = () => {
        let newArray = []
        for (let i = 0; i < todos.length; i++)newArray.push(todos[i])
        newArray.push(inputValue);
        setTodos(newArray)
        setInputValue('')
    }
    const removeTodo = (index) => {
        let newArray = []
        for (let i = 0; i < todos.length; i++) {
            if (i !== index)
                newArray.push(todos[i])
        }
        setTodos(newArray)
    }
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
    
            {todos.map((element, i) => (
                <div className="todo-card" key={i}>
                    <span className="todo-text">{element}</span>
                    <button
                        className="todo-remove-button"
                        onClick={() => removeTodo(i)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
    
};
export default TodoList