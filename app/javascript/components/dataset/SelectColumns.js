import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'


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
	
	const columnOptions = keys.map((header, i) => 
		<label className="checkbox" key={i}>
			<input type="checkbox" defaultChecked="checked" value={header} />
			{header} <br />
		</label>
	)
	

	return (
		<Container>
				{console.log(keys)}
				Exclude Columns <br />
				{	columnOptions }
				Choose included columns to uniquely assign to ID, Name, and Timestamp
	
		</Container>
	)
}

export default SelectColumns;