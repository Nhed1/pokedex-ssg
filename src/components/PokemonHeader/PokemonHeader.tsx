export default function PokemonHeader({ pokemonData }) {
  return (
    <div>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h1>{pokemonData.name}</h1>
    </div>
  );
}
