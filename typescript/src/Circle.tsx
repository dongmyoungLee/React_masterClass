import styled from "styled-components"

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
`

interface CircleProps {
    bgColor : string
}

function Circle({bgColor} : CircleProps) {
    return <Container bgColor={bgColor} />
}

export default Circle

interface PlayerShape {
    name : string
    age : number
}

const sayHello = (playerObj : PlayerShape) => `hello ${playerObj.name} yor are ${playerObj.age} years old.`

sayHello({name : 'nodno', age : 12})
