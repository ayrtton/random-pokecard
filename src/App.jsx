import "./App.css";
import RandomPokemon from "./components/RandomPokemon";

function App() {
  return (
    <>
      <div>
        <RandomPokemon pokemonQuantity={ 10 } />
        <RandomPokemon pokemonQuantity={ 20 } />
      </div>
    </>
  );
}

export default App;
