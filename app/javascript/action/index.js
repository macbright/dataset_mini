import { ADDFILE, TOGGLECOLUMN, ADDUNIQUECOLUMNS, REMOVEKEY, ADDKEY, REMOVEFILE, UPLOADFILE  } from './type';

export const addfile = file => ({
	type: ADDFILE,
	payload: file
})

export const columnExcluded = file => ({
	type: TOGGLECOLUMN,
	payload: file
})

export const addUniqueColumn = column => ({
	type: ADDUNIQUECOLUMNS,
	payload: culumn
})

export const addkey = key => ({
	type: ADDKEY,
	payload: key
})
export const removeKey = key => ({
	type: REMOVEKEY,
	payload: key
})
// export const addfile = (file) => async dispatch => {
// 		const response =  file;

// 		dispatch({ type: ADDFILE, payload: response });
// 	};
