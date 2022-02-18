import styled from "styled-components"
import React, { useState, useEffect } from 'react'

interface ContainerProps {
    bgColor : string
    borderColor : string
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
`

interface CircleProps {
    bgColor : string
    borderColor? : string
    text? : string
}


function Circle({bgColor, borderColor, text="default text"} : CircleProps) {
  const [value, setValue] = useState<number|string>("default")

  useEffect(() => {
    setValue("after")
    
  }, [value]) 
  console.log(value)
    return ( 
        <Container bgColor={bgColor} borderColor={borderColor ?? 'blue'}>
            {text}
        </Container>
    ) 
}

export default Circle

interface PlayerShape {
    name : string
    age : number
}

const sayHello = (playerObj : PlayerShape) => `hello ${playerObj.name} yor are ${playerObj.age} years old.`

sayHello({name : 'nodno', age : 12})
