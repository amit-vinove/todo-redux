import { Signup_Success,Signup_Fail } from "../Constants/constants";

const SignupUser = (userDetails)=>{
    return async (dispatch)=>{
        try{
            const res = userDetails;
            dispatch({type:Signup_Success,payload:res});
        }
        catch(err){
            dispatch({type:Signup_Fail,payload:err});
        }
}}
export default SignupUser;