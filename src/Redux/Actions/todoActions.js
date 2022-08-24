import { todo_Add,todo_Delete } from "../Constants/constants";

const AddTodo = (todoData)=>{
    return async (dispatch)=>{
        try{
            const res = todoData;
            dispatch({type:todo_Add,payload:res});
        }
        catch(err){
            dispatch({type:todoData,payload:err});
        }
}}
export default AddTodo;