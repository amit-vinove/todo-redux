import { Signup_Success,Signup_Fail } from "../Constants/constants";
const initialState={
    userDetails:[],
}
const signupReducer =( state=initialState,action)=>{
    switch(action.type)
    {
        case Signup_Success:
            return{...state,userDetails:[...state.userDetails,action.payload]}
        case Signup_Fail:
            return state;
        default:
            return state;
    }
}
export default signupReducer;