import Card from "./Card";

interface PokemonsObj {
  url: string;
  name: string;
}
const pokemonsLimitNumber = 20;

export default function Container({
  pokemons,
}: {
  pokemons: Array<PokemonsObj>;
}) {
  console.log(pokemons);
  return (
    <div>
      {pokemons.slice(0, pokemonsLimitNumber).map((pokemon: PokemonsObj) => (
        <Card key={pokemon.url} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
