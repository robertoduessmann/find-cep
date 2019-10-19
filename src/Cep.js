import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { fetchAddress } from './reducers/cep'
import Button from './Button'
import Box from './Box'

const Cep = ({ isFetching, code, state, city, district, address, errorMessage, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Search>
        CEP: <Input type='text' id='cep' />
        <Button>{isFetching ? 'Buscando...' : 'Buscar'}</Button>
      </Search>
    </form>

    {errorMessage && <ErrorSpan><br/>{errorMessage}</ErrorSpan>}

    {!errorMessage && code!=='' &&
      <Box>
        <Ul>
          <li>CEP: {code}</li>
          <li>Estado: {state}</li>
          <li>Cidade: {city}</li>
          <li>Bairro: {district}</li>
          <li>Endereço: {address}</li>
        </Ul>
      </Box>
    }
  </div>
)

injectGlobal`
  * {
    box-sizing: border-box;
    background-color: #f3f3f3;
  }

  body {
    font-family: sans-serif;
    text-align: center;
  }
`

const Input = styled.input`
  width: 15%;
  font-size: 40px;
`

const Ul = styled.ul`
  list-style-type: none;
  & li + li {
    border-top: 1px solid #ccc;
    padding: 10px 0;
  }
`

const Search = styled.div`
  margin-top: 10%;
  width: 100%;
  padding: 10px;
  font-size: 30px;
  background-color: #e4e4e4;
`

const ErrorSpan = styled.span`
color: #b30000;
font-size: 20px;
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