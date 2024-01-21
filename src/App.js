import React,{useState,useEffect} from 'react';

import './App.css';

//importing components
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {

  //STATES
  const [inputText,setInputText] = useState("");    //state
  const [todos,setTodos] = useState([]);      //array of objects
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  //USE EFFECT 
  // useEffect(()=> {        //(arrow function,state on whose change the function runs)
  //   console.group("testing use effect");
  // },[]);                  // here [] so it runs only once initially


  // useEffect(()=>{
  //   console.log(`Checking use effect with "todos" state change`);
  // },[todos]);

  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  },[]);


  useEffect(()=>{
    // console.log(`Checking use effect with "todos" and "status" state change`);
    filterHandler();
    saveLocalTodos();
  },[todos,status]);


  //FUNCTIONS OR EVENTS
  const filterHandler = () => {
    switch(status){
      case "completed" : setFilteredTodos(todos.filter(todo => todo.completed === true));
                         break;
      case "uncompleted" : setFilteredTodos(todos.filter(todo => todo.completed !== true));
                           break;
      default : setFilteredTodos(todos);
                break;
    }
  };

  //SAVE TO LOCAL STORAGE
  const saveLocalTodos = () => {                          //saves to local storage but cannot retrieve
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
      }
    else{
      let values = JSON.parse(localStorage.getItem("todos"));    //parsing the json values
      console.log(values);
      // if(values.length !== 0 )
      setTodos(values);   //wasn't working because of stupid react strict mode
    }
  };


  return (
    <div className="App">
      <header>
        <h1>Raisa's to-do list!</h1>
      </header>
      
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus}/>
      {/* <TodoList setTodos={setTodos} todos={todos} /> */}
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
