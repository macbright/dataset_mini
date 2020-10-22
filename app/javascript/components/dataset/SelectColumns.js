import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import _, { map } from 'underscore'


const Container = styled.div`
	max-width: 718px;
	height: 500px;
  display: block;
	margin: 0 auto;
  padding: 20px;
  background-color: #fafafc;
  color: #2c2c2c;
  outline: none;
	box-sizing: border-box;
	
	label {
		font-size: 16px;
	}
	input {
		width: 22px;
		height: 22px;
		margin: 10px;
	}
	input:hover {
		cursor: pointer;
		background-color: green;
	}
`;

const FirstDiv = styled.div`
	color: black;
`;

const LastDiv = styled.div`
	color: black;
`;

const SelectColumns = () => {
	const file = useSelector(state => state.file)
	const keys = Object.keys(file.payload.data[0])
	const [ state, setState] = useState(keys)
	const data = file.payload.data
	
	
	const handleChange = (e) => {
		if(!e.target.checked){
			let header = _.without(state, e.target.value)
			setState(header)
		} else {
			let header = state
			if(!header.includes(e.target.value)){
				header.push(e.target.value)
			}
			setState(header)
		}	
	}

	const columnOptions = keys.map((header, i) => 
		<label className="checkbox" key={i}>
			<input type="checkbox" defaultChecked="checked" 
			value={header} onChange={handleChange} />
			{header} <br />
		</label>
	)
	

	return (
		<Container>
				{console.log(state)}
				Exclude Columns <br />
				{	columnOptions }
				Choose included columns to uniquely assign to ID, Name, and Timestamp
	
		</Container>
	)
}

export default SelectColumns;