 export const timestampError = (e, ref) =>{
	e.target.value = "options"
	ref.current.innerHTML = "Selected column can not be converted to a timestamp"
	ref.current.style.display = 'block';
 }

export const timestampGood = (ref) =>{
	ref.current.style.display = 'none';
 }