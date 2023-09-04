import PropTypes from 'prop-types';
import "../assets/RandomPokemon.css";

function RandomPokemon({ pokemonQuantity = 151 }) {
    let randomValue = Math.floor(Math.random() * pokemonQuantity) + 1;
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomValue}.png`
    const style = { color:  randomValue % 2 === 0 ? "blue" : "purple",
                    border: randomValue % 2 === 0 ? "1px solid blue" : "1px solid purple" };

    return (
        <div className="RandomPokemon" style={ style }>
            <h1>Pokemon #{randomValue}</h1>
            <img src={imageUrl} alt="Pokemon Image" />
        </div>
    );
}

RandomPokemon.propTypes = {
    pokemonQuantity: PropTypes.number,
};

export default RandomPokemon;