import React, { useState } from "react"
import * as S from "./SiteStyle"

// images
import Lixo from "../assets/lixeira.png"

export default function Main() {
    const [input, setInput] = useState('')
    const [taskList, setTaskList] = useState([])

    const generateRandomColor = () => {
        let randomNumber = Math.random() * 0xFFFFFF
        let randomHexa = Math.floor(randomNumber).toString(16).padStart(6, 0)
        return '#' + randomHexa
    }

    const add = () => {
        const newTaskList = {
            task: input,
            id: Math.random(),
            color: generateRandomColor()
        }

        if (input.length > 0) {
            setTaskList((prevState) => [...prevState, newTaskList])
            setInput('')
        }
    }
    const remove = (id) => {
        const filteredList = taskList.filter((item) => {
            if (id !== item.id) { return true }
        })
        setTaskList(filteredList)
    }

    const listMapping = () => {
        return taskList.map((item, id) => ( 
            <S.ItemBox key={id} style={{ backgroundColor: item.color }}>
                <S.Item>{item.task}</S.Item>
                <S.Erase src={Lixo} alt="" onClick={() => remove(item.id)} />
            </S.ItemBox>
        ))
    }
    const mainBody = () => {
        return (
            <S.Main>
                <S.Title>TO-DO LIST</S.Title>
                <S.Div>
                    <S.Input type="text" onChange={(e) => { setInput(e.target.value) }} value={input} />
                    <S.PlusButton onClick={() => { add() }}>+</S.PlusButton>
                </S.Div>
                <S.List>
                    {listMapping()}
                </S.List>
                <S.Clear onClick={() => {setTaskList([])}}>Limpar Tudo</S.Clear>
            </S.Main>
        )
    }
    return (
        <S.Form onSubmit={(e) => { e.preventDefault() }}>
            {mainBody()}
        </S.Form>
    )
}