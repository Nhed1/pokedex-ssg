import { useEffect, useState } from "react";

import type { NextPage } from "next";
//components
import Header from "../components/Header/Header";
import Container from "../components/ContainerCards/Container";
//styles
import { GlobalStyle } from "../styles/GlobalStyles";

interface PokemonsObj {
  url: string;
  name: string;
}

const Home: NextPage = ({ pokemons }: { pokemons: Array<PokemonsObj> }) => {
  const [pokemonsData, setPokemonsData] = useState<Array<PokemonsObj>>();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  function handleFilterPokemons() {
    setSearch(search.toLowerCase());
    const filteredPokemonData = pokemons?.filter((pokemon) => {
      const pokemonName = pokemon.name.toLowerCase();
      return pokemonName.indexOf(search) > -1;
    });
    if (search !== "") {
      setPokemonsData(filteredPokemonData);
    } else {
      setPokemonsData(pokemons);
    }
    console.log(filteredPokemonData);
  }

  useEffect(() => {
    setPokemonsData(pokemons);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFilterPokemons();
  }, [search]);

  return (
    <>
      <GlobalStyle />
      <Header search={search} setSearch={setSearch} />
      {isLoading ? (
        <p>Loading pokemons</p>
      ) : (
        <Container pokemons={pokemonsData} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const data = await res.json();

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default Home;
