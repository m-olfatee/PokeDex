import React from 'react';
import './pokeitem.css';

const PokeItem = (props) => {
    return (
        <figure className="pokemon">
            <img className="img-container" src='https://pokeres.bastionbot.org/images/pokemon/25.png' alt="" />
            <figcaption>
                <h3 className="name">Title:</h3>
                <a className="link" href='#'>Check out</a>
            </figcaption>
        </figure>
    )
}

export default PokeItem;
