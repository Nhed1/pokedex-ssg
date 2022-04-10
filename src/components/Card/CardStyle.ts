import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  background-color: #a8dadc;
  cursor: pointer;

  img {
    width: 200px;
    height: auto;
  }
`;

export const ImgAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h3 {
    color: #023047;
  }
`;

export const Tags = styled.div`
  div {
    display: grid;
    place-items: center;

    border: 1px solid transparent;
    background-color: #219ebc;
    color: #fff;
    border-radius: 10px;
    padding: 4px;
    width: 50px;
    height: 20px;
    margin: 10px;

    p {
      margin: 0;
    }
  }
`;
