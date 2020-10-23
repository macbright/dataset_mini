import {combineReducers} from 'redux';
import { ADDFILE, REMOVEFILE, TOGGLECOLUMN, ADDUNIQUECOLUMNS, ADDKEY, REMOVEKEY } from '../action/type';
import { unique } from 'underscore';

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

const  uniqueColumn = (state= {}, {type, payload}) => {
	switch(type){
		case ADDUNIQUECOLUMNS:
			return {...state, ...payload}
		default:
			return state
	}
}

const  addKey = (state= [], {type, payload}) => {
	switch(type){
		case ADDKEY:
			return payload
		case REMOVEKEY:
			return payload
		default:
			return state
	}
}
const rootReducer = combineReducers({
	file: fileReducer,
	updatedfile: updateFile,
	uniqueColumn,
	addKey
})

export default rootReducer;