import React from "react";

import { v4 as uuid } from 'uuid';  //for unique id generation


const Form = ({todos,setTodos,inputText,setInputText,status,setStatus}) => {     //props.setInputText instead {setInputText}
    //javascript code
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();         //prevents the page to referesh automatically
        setTodos([              //setting up the todos
            ...todos,       //keeps all the existing previous todos
            {"text" : inputText, "completed" : false, "id" : uuid()}
        ]);
        setInputText("");      //re-setting the input text after its added to todo
    }

    const statusHandler = (e) => {
        // console.log(e.target.value);            //returns all,completed or incompleted
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick ={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo" >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;