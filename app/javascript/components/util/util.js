import _, { map } from 'underscore';
import { timestampError, timestampGood, idError, idGood } from './errorDisplay';

export const filterColumns = (colunmHeaders, file) => {
	let newFile = [];
	for(let i = 0; i < file.length; i++){
		let singleObj = {}
		if(file[i].Title === "NA"){
			break
		}
		for(let j = 0; j < colunmHeaders.length; j++){
			singleObj[colunmHeaders[j]] = file[i][colunmHeaders[j]]
		}
		newFile.push(singleObj)
	}
	return newFile
}

export const toTimestamp =  (strDate) => {
   var datum = Date.parse(strDate);
   return datum/1000;
}

export const removeEmpty = (file) => {
	let newFile = [];
	for(let i = 0; i < file.length; i++){
		if(file[i].Title === "NA"){
			break
		}
		newFile.push(file[i])
	}
	return newFile
}

const checkId = (file) => {
	const unique = [...new Set(file.map(obj => obj.id))];
  return file.length === unique.length ? true : false
}

export const updateColumn = (file, obj, e, ref) => {
	let newFile = [];
	for(let i = 0; i < file.length; i++){
		Object.entries(obj).forEach((key, val) =>{
			if(file[i][key[1]]){
	       file[i][key[0]] = file[i][key[1]]
         if(key[0] === 'timestamp'){
         	const timeSt = toTimestamp(file[i][key[0]])
          if(isNaN(timeSt)) {
						timestampError(e, ref)
          }  else {
						timestampGood(ref)
					}  
         }
				//  if(key[0] === 'id'){
				// 	 if(checkId){
				// 		 idGood(e, ref)
				// 	 } else {
				// 		 idError(e, ref)
				// 	 }
				//  }
	      delete file[i][key[1]]
	    }
		})
    newFile.push(file[i])
		
	}
	return newFile
}

export const uploadfile = (file, columns) => {
	const headers = ['header_1', 'header_2', 'header_3','header_4']
	let newFile = [];
  let res = Object.keys(file) 
 	 for(let i=0; i <res.length; i++){
 	    if(!columns.includes(res[i])){
 	      newFile.push(res[i])
 	    }
 	  } 
	
  for(let i=0; i <headers.length; i++){
 	   file[headers[i]] = file[newFile[i]]
      delete file[newFile[i]]
 	  }
  
	return file
}


// export const updateColumn = (file, obj) => {
// 	let newFile = [];
// 	for(let i = 0; i < file.length; i++){
// 		Object.entries(obj).forEach((key, val) =>{
// 				if(file[i][key[1]]){
// 	       file[i][key[0]] = file[i][key[1]]
// 	      delete file[i][key[1]]
// 	    }
// 		})
//     newFile.push(file[i])
		
// 	}
// 	return newFile
// }