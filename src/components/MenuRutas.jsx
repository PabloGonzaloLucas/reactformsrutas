import React, { Component } from 'react'

export class MenuRutas extends Component {
  render() {
    return (
      <div>MenuRutas
        <ul>
            <li><a href="/">Home</a></li>

            <li><a href="/formsimple">Formsimple</a></li>
        
            <li><a href="/cine">Cine</a></li>
         
            <li><a href="/musica">Musica</a></li>
          
            <li><a href="/collatz">Collatz</a></li>

            <li><a href="/tabla">Tabla Multiplicar</a></li>

            <li><a href="/tabla2">Tabla Multiplicar</a></li>
            
            <li><a href="/selectmultiple">Select multiple</a></li>
        </ul>
        
      </div>
    )
  }
}

export default MenuRutas