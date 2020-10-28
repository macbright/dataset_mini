 export const timestampError = (e, ref) =>{
	e.target.value = "options"
	ref.current.innerHTML = "Selected column can not be converted to a timestamp"
	ref.current.style.display = 'block';
	return
 }

export const timestampGood = (ref) =>{
	ref.current.style.display = 'none';
	return
 }

 export const idError = (e, ref) =>{
	e.target.value = "options"
	ref.current.innerHTML = "Selected column is not unique and can't be used as ID please select another"
	ref.current.style.display = 'block';
	return
 }

 export const idGood = (ref) =>{
	ref.current.style.display = 'none';
	return
 }