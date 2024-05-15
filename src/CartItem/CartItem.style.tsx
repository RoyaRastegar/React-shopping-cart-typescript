import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;

  div {
    flex: 1;
  }
  .information,
  .buttons {
    justify-content: space-between;
    display: flex;
  }
  Button {
    background-color: lightgray;
    color: black;
    font-size: 20px;
    height: 50px;
  }
  Button:hover {
    background-color: gray;
  }
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
