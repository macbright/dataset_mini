import React from 'react'
import styled from 'styled-components';



const Nav = styled.div`
	max-width: 718px;
	height: 100px;
	padding: 20px;
  display: block;
	margin: 0 auto;
	border-bottom: 2px solid #a1a4b1;
	box-sizing: border-box;
	h4{
		float: left;
	}
`
const FloatRight = styled.div`
	float: right;
	margin: 0 auto;
	margin-top: 10px;
	div {
		display: inline-block;	
	}
	
`
const Parent = styled.div`
	width: 120px;
  height: 1px;
  background-color: gray;
  position: relative;
	p{
		font-size: 9px;
		font-weight: bold;
		margin-top: 20px;
	}
	.first-circle{
		background-color: blue;
	}

`
const Circle = styled.div`
	display:inline-block;
	width: 10px;
	height: 10px;
	position: absolute;
	border: 1px solid gray;
	margin:0 auto;
	border-radius: 100%;
	top:-6px;
`;

const LastDiv = styled.div`
	p {
		font-size: 9px;
		font-weight: bold;
		margin-top: 10px;
	}
`;
const LastCircle = styled.div`
	display:inline-block;
	width: 10px;
	height: 10px;
	position: absolute;
	border: 1px solid gray;
	margin:0 auto;
	border-radius: 100%;
	bottom: 753px;
`;
const Header = () => {

	return <Nav>
		<h4>Upload dataset</h4>
		<FloatRight>
			<Parent><Circle className="first-circle"></Circle> <p>Upload dataset</p></Parent>
			<Parent><Circle></Circle> <p>Abjust settings</p></Parent>
			<LastDiv><LastCircle></LastCircle> <p>Confirm details </p></LastDiv>
		</FloatRight>
	</Nav>
}

export default Header;