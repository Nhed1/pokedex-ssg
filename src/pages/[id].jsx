// styles
import { GlobalStyle } from "../styles/GlobalStyles";
import styles from "../styles/PokemonPageStyles.module.scss";

import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Pokemon({ pokemonData }) {
  return (
    <div className={styles.container}>
      <GlobalStyle />
      <Link href="/">
        <span>
          <IoIosArrowRoundBack size="2.2rem" />
        </span>
      </Link>

      <div className={styles.header}>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h1>{pokemonData.name}</h1>
      </div>

      <table className={styles.table}>
        {pokemonData.stats.map((stat) => (
          <tr key={stat.stat.name}>
            <th>{stat.stat.name}</th>
            <td>{stat.base_stat}</td>
          </tr>
        ))}
      </table>
    </div>
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
