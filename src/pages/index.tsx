import type { NextPage } from "next";
import Header from "../components/Header";
import Input from "../components/Form";
import { GlobalStyle } from "../styles/GlobalStyles";
import Container from "../components/Container";

interface PokemonsObj {
  url: string;
  name: string;
}

const Home: NextPage = ({ pokemons }: { pokemons: Array<PokemonsObj> }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Input />
      <Container pokemons={pokemons} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const data = await res.json();

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default Home;
