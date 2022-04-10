import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Input from "../components/Form/Form";
import { GlobalStyle } from "../styles/GlobalStyles";
import Container from "../components/ContainerCards/Container";
import { useEffect, useState } from "react";

interface PokemonsObj {
  url: string;
  name: string;
}

const Home: NextPage = ({ pokemons }: { pokemons: Array<PokemonsObj> }) => {
  const [pokemonsData, setPokemonsData] = useState<Array<PokemonsObj>>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setPokemonsData(pokemons);
    setIsLoading(false);
  }, []);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Input />
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
