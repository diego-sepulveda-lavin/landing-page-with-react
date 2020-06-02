import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Navbar from './componentes/navbar/navbar';
import Contenedor from './componentes/contenedor/contenedor'
import Footer from './componentes/footer/footer';

function Main (){
    return (
        <>
            <Navbar />
            <Contenedor />
            <Footer />
        </>
    )
}






ReactDOM.render(<Main />, document.getElementById('root'))

