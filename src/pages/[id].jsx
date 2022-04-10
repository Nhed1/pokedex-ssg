import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GetStaticPaths } from "next";
import PokemonHeader from "../components/PokemonHeader/PokemonHeader";
import { PokemonDiv } from "../styles/PokemonPageStyles";
import { GlobalStyle } from "../styles/GlobalStyles";

import Link from "next/link";
export default function Pokemon({ pokemonData }) {
  return (
    <PokemonDiv>
      <GlobalStyle />
      <Link href="/">
        <IoIosArrowRoundBack size="2.2rem" />
      </Link>

      <PokemonHeader pokemonData={pokemonData} />
      <table>
        {pokemonData.stats.map((stat) => (
          <tr key={stat.stat.name}>
            <td>{stat.stat.name}</td>
            <td>{stat.base_stat}</td>
          </tr>
        ))}
      </table>
    </PokemonDiv>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemonData: data,
    },
  };
}
