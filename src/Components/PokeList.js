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
                <PokeItem />
                <PokeItem />
                <PokeItem />
                <PokeItem />
                <PokeItem />
                <PokeItem />
                <PokeItem />
                    )
                }
                )}
            </section>);
    }
}

export default PokeList;