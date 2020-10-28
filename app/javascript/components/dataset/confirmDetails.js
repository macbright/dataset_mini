import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { uploadfile } from '../util/util';



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
const Foot = styled.div`
	max-width: 718px;
	height: 100px;
	display: block;
	margin: 0 auto;
  align-items: center;
	border-top: 2px solid #D3D3D3;
	box-sizing: border-box;
	padding: 20px;
`
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

const SelectedCol = styled.div`
	padding-left: 30px;
`;

const UniqueCol = styled.div`
	margin-top: 10px;
	padding-left: 30px;
	span{
		font-size: 16px;	
		padding: 10px;	
	}
`;
const FirstP =  styled.span`
	font-weight: bold;
	margin-right: 80px;
	font-size: 20px;
`;



const ConfirmDetails = () => {
	const history = useHistory();
	const addKey = useSelector(state => state.addKey)
	const file = useSelector(state => state.updatedfile);
	const uniqueColumn = useSelector(state => state.uniqueColumn)

	const handleNext = () => {
		for(let i =0; i<file.length; i++){
			let data = uploadfile(file[i], Object.keys(addKey))
			 axios.post('api/v1/datasets', data)
				.then(res => {
        	console.log(res);
       	 	console.log(res.data);
      })
		}
		history.push("/");

	}
	const handlePrev = () => {
		if(true){
    	history.push("/");
		}
	}
	
	const showColumns = addKey.map((key, i) => 
		<SelectedCol key={i}>
			<p> { key}</p>
		</SelectedCol>
	)
	
	const showUniqueColumns = Object.keys(uniqueColumn).map(key => 
		<UniqueCol key={key}>
			<div>
			<FirstP> { key}:</FirstP>
			<span> { uniqueColumn[key]} </span>
			</div>
		</UniqueCol>
	)

	return (
		<div> 
			<Container>
				{console.log(file)}
				<strong>Included columns: </strong>
				{showColumns}

				<strong>	ID, Name, Timestamp assignment: </strong>
				{showUniqueColumns}
			</Container>

			<Foot>
				<Next onClick={handleNext}>Next </Next> 
				<Cancel onClick={handlePrev}>Back </Cancel> 
			</Foot>
		</div>
	)
}

export default ConfirmDetails;