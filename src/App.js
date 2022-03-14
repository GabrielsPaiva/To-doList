import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import media, { generateMedia } from "styled-media-query";
import Lixo from "./assets/lixeira.png"

const customMedia = generateMedia({
  customTablet : '938px',
  customMobileL : '612px',
  mobileS : '320px',
})
const GlobalStyle = createGlobalStyle`
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
const Form = styled.form`
display: flex;
justify-content: center;
`

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid;
border-radius: 25px;
width: 70%;
height: 1100px;

${media.lessThan('medium')`
width: 100%;
border-radius: 0px;
`}
${customMedia.lessThan('')}
`
const Title = styled.h2`
padding-bottom: 10%;
font-size: 50px;
`
const Div = styled.div`
background-color: white;
display: flex;
align-items: center;
border-radius: 25px;
width: 90%;
height: 10%;
margin-bottom: 5%;
`
const Input = styled.input`
border: none;
font-size: 35px;
width: 80%;
height: 90%;
margin-left: 1.5%;
`
const PlusButton = styled.button`
background-color: #cacbcc;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
width: 10%;
height: 50%;
margin-left: 4%;

${media.lessThan('medium')`
height: 10vw;
`}
`
const List = styled.ul`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 25px;
overflow-y: auto;
width: 91%;
height: 50%;
`
const ItemBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: solid 1px;
margin-top: 1%;
width: 90%;
height: fit-content;
top: 2%;
`

const Item = styled.li`
display: inline;
font-size: 25px;
list-style: none;
width: 90%;
height: fit-content;
`
const Erase = styled.img`
border-radius: 50%;
width: 10%;
height: 90%;
`
const Clear = styled.button`
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
text-transform: uppercase;
border: none;
width: 12em;
height: 5%;
margin-left: 2em;
margin-top: 3%;
&:hover{
  cursor: pointer;
}
`

export default class todoList extends React.Component {
  state = {
    task: "",
    taskList: [],
  };

  add = (e) => {
    if (this.state.task !== "") {
      this.setState({
        taskList: this.state.taskList.concat({
          task: this.state.task,
          id: Date.now(),
        }),
        task: "",
      });
    }
    return (this.input.value = null);
  };

  remove = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((item) => item.id !== id),
    });
  };

  reset = () => {
    this.setState({
      taskList: []
    })
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  changeDefault = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.changeDefault}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <Main>
          <Title>TO-DO LIST</Title>
          <Div>
          <Input ref={(el) => (this.input = el)} onChange={this.handleChange} />
          <PlusButton onClick={this.add}>+</PlusButton>
          </Div>
          <List>
            {this.state.taskList.map((item) => (
            <ItemBox>
                <Item>{item.task}</Item>
                <Erase src={Lixo} alt="" onClick={() => this.remove(item.id)}/>
              </ItemBox>
            ))}
          </List>
          <Clear onClick={this.reset}>Limpar Tudo</Clear>
        </Main>
        <GlobalStyle />
      </Form>
    );
  }
}
