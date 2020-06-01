import React from 'react';
import Jumbotron from '../jumbotron/jumbotron'
import Cards from '../cards/cards'


function Contenedor() {
    return(
        <div class="container">
                <Jumbotron />
             <div class="row text-center">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
             </div>
            
        </div>
        
    )
}

export default Contenedor