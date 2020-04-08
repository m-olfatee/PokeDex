import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './pokelist.css';

class PokeList extends Component {
    state = { PokeDex: [] }

    componentDidMount = () => {
        fetch('')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ PokeDex: data })
            });
    }
    render() {
        return (
            <section>
                <h1>PokeDex</h1>
                <div className="poke-container">
                    <PokeItem />
                    <PokeItem />
                    <PokeItem />
                    <PokeItem />
                    <PokeItem />
                    <PokeItem />
                    <PokeItem />
                    <button className="sort-button">Sort A to Z</button>
                </div>
            </section>);
    }
}

export default PokeList;