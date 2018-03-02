import React from 'react'
import styled, {injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { fetchAddress } from './reducers/cep'

const Cep = ({ isFetching, code, state, city, district, address, errorMessage, handleSubmit }) =>  (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <Input type='text' id='cep' />
        <Button type='submit' disabled={isFetching}>{isFetching ? 'Buscando...' : 'Buscar'}</Button>
      </div>
    </form>  
    
    {errorMessage && <span>{errorMessage}</span>}
    
    {!errorMessage &&
      <Ul>
        <li>CEP: {code}</li>
        <li>Estado: {state}</li>
        <li>Cidade: {city}</li>
        <li>Bairro: {district}</li>
        <li>Endereço: {address}</li>
      </Ul>
    }  
  </div>
)

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const Input = styled.input`
  width: 60%;
  font-size: 40px;
`

const Ul = styled.ul`
  & li + li {
    border-top: 1px solid #ccc;
    padding: 10px 0;
  }
`

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #8899ef;
  color: white;
  border: 2px solid white;
`

const mapStateToProps = (state) => {
  return state.cep   
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: async (e) => {
      e.preventDefault()
      const cep = e.target.cep.value  
      dispatch(fetchAddress(cep))   
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cep);