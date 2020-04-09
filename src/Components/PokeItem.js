import React from 'react';
import './pokeitem.css';
import PokePictures from "../Components/PokePictures"

const PokeItem = (props) => {
    // console.log(props)
    // for (let i = 0; i < PokePictures.length; i++) {
    //     if (i == props.number) {
    //         var link = PokePictures[i].link;
    //     }
    // }

    return (
        <figure className={`${props.type} pokemon`}>
            <div className="img-container" >
                <img src={props.src} alt="" />
            </div >
            <figcaption className="info">
                <span className="number">{props.number}</span>
                <h3 className="name">{props.name}</h3>
                <p className="type">Type: <span>{props.type}</span></p>
                <a className="link" href={props.link} target="_blank">More Information</a>
            </figcaption>
        </figure>

    )
}

export default PokeItem