import './App.css';
import Header from "./MyComponents/Header";
import {ToDos} from "./MyComponents/ToDos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
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
    }
  ]
  return (
    <>
    <Header title="My Todos List" />
    <ToDos todos = {todos}/>
    <Footer/>
    </>
  );
}

export default App;
