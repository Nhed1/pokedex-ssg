import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardDiv, ImgAndTitle, Tags } from "./CardStyle";

type cardType = {
  name: string;
  url: string;
};

type pokemonProps = {
  sprites: {
    front_default: string;
  };
  name: string;
  types: pokemonType[];
};

type pokemonType = {
  type: {
    name: string;
  };
};
export default function Card({ name, url }: cardType) {
  const [pokemon, setPokemon] = useState<pokemonProps>();
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  }
  useEffect(() => {
    fetchData();
    console.log(pokemon?.types[0].type.name);
  }, []);
  return (
    <Link href={`/${name}`}>
      <CardDiv>
        <ImgAndTitle>
          <img
            src={pokemon?.sprites.front_default}
            alt={pokemon?.name}
            width={120}
            height="auto"
          />
          <h3>{name}</h3>
        </ImgAndTitle>
        <Tags>
          {pokemon?.types.map((type) => (
            <div key={type?.type.name}>
              <p>{type?.type.name}</p>
            </div>
          ))}
        </Tags>
      </CardDiv>
    </Link>
  );
}
