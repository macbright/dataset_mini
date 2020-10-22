import { ADDFILE } from './type';

export const addfile = file => ({
	type: ADDFILE,
	payload: file
})


// export const addfile = (file) => async dispatch => {
// 		const response =  file;

// 		dispatch({ type: ADDFILE, payload: response });
// 	};
