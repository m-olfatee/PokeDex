import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './pokelist.css';
import PokePictures from "../Components/PokePictures"

let pokeComplicated = []

class PokeList extends Component {
    state = {
        PokeDex: [], sortUp: true
    }

    componentDidMount = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ PokeDex: data.results }, () => {
                    this.state.PokeDex.map((poke, i) => {
                        pokeComplicated.push(Object.assign({}, poke, PokePictures[i]))
                        this.setState({ pokeComplicated });
                    })
                })
            })
        this.setState({ PokeDex: pokeComplicated })
    }

    handleSortAZ = () => {
        const sortedArray = pokeComplicated.sort((a, b) => {
            let eltA = a.name.toUpperCase();
            let eltB = b.name.toUpperCase();
            if (eltA < eltB) {
                return -1;
            } else if (eltA > eltB) {
                return 1;
            } else { return 0 }
        });
        this.setState({ PokeDex: sortedArray });
    };
    handleSortZA = () => {
        const sortedArray = pokeComplicated.sort((a, b) => {
            let eltA = a.name.toUpperCase();
            let eltB = b.name.toUpperCase();
            if (eltA < eltB) {
                return 1;
            } else if (eltA > eltB) {
                return -1;
            } else { return 0 }
        });
        this.setState({ PokeDex: sortedArray });
    };
    handleSortAZUNDZA = () => {
        if (this.state.sortUp === true) {
            this.handleSortAZ();
            this.setState({ sortUp: !this.state.sortUp })
        } else {
            this.handleSortZA();
            this.setState({ sortUp: !this.state.sortUp })
        }
    }

    render() {
        return (
            <section>
                <h1>PokeDex</h1>
                <div className="poke-container" >
                    {pokeComplicated.map((pokemon, i) => {
                        return (<PokeItem name={pokemon.name} url={pokemon.url} key={i} number={i} src={pokemon.src}
                        />)
                    })}
                </div>
                <button onClick={this.handleSortAZUNDZA} className="sort-button">A-Z oder Z-A</button>
            </section>);
    }
}

export default PokeList;


    // componentDidMount = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             this.setState({ PokeDex: data.results })
    //         });
    // }
//     handleSortAZ = () => {
//         const sortedArray = this.state.PokeDex.sort((a, b) => {
//             let eltA = a.name.toUpperCase();
//             let eltB = b.name.toUpperCase();
//             if (eltA < eltB) {
//                 return -1;
//             } else if (eltA > eltB) {
//                 return 1;
//             } else { return 0 }
//         });
//         this.setState({ PokeDex: sortedArray });
//     };
//     handleSortZA = () => {
//         const sortedArray = this.state.PokeDex.sort((a, b) => {
//             let eltA = a.name.toUpperCase();
//             let eltB = b.name.toUpperCase();
//             if (eltA < eltB) {
//                 return 1;
//             } else if (eltA > eltB) {
//                 return -1;
//             } else { return 0 }
//         });
//         this.setState({ PokeDex: sortedArray });
//     };
//     handleSortAZUNDZA = () => {
//         if (this.state.sortUp === true) {
//             this.handleSortAZ();
//             this.setState({ sortUp: !this.state.sortUp })
//         } else {
//             this.handleSortZA();
//             this.setState({ sortUp: !this.state.sortUp })
//         }
//     }

//     render() {
//         return (
//             <section>
//                 <h1>PokeDex</h1>
//                 <div className="poke-container" >
//                     {this.state.PokeDex.map((pokemon, i) => {
//                         return (<PokeItem name={pokemon.name} url={pokemon.url} key={i} number={i}
//                         />)
//                     })}
//                 </div>
//                 <button onClick={this.handleSortAZUNDZA} className="sort-button">A-Z oder Z-A</button>
//             </section>);
//     }
// }

// export default PokeList;