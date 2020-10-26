import _, { map } from 'underscore';

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

export const updateColumn = (file, obj, e) => {
	let newFile = [];
	for(let i = 0; i < file.length; i++){
		Object.entries(obj).forEach((key, val) =>{
			if(file[i][key[1]]){
	       file[i][key[0]] = file[i][key[1]]
         if(key[0] === 'timestamp'){
         	const timeSt = toTimestamp(file[i][key[0]])
          if(timeSt.toString().length === 10 && !isNaN(timeSt)) {
          	console.log("working")
          } else { 
						e.target.value = "options"
						return
          }    
         }
	      delete file[i][key[1]]
	    }
		})
    newFile.push(file[i])
		
	}
	return newFile
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