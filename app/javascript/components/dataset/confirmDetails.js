import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";



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
	padding: 25px;
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

const ConfirmDetails = () => {
	const history = useHistory();

	const handleNext = () => {
		if(true){
    	history.push("/");
		}
	}
	const handlePrev = () => {
		if(true){
    	history.push("/adjust_settings");
		}
	}
	return (
		<div> 
			<Container>
			the confirm details component
			</Container>

			<Foot>
				<Next onClick={handleNext}>Next </Next> 
				<Cancel onClick={handlePrev}>Back </Cancel> 
			</Foot>
		</div>
	)
}

export default ConfirmDetails;