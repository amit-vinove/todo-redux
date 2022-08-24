import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import todoReducer from './todoReducer';

export const rootReducer = combineReducers({
    signup:signupReducer,
    todo:todoReducer
})
// export default rootReducer;
