import React, { Component } from 'react'
import { useEffect } from 'react'
export class TablaMultiplicarv2 extends Component {
    numerosSelect = []
    cajaSelect = React.createRef()
    state = {
        numeros: []
    }

    cargarOpciones = () => {
            for(let i=0; i<10; i++){
                this.numerosSelect.push(parseInt((Math.random()*100)+1))
            }
    }
    
    generarTabla = (event) => {
        event.preventDefault()
        let numero = parseInt(this.cajaSelect.current.value);
      
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
            <h1>
                Tabla Multiplicar 2
            </h1>

            {
            this.cargarOpciones()
            }
            <form onSubmit={this.generarTabla}>
                <select ref={this.cajaSelect}>
                    {
                     this.numerosSelect.map((opcion, index) => {
                        return(<option value={opcion}>{opcion}</option>)
                     })
                    }   
                </select>
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
    // numerosSelect = []
    // cajaSelect = React.createRef()
    // state = {
    //     numerosSelect: [],
    //     numeros: []
    // }

    // cargarOpciones = () => {
    //     if(this.numerosSelect.length <= 0){

    //         for(let i=0; i<10; i++){
    //             this.numerosSelect.push(parseInt((Math.random()*100)+1))
    //         }
    //         this.setState({numerosSelect: this.numerosSelect})
    //     }
    // }
    
    // generarTabla = (event) => {
    //     event.preventDefault()
    //     let numero = parseInt(this.cajaSelect.current.value);
      
    //     let resultados = [];

    //     for(let i=1; i<=10; i++){
    //         resultados.push({
    //             operacion: numero + "*" + i,
    //             resultado: numero * i
    //         })
    //     }

    //     this.setState({
    //         numeros: resultados
    //     })
    // }

    // render() {
    //     return (
    //     <div>
    //         <h1>
    //             Tabla Multiplicar 2
    //         </h1>

    //         <form onSubmit={this.generarTabla}>
    //             <select onClick={this.cargarOpciones} ref={this.cajaSelect}>
    //                 {
    //                  this.state.numerosSelect.map((opcion, index) => {
    //                     return(<option value={opcion}>{opcion}</option>)
    //                  })
    //                 }   
    //             </select>
    //              <button>Mostrar tabla</button>
    //             <table border={1}>
    //                 <thead>
    //                     <tr>
    //                         <th>Operacion</th>
    //                         <th>Resultado</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                         this.state.numeros.map((multiplicacion, index) => {
    //                             return (
    //                                 <tr key={index}>
    //                                     <td>{multiplicacion.operacion}</td>    
    //                                     <td>{multiplicacion.resultado}</td>    
    //                                 </tr>
    //                             )
    //                         })
    //                     }
    //                 </tbody>
    //             </table>
    //         </form>
    //     </div>
    //     )
    // }
}

export default TablaMultiplicarv2