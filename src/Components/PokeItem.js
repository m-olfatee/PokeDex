import React from 'react';
import './pokeitem.css';

const PokeItem = (props) => {
    return (

        <figure>
            <img src='https://pokeres.bastionbot.org/images/pokemon/25.png' alt="" />
            <figcaption>
                <h3>Title:</h3>

                <a href='#'>Check out</a>
            </figcaption>
        </figure>
    )
}

export default PokeItem;