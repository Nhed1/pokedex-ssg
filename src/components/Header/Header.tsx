import { Content, HeaderDiv, Input, Title } from "./HeaderStyles";

export default function Header({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (e: string) => void;
}) {
  return (
    <HeaderDiv>
      <Content>
        <Title>
          <h1>Pokedex SSG</h1>
          <p>Static Site Generation - Nextjs</p>
        </Title>
        <Input>
          <input
            type="text"
            placeholder="Search for pokemons !"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </Input>
      </Content>
    </HeaderDiv>
  );
}
