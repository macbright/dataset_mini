import React from 'react'
import styled from 'styled-components';



const Foot = styled.div`
	max-width: 718px;
	height: 100px;
	display: block;
	margin: 0 auto;
  align-items: center;
	border-top: 2px solid #D3D3D3;
	box-sizing: border-box;
	padding: 25px;

	button{
		float: right;
		background-color: blue;
		color: #fff;
		padding: 12px 20px 12px 20px;
		border: none;
		border-radius: 8px;
	}
`

const Footer = () => {

	return (
	<Foot>
		<button>Next</button>
	</Foot>
	)
}

export default Footer;