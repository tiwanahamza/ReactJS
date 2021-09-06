import React from 'react'
import {ToDoItems} from "../MyComponents/ToDoItems";

export const ToDos = (props) => {
    let myStyle = {
        minHeight: "100vh",
        margin: "50px auto"
    }

    return (
        <div className = "container" style = {myStyle}> 
            <h3 className="text-center my-3">ToDos List</h3>
            {props.todos.length===0? "No Todos to Display":
            props.todos.map((todo)=> {
                return (
                <>
                <ToDoItems todo ={todo} key = {todo.sno}  onDelete={props.onDelete} />
                <hr/>
                </>
                )
            })}
        </div>
    )
}