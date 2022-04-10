import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import Link from "next/link";
export default function Pokemon({ pokemonData }) {
  console.log(pokemonData);
  return (
    <div>
      <header>
        <Link href="/">
          <img src="" alt="Voltar" />
        </Link>
      </header>
      <div>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h1>{pokemonData.name}</h1>
      </div>
      <table>
        {pokemonData.stats.map((stat) => (
          <tr key={stat.stat.name}>
            <td>{stat.stat.name}</td>
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
