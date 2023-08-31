function RandomPokemon() {
    let randomValue = Math.floor(Math.random() * 151) + 1;

    return (
        <div>
            <h1>Pokemon #{randomValue}</h1>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" 
                + randomValue + ".png"} alt="Pokemon Image" />
        </div>
    );
}

export default RandomPokemon;