import React from 'react'
import {ToDoItems} from "../MyComponents/ToDoItems";

export const ToDos = (props) => {
    return (
        <div className = "container">
            <h3>ToDos List</h3>
            <ToDoItems todo ={props.todos[0]}/>
        </div>
    )
}