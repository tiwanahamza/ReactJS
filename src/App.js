import './App.css';
import Header from "./MyComponents/Header";
import {ToDos} from "./MyComponents/ToDos";
import {Footer} from "./MyComponents/Footer";
import {AddToDo} from "./MyComponents/AddToDo";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    // Deleting this way in react doesn't work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
  };
const addTodo = (title, desc)=>{
  console.log("I am adding this todo",title,desc);
  let sno;
  if(todos.length==0){
    sno = 0;
  }else{
    sno = todos[todos.length-1].sno + 1;
  }
  const mytodo = {
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos, mytodo]);
  console.log(mytodo);

}

  const [todos, setTodos] = useState([
    {
    sno: 1,
    title: "Go to the Market",
    desc: "You need to go to the market to get the grocery"
    },
    {
    sno: 2,
    title: "Go to the Mall",
    desc: "You need to go to the mall."
    },
    {
    sno: 3,
    title: "Go to Office",
    desc: "You need to go to the office to learn ReactJS"
    },
  ])
   
  return (
    <>
    <Header title="My Todos List" searchBar = {true} />
    <AddToDo addTodo ={addTodo}/>
    <ToDos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
