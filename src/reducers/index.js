import {combineReducers} from 'redux';
import firstNameReducer from './firstNameReducer';
import lastNameReducer from './lastNameReducer';



//combineReducers is how it looks on the state
export default combineReducers({
    firstName: firstNameReducer,
    lastName:lastNameReducer
})