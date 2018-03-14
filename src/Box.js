import React from 'react'
import styled from 'styled-components'

const Box = ({children}) => (
    <Div>{ children }</Div>
)

export const Div = styled.div`
width: 30%;
text-align:left;
margin: auto;  
border: 3px dotted #8899ef;
padding: 10px;  
`

export default Box