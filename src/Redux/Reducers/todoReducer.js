import { todo_Add,todo_Delete } from "../Constants/constants";
const initialState={
    todoLists:[],
}
const todoReducer =( state=initialState,action)=>{
    switch(action.type)
    {
        case todo_Add:
            return{...state,todoLists:[...state.todoLists,action.payload]}
        case todo_Delete:
            return state;
        default:
            return state;
    }
}
export default todoReducer;