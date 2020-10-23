export const filterColumns = (colunmHeaders, file) => {
	let newFile = [];
	for(let i = 0; i < file.length; i++){
		let singleObj = {}
		for(let j = 0; j < colunmHeaders.length; j++){
			singleObj[colunmHeaders[j]] = file[i][colunmHeaders[j]]
		}
		newFile.push(singleObj)
	}
	return newFile
}