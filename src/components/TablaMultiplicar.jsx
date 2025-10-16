import React, { Component } from 'react'

export class TablaMultiplicar extends Component {
    cajaNumero = React.createRef()
    
    state = {
        numeros : [],
        tabla : []
    }

    generarTabla = (event) => {
        event.preventDefault()
        let numero = parseInt(this.cajaNumero.current.value);
      
        let resultados = [];

        for(let i=1; i<=10; i++){
            resultados.push({
                operacion: numero + "*" + i,
                resultado: numero * i
            })
        }

        this.setState({
            numeros: resultados
        })
    }

    render() {
        return (
        <div>
            <h1>Tabla Multiplicar</h1>
            <form onSubmit={this.generarTabla}>
                <label>Introduzca numero</label>
                <input type='text' ref={this.cajaNumero} />
                <button>Mostrar tabla</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.numeros.map((multiplicacion, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{multiplicacion.operacion}</td>    
                                        <td>{multiplicacion.resultado}</td>    
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div>
        )
    }
}

export default TablaMultiplicar