import './App.css';
import useCustomHook from './hooks/useCustomHook'

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemon = useCustomHook(urlPokemon) //corrección: const {data: pokemon, error: errorPokemonm, loading: loadingPokemon} = useCustomHook(urlPokemon)
  const rick = useCustomHook(urlRick) // correción: const {data: rick, error: erorRick, loading: loadingRick} = useCustomHook(urlRick)
  //con el destucturing nos podemos traer el error también

  if (!pokemon || !rick) return <p>Cargando...</p>
  
  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h2>Personaje Rick and Morty</h2>
      <p>{rick.name}</p>
      <img src={rick.image} alt={rick.name}  />
    </>
  );
}

export default App;

//corrección: componetizar el html