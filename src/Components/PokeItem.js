import React from 'react';
import './pokeitem.css';
import PokePictures from "../Components/PokePictures"

const PokeItem = (props) => {
    for (let i = 0; i < PokePictures.length; i++) {

        if (i == props.number) {
            var image = PokePictures[i].src
            console.log(image)
        }
    }

    return (
        <figure>
            <img src={image} alt="" />
            <figcaption>
                <h3>{props.name}</h3>
                <a href={props.url}>Check out</a>
            </figcaption>
        </figure>
    )
}

export default PokeItem;