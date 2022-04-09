import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
export default function Pokemon({ pokemonData }) {
  console.log(pokemonData);
  return <div>hello this is pokemon number</div>;
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
