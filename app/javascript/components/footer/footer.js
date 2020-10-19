import React from 'react'
import styled from 'styled-components';



const Foot = styled.div`
	max-width: 718px;
	height: 100px;
	flex: 1;
  display: flex;
	margin: 0 auto;
  flex-direction: column;
  align-items: center;
	border-top: 2px solid #a1a4b1;
`

const Footer = () => {

	return <Foot>
		THIS IS THE APP FOOTER
	</Foot>
}

export default Footer;