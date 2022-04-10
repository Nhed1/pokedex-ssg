import styled from "styled-components";

export const HeaderDiv = styled.header`
  z-index: 10;
  background-color: #023047;
  position: sticky;
  top: 0;

  p,
  h1 {
    margin: 0;
  }

  h1 {
    font-size: 1.5rem;
  }
  img {
    width: 30px;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.div`
  padding: 10px 60px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: #8ecae6;

  @media (min-width: 800px) {
    margin: 10px 60px;
  }
`;

export const Input = styled.div`
  padding: 10px 60px;
  color: #023047;
  input {
    font-size: 1.2rem;
    height: 34px;
    width: 150px;
    border-radius: 10px;
  }

  @media (min-width: 800px) {
    padding: 10px 100px;
    input {
      height: 36px;
      width: 200px;
    }
  }
`;
