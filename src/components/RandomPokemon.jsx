import PropTypes from 'prop-types';
import "../assets/RandomPokemon.css";

function RandomPokemon({ pokemonQuantity = 151 }) {
    let randomValue = Math.floor(Math.random() * pokemonQuantity) + 1;
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomValue}.png`

    return (
        <div className="RandomPokemon">
            <h1>Pokemon #{randomValue}</h1>
            <img src={imageUrl} alt="Pokemon Image" />
        </div>
    );
}

RandomPokemon.propTypes = {
    pokemonQuantity: PropTypes.number,
};

export default RandomPokemon;