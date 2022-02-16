/*eslint-disable*/

import styled, { keyframes } from 'styled-components'

// const Father = styled.div`
//   display : flex;
// `
// const Box = styled.div`
//   background-color : ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `
// const Circle = styled(Box)`
//   border-radius : 50px;
// `
// const Input = styled.input.attrs({required : true, minLength : 10})`
//   background-color: tomato;
// `

const Wrapper = styled.div`
  display: flex;
`
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 3s linear infinite;
  ${Emoji}:hover {
      font-size: 98px;
  }
`

const Title = styled.h1`
  color: tomato;
`

const Wrapper1 = styled.div`
  display: flex;
  height: 100vh;
  width: 100vh;
  justify-content: center;
  align-items: center;
`

function App() {
  // return (
  //   <Wrapper>
  //     <Box>
  //       <Emoji as="span">★</Emoji>
  //     </Box>
  //     <Emoji as="span">☆</Emoji>
  //   </Wrapper>

    
    
  //   <Father as="header">
  //     <Box bgColor="teal" />
  //     <Circle bgColor="tomato"/>
  //     <Input/>
  //     <Input/>
  //     <Input/>
  //     <Input/>
  //     <Input/>
  //   </Father>
  // )

  return (
    
  )
}

export default App;
