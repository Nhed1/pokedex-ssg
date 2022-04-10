import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type cardType = {
  name: string;
  url: string;
};

type pokemonType = {
  sprites: {
    front_default: string;
  };
  name: string;
};

export default function Card({ name, url }: cardType) {
  const [pokemon, setPokemon] = useState<pokemonType>();
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <Link href={`/${name}`}>
      <div>
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          width={120}
          height="auto"
        />

        <h3>{name}</h3>
        <p></p>
      </div>
    </Link>
  );
}
