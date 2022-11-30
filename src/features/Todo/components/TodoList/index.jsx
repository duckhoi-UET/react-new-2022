import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList: []
}

function TodoList(props) {
    const todoList = props.todoList
    return (
        <ul className='todoList'>
            {todoList.map(todo => (
                <li 
                    key={todo.id} 
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status !== 'new'
                    })}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;