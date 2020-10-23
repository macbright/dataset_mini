import {combineReducers} from 'redux';
import { ADDFILE, REMOVEFILE, TOGGLECOLUMN  } from '../action/type';

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

const updateFile = (state= {}, {type, payload}) => {
	switch(type){
		case TOGGLECOLUMN:
			return payload
		default:
			return state
	}
}
const rootReducer = combineReducers({
	file: fileReducer,
	updatedfile: updateFile
})

export default rootReducer;