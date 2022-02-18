import React from 'react'
import styled from 'styled-components'

function App() {

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `
  const H1 = styled.h1`
    color : ${(props) => props.theme.textColor};
  `
  interface DummyProps {
    text : string
    active? : boolean
  }

  function Dummy({ text, active = false }: DummyProps) {
    return <h1>{text}</h1>
  }
  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget)
  }

  return (
    <div>
      <Container>
        <H1>protected</H1>
        <Dummy active text="hello"></Dummy>
        <button onClick={onClick}>click</button>
      </Container>
    </div>
  )
}
export default App;