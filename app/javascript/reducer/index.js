import {combineReducers} from 'redux';
import { ADDFILE, REMOVEFILE  } from '../action/type';

const fileReducer = (state = {}, {type, payload}) =>{
	switch (type){
		case ADDFILE:
			return {...state, payload}
		case REMOVEFILE:
			return state
		default:
			return state;
	} 
}

const rootReducer = combineReducers({
	file: fileReducer
})

export default rootReducer;