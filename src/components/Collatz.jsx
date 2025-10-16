import React, { Component } from 'react'

export class Collatz extends Component {
  cajaNumero = React.createRef();
  state = {
    numeros : []
  }

  generarCollatz = (event) => {
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];
    while (numero != 1){
        if (numero % 2 == 0){
            numero = numero/2;
        }
        else{
            numero = numero * 3 + 1;
        }
        aux.push(numero);
    }
    this.setState({
        numeros: aux
    })
  }

  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        <form onSubmit={this.generarCollatz}>
            <label>Introduzca numero</label>
            <input type='number' ref={this.cajaNumero} />
            <button>
                Mostrar conjetura
            </button>
            <ul>
                {
                    this.state.numeros.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })    
                }
            </ul>
        </form>
      </div>
    )
  }
}

export default Collatz