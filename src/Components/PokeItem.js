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
        <figure className="pokemon">
            <div className="img-container" >
                <img src={image} alt="" />
            </div>
            <figcaption className="info">
                <span className="number">{PokePictures[props.number].number}</span>
                <h3 className="name">{props.name}</h3>
                <p className="type">Type: <span>{PokePictures[props.number].type}</span></p>
                <a className="link" href={props.url}>Check out</a>
            </figcaption>
        </figure>

    )
}

export default PokeItem;
