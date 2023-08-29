function RandomPokemon() {
    let randomValue = Math.floor(Math.random() * 151) + 1;

    return <h1>Pokemon #{randomValue}</h1>;
}

export default RandomPokemon;