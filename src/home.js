import React from "react";
import "./index.css";
import "./App.css";
import { Form, Button } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import {useDispatch,useSelector} from 'react-redux'
import AddTodo from "./Redux/Actions/todoActions";


export default function HomePage() {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.rootReducer);
  const [todo,setTodo] = React.useState("");
  const handleTodo =(e)=>{
    e.preventDefault();
    dispatch(AddTodo(todo))
    console.log(todo)
  }
  console.log(todoList);
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Todo App</h1>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="col-md-10">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Todo" onChange={(e)=>setTodo(e.target.value)} />
            </Form.Group>
          </Form>
        </div>
        <div className="col-md-2">
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "-17px", marginLeft: "10px" }}
            onClick={(e)=>handleTodo(e)}
          >
            <PlusCircleFill /> Add
          </Button>{" "}
        </div>
      </div>
      <div>
        {todoList.todo.todoLists && todoList.todo.todoLists.map((item,index)=>(
          <div key={index}>
          <h5>{item}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
