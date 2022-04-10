import { ContainerDiv } from "./ContainerStyles";
import Card from "../Card/Card";

interface PokemonsObj {
  url: string;
  name: string;
}
const pokemonsLimitNumber = 18;

export default function Container({
  pokemons,
}: {
  pokemons: Array<PokemonsObj>;
}) {
  return (
    <ContainerDiv>
      {pokemons.slice(0, pokemonsLimitNumber).map((pokemon: PokemonsObj) => (
        <Card key={pokemon.url} name={pokemon.name} url={pokemon.url} />
      ))}
    </ContainerDiv>
  );
}
