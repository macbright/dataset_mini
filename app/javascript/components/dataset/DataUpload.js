import React, {useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components';
import drag from '../images/drag.png';
import XLSX from 'xlsx' ;


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

const DataUpload = (props) => {
	const [ file, setfile] = useState([])
	const onDrop = useCallback(acceptedFiles => {
		setfile(acceptedFiles.map(file => file.name))
     acceptedFiles.forEach((file) => {
			 	console.log("file")
        const reader = new FileReader() 
        const rABS = !!reader.readAsBinaryString;  // !! converts object to boolean 
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = (e) => {
            // Do what you want with the file contents 
            var bstr = e.target.result; 
            var workbook = XLSX.read(bstr, { type: rABS ? "binary" : "array" })
            var sheet_name_list = workbook.SheetNames[0];
            var jsonFromExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], {
                raw: false,
                dateNF: "MM-DD-YYYY",
                header:1,
                defval: ""
            })
            console.log("jsonFromExcel object=")
            console.log(jsonFromExcel)

          }
          if (rABS) reader.readAsBinaryString(file);
          else reader.readAsArrayBuffer(file);
     })
  }, [])
	const {getRootProps, getInputProps} = useDropzone({ onDrop, accept: '.csv,.xlsx,.tsv,.xls,.txt'})

	const handleClick = (e) => {
		e.stopPropagation();
		setfile(undefined)
	}

	const file_path = (file_input) => {
		if(file_input.length > 0){
			return <div>
					<p>{file}</p> 
					<span> or...</span>
					<button onClick={handleClick}>Cancel</button>
				</div>
		} else {
			return	<div>
					<p>Drag and drop files here</p> 
					<span> or...</span>
					<button>Browse files</button>
				</div>
		}
	}

	const handleChange = (e) => {
		e.persist();
		setfile(e.target.files[0].name);
	}
	
	return (
		<Container>
			<p> Upload your dataset to this page and click next when you finish</p>
			<InnerDiv {...getRootProps()}>
				<input {...getInputProps()}  />
					<img src={drag}/>
					{ file_path(file) }	
			</InnerDiv>
			<LastDiv> support: CSV, TSV, .TXT, XLS, XLSX</LastDiv>
		</Container>
  )
}

export default DataUpload;