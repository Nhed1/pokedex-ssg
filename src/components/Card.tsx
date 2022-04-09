import Link from "next/link";

type cardType = {
  name: string;
};

export default function Card({ name }: cardType) {
  return (
    <Link href={`/${name}`}>
      <div>
        <img src="" alt="" />
        <h3>{name}</h3>
      </div>
    </Link>
  );
}
