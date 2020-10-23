import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import _, { map, values } from 'underscore'
import { filterColumns, uniqueAssign } from '../util/util'
import { useDispatch } from 'react-redux';
import { TOGGLECOLUMN } from '../../action/type';

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
		width: 20px;
		height: 15px;
		margin: 7px;
	}
	input:hover {
		cursor: pointer;
		background-color: green;
	}
`;

const LastDiv = styled.div`
	color: black;
	margin-top: 10px;
	div{
		margin: 10px;
	}
	label{
		font-weight: bold;
	}
	
	select{
		margin-top: 10px;
		height: 22px;
		width: 180px;
	}
	select:hover{
		outline-color: blue;
	}
`;

const SelectColumns = () => {
	const dispatch = useDispatch()
	const file = useSelector(state => state.file)
	const keys = Object.keys(file.payload.data[0])
	const [ state, setState] = useState(keys)
	const data = file.payload.data
	const [ newData, setNewData] = useState(data)
	const uniqs = ['id', 'name', 'timestamp']
	let selectOption = []
	
	
	const handleChange = (e) => {
		if(!e.target.checked){
			let header = _.without(state, e.target.value)
			setState(header)
			dispatch({ type: TOGGLECOLUMN, payload: filterColumns(header, data)})
			setNewData(filterColumns(header, data))
		} else {
			let header = state
			if(!header.includes(e.target.value)){
				header.push(e.target.value)
			}
			setState(header)
			dispatch({ type: TOGGLECOLUMN, payload: filterColumns(state, state)})
			setNewData(filterColumns(state, state))
		}	
		
	}

	const columnOptions = keys.map((header, i) => 
		<label className="checkbox" key={i}>
			<input type="checkbox" defaultChecked="checked" 
			value={header} onChange={handleChange} />
			{header} <br />
		</label>
	)

	const handleSelect = (e) => {
		const values = _.values(selectOption)
		if(values.includes(e.target.value)){
			alert("option already selected for another unique column")
			e.target.value = "options"
			return
		} else {
			selectOption[e.target.name] = e.target.value
		}
		
	}

const selectUniq = uniqs.map((uniq, i) => 
		<div key={i}>
			<label htmlFor={uniq}>{uniq.toUpperCase()}:</label><br />
			<select name={uniq} id={uniq} onChange={handleSelect}>
				<option value="options" defaultValue></option>
				{
           state.map((head, i) => (
             <option key={i} value={head}>{ head }</option>
           ))
          }
			</select>
		</div>
	)

	return (
		<Container>
				{console.log(state)}
				{console.log(newData)}
				Exclude Columns <br />
				{	columnOptions }
		
				<LastDiv>
					Choose included columns to uniquely assign to  
					<strong>  ID, Name, </strong> and  <strong>Timestamp</strong>
					{ selectUniq }
				</LastDiv>
	
		</Container>
	)
}

export default SelectColumns;