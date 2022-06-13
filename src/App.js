import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body{
    background-color: aqua;
    height: fit-content;
  }
  `

export default class todoList extends React.Component {

  render() {
    return (
      <>
      <GlobalStyle />
      <Main/>
      </>
    );
  }
}
