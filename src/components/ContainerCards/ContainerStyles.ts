import styled from "styled-components";

export const ContainerDiv = styled.div`
  max-width: 100%;
  display: grid;
  gap: 30px;
  margin: 40px 100px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
