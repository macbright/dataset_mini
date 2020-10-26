import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import _, { map, values } from 'underscore'
import { filterColumns, updateColumn } from '../util/util'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { TOGGLECOLUMN, ADDUNIQUECOLUMNS, ADDKEY, REMOVEKEY} from '../../action/type';

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

const Foot = styled.div`
	max-width: 718px;
	height: 100px;
	display: block;
	margin: 0 auto;
  align-items: center;
	border-top: 2px solid #D3D3D3;
	box-sizing: border-box;
	padding: 25px;
`;
const Next = styled.button`
	float: right;
	background-color: blue;
	color: #fff;
	padding: 12px 20px 12px 20px;
	border: none;
	border-radius: 8px;
`;
const Cancel = styled.button`
		float: left;
		background-color: #D3D3D3;
		color: #eeeee;
		padding: 12px 20px 12px 20px;
		border: none;
		border-radius: 8px;
`;

const SelectColumns = () => {
	const dispatch = useDispatch()
	const file = useSelector(state => state.file)
	const keys = Object.keys(file.payload[0])
	const history = useHistory();
	const [ state, setState] = useState(keys)
	const data = file.payload
	const [ newData, setNewData] = useState(data)
	const uniqs = ['id', 'name', 'timestamp']
	let selectOption = {};
	dispatch({ type: REMOVEKEY, payload: state})
	
	const handleChange = (e) => {
		if(!e.target.checked){
			let header = _.without(state, e.target.value)
			setState(header)
			dispatch({ type: TOGGLECOLUMN, payload: filterColumns(header, data)})
			dispatch({ type: REMOVEKEY, payload: e.target.value})
			setNewData(filterColumns(header, data))
		} else {
			let header = state
			if(!header.includes(e.target.value)){
				header.push(e.target.value)
			}
			setState(header)
			dispatch({ type: REMOVEKEY, payload: e.target.value})
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
			dispatch({ type: ADDUNIQUECOLUMNS, payload: selectOption})
		}
		dispatch({ type: TOGGLECOLUMN, payload: updateColumn(data, selectOption, e)})
		console.log(selectOption)
	}

	const handleNext = () => {
		const values = _.values(selectOption)
		if(values.length > 2){
    	history.push("/confirm_details");
		} else {
			alert('you must select the ID, NAME, and TIMESTAMP')
		}
	}

	const handlePrev = () => {
    history.push("/");
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
		<div>
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
		<Foot>
			<Next onClick={handleNext}>Next </Next> 
			<Cancel onClick={handlePrev}>Cancel </Cancel> 
		</Foot>
		</div>
	)
}

export default SelectColumns;