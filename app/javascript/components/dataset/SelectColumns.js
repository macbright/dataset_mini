import React from 'react'
import styled from 'styled-components';

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
`;

const FirstDiv = styled.div`

`;

const LastDiv = styled.div`

`;

const SelectColumns = () => {
	return (
		<Container>
			<FirstDiv>
					Exclude columns by untoggling the checkbox
			</FirstDiv>
			<LastDiv>
				Choose included columns to uniquely assign to ID, Name, and Timestamp
			</LastDiv>
			
		</Container>
	)
}

export default SelectColumns;