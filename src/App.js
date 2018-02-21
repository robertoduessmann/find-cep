import React, { PureComponent } from 'react'
import styled, {injectGlobal } from 'styled-components'

class App extends PureComponent {
  
  state = {
    isFetching: false,
    status: null,
    code: '',
    state: '',
    city: '',
    disctrict: '',
    address: '', 
    erroMessage: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching:true })

    const cep = e.target.cep.value
    const result = await fetch(`http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
    const response = await result.json();
    console.log('response: ', response)
    this.setState({ isFetching:false })
    
    if (typeof response !== 'object')
      return this.setState( { errorMessage: response})

    this.setState({
      ...response,
      errorMessage: response.message
    })      
  }

  render() {
    const { code, state, city, district, address, errorMessage, isFetching } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
    );
  }

}

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

export default App;