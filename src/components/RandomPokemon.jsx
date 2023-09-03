import "../assets/RandomPokemon.css";

function RandomPokemon() {
    let randomValue = Math.floor(Math.random() * 151) + 1;
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomValue}.png`

    return (
        <div className="RandomPokemon">
            <h1>Pokemon #{randomValue}</h1>
            <img src={imageUrl} alt="Pokemon Image" />
        </div>
    );
}

export default RandomPokemon;