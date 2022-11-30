import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ])
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;