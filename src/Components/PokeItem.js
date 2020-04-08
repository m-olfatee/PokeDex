import React from 'react';
import './pokeitem.css';

const PokeItem = (props) => {
    return (
        <figure className="pokemon">

            <div className="img-container">
                <img src='https://pokeres.bastionbot.org/images/pokemon/25.png' alt="" />
            </div>
            <div className="info">
                <span className="number">025</span>
                <h3 className="name">Pikachu</h3>
                <small className="type">Type: <span>electric</span></small>
            </div>
        </figure>

    )
}

export default PokeItem;