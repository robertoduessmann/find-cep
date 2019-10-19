import React from 'react'
import styled from 'styled-components'

const Button = ({children}) => (
    <StyledButton type='submit'>{ children }</StyledButton>    
)

const StyledButton = styled.button`
display: inline-block;
border-radius: 7px;
padding: 1.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: #8899ef;
color: white;
border: 2px solid white;
font-size: 20px;
`

export default Button