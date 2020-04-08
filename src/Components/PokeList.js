import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './pokelist.css';
import PokePictures from './PokePictures'

class PokeList extends Component {
    state = {
        PokeDex: []
    }

    componentDidMount = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ PokeDex: data.results })
            });
    }

    render() {
        return (
            <section className="poke-container">
                {this.state.PokeDex.map((pokemon, i) => {
                    return (<PokeItem name={pokemon.name} url={pokemon.url} key={i} number={i}
                    />)
                })}

            </section>);
    }
}

export default PokeList;