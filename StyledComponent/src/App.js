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

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 3s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Box>
        <span>★</span>
      </Box>
    </Wrapper>
    
    
    // <Father as="header">
    //   <Box bgColor="teal" />
    //   <Circle bgColor="tomato"/>
    //   <Input/>
    //   <Input/>
    //   <Input/>
    //   <Input/>
    //   <Input/>
    // </Father>
  )
}

export default App;
