import React, { Component } from "react";

export default class FormSimple extends Component {
    state={
        nombre : ""
    }
    cajaNombre = React.createRef();
    
    peticionFormulario = (event) =>{
        //DETENEMOS EL SUBMIT 
        event.preventDefault();
        console.log("Peticion lista!")
        let nombre = this.cajaNombre.current.value;
        this.setState({
            nombre: nombre
        })
        console.log(nombre)
    }
    
    render(){
        return(
            <div>
                <h1>Formulario Simple React</h1>
                <form onSubmit={this.peticionFormulario}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre}/>
                    <button>Realizar petición</button>
                </form>

                <h1>{this.state.nombre}</h1>
            </div>
        )
    }
};
