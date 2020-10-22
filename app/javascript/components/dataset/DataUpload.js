import React, {useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components';
import drag from '../images/drag.png';
import { useHistory } from "react-router-dom";
import { parse } from "papaparse"
import { useDispatch } from 'react-redux';
import { ADDFILE, REMOVEFILE } from '../../action/type';



const Container = styled.div`
	max-width: 718px;
	height: 500px;
  flex: 1;
  display: flex;
	margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fafafc;
  color: #2c2c2c;
  outline: none;
	box-sizing: border-box;
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

	button {
		float: right;
		background-color: blue;
		color: #fff;
		padding: 12px 20px 12px 20px;
		border: none;
		border-radius: 8px;
	}
`
const InnerDiv = styled.div`
	height: 200px;
	width: 250px;
	background-color: rgb(235, 235, 237);
	padding: 30px;
	display: block;
	text-align: center;
	img{
		display:block;
    margin:auto;
	}
	button{
		background-color: blue;
		color: #fff;
		padding: 12px 20px 12px 20px;
		border: none;
		margin-top: 15px;
		border-radius: 3px;
	}
	p{
		color: #008eff;
		font-weight: bold;
	}
	span {
		display: block;
		font-weight: bold;
	}
`;
const LastDiv = styled.div`
	width: 250px;
	color: #D3D3D3;
	font-size: 12px;
	font-weight: bold;
	margin-top: 15px;
`

const DataUpload = () => {
	const [ fileName, setfileName] = useState([])
	const dispatch = useDispatch()
	const history = useHistory();

	const onDrop = useCallback(acceptedFiles => {
		setfileName(acceptedFiles.map(file => file.name))
     acceptedFiles.forEach((file) => {  
        const reader = new FileReader() 
        const rABS = !!reader.readAsBinaryString;  // !! converts object to boolean 
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = (e) => {
					const text = e.target.result;
					const result = parse(text, { header: true });
					dispatch({ type: ADDFILE, payload: result})
        }
				if (rABS) reader.readAsBinaryString(file);
				else reader.readAsArrayBuffer(file);
     })
  }, [])
	const {getRootProps, getInputProps} = useDropzone({ onDrop, accept: '.csv,.xlsx,.tsv,.xls,.txt'})

	const handleClick = (e) => {
		e.stopPropagation();
		setfileName([])
		dispatch({ type: REMOVEFILE, payload: {}})
	}

	const handleNext = () => {
		if(fileName.length > 0){
    	history.push("/adjust_settings");
		}
	}
	const file_path = (file_input) => {
		if(file_input.length > 0){
			return <div>
					<p>{fileName[0]}</p> <span> or...</span><button onClick={handleClick}>Cancel</button>
				</div>
		} else {
			return	<div>
					<p>Drag and drop files here</p>	<span> or...</span><button>Browse files</button>
				</div>
		}
	}
	
	return (
	<div>
		<Container>
			<p> Upload your dataset to this page and click next when you finish</p>
			<InnerDiv {...getRootProps()}>
				<input {...getInputProps()}  />
					<img src={drag}/>
					{ file_path(fileName) }	
			</InnerDiv>
			<LastDiv> support: CSV, TSV, .TXT, XLS, XLSX</LastDiv>
		</Container>
		
		<Foot><button onClick={handleNext}>Next </button> </Foot>
		</div>	
  )
}

export default DataUpload;