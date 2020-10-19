import React, {useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components';
import drag from '../images/drag.png'

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
	width: 718px;
	height: 700;
  flex: 1;
  display: flex;
	margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fafafc;
  color: #2c2c2c;
  outline: none;
`;

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

const DataUpload = () => {
	// const [ files, setfiles] = useState
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
 
	const files = acceptedFiles.map(file => (
		<li key={file.path}>
				{file.path} - {file.size} bytes
		</li>
	))
	
	return (
		<Container>
			<p> Upload your dataset to this page and click next when you finish</p>
			<InnerDiv {...getRootProps()}>
				<input {...getInputProps()} />
					<img src={drag}/>
					<p>Drag and drop files here</p> 
					<span> or...</span>
					<button>Browse files</button>
			</InnerDiv>
			<aside>
				<h3> Files</h3>
				{ files}
				<h3> Files</h3>
				<h3> Files</h3>
				<h3> Files</h3>
			</aside>
		</Container>
  )
}

export default DataUpload;