import Card from "./Card";

interface PokemonsObj {
  url: string;
  name: string;
}

export default function Container({
  pokemons,
}: {
  pokemons: Array<PokemonsObj>;
}) {
  console.log(pokemons);
  return (
    <div>
      {pokemons.map((pokemon: PokemonsObj) => (
        <Card key={pokemon.url} name={pokemon.name} />
      ))}
    </div>
  );
}
