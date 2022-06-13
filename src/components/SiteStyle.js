import styled from "styled-components";
import media, {generateMedia} from "styled-media-query";

export const customMedia = generateMedia({
    customTablet : '938px',
    customMobileL : '612px',
    mobileS : '320px',
  })
  
  export const Form = styled.form`
  display: flex;
  justify-content: center;
  `
  
  export const Main = styled.div`
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
  `
  export const Title = styled.h2`
  padding-bottom: 10%;
  font-size: 50px;
  `
  export const Div = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 25px;
  width: 90%;
  height: 10%;
  margin-bottom: 5%;
  
  ${customMedia.lessThan('mobileS')`
  background-color: transparent;
  flex-direction: column;
  margin-top: 2%;
  `}
  `
  export const Input = styled.input`
  border: none;
  font-size: 35px;
  width: 80%;
  height: 90%;
  margin-left: 1.5%;
  
  ${customMedia.lessThan('mobileS')`
  border-radius: 15px;
  width: 100%;
  `}
  `
  export const PlusButton = styled.button`
  background-color: #cacbcc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 10%;
  height: 50%;
  margin-left: 4%;
  outline: none;
  
  ${media.lessThan('medium')`
  height: 10vw;
  `}
  
  ${customMedia.lessThan('mobileS')`
  width: 40%;
  margin-top: 2%;
  `}
  `
  export const List = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  overflow-y: auto;
  width: 91%;
  height: 50%;
  `
  export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px;
  border-radius: 8px;
  margin-top: 2%;
  width: 90%;
  height: fit-content;
  top: 2%;
  `
  
  export const Item = styled.li`
  display: inline;
  font-size: 25px;
  list-style: none;
  width: 90%;
  height: fit-content;
  word-break: break-word;
  `
  export const Erase = styled.img`
  border-radius: 50%;
  width: 7vw;
  `
  export const Clear = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-transform: uppercase;
  border: none;
  width: 12em;
  height: 5%;
  margin-left: 2em;
  margin-top: 1.5em;
  &:hover{
    cursor: pointer;
  }
  
  ${customMedia.lessThan('mobileS')`
  margin-left: 0.5em;
  `}
  `