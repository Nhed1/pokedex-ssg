import { Content, HeaderDiv, Input, Title } from "./HeaderStyles";

export default function Header() {
  return (
    <HeaderDiv>
      <Content>
        <Title>
          <h1>Pokedex SSG</h1>
          <p>Static Site Generation - Nextjs</p>
        </Title>
        <Input>
          <input type="text" placeholder="Search for pokemons !" />
        </Input>
      </Content>
    </HeaderDiv>
  );
}
