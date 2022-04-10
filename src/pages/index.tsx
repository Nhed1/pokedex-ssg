import type { NextPage } from "next";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../styles/GlobalStyles";
import Container from "../components/ContainerCards/Container";
import { useEffect, useRef, useState } from "react";

interface PokemonsObj {
  url: string;
  name: string;
}

const Home: NextPage = ({ pokemons }: { pokemons: Array<PokemonsObj> }) => {
  const [pokemonsData, setPokemonsData] = useState<Array<PokemonsObj>>();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const firstUpdate = useRef(true);

  function handleFilterPokemons() {
    const filteredPokemonData = pokemonsData?.filter((pokemon) => {
      return pokemon.name.includes(search);
    });
    if (search !== "") {
      setPokemonsData(filteredPokemonData);
    } else {
      setPokemonsData(pokemons);
    }
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
