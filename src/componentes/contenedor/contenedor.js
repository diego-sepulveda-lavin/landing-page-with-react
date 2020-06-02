import React from 'react';
import Jumbotron from '../jumbotron/jumbotron'
import Cards from '../cards/cards'


function Contenedor() {
    return(
        <div class="container">
                <Jumbotron title = "Bienvenidos" text = "Landing page hecha con React y Bootstrap" button = "Boton de Jumbotron" />
             <div class="row text-center">
                <Cards title = "Tarjeta 1" text = "Texto de tarjeta 1" button = "Boton 1"/>
                <Cards title = "Tarjeta 2" text = "Texto de tarjeta 2" button = "Boton 2"/>
                <Cards title = "Tarjeta 3" text = "Texto de tarjeta 3" button = "Boton 3"/>
                <Cards title = "Tarjeta 4" text = "Texto de tarjeta 4" button = "Boton 4"/>
             </div>
            
        </div>
        
    )
}

export default Contenedor