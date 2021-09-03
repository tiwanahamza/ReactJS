import React from 'react'

export const ToDoItems = ({todo}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
        </div>
    )
}
