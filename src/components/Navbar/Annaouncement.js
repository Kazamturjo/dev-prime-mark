import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  height: 30px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;



const Navbar2 = () => {
  return (
    <Container  >
        Super deal! free shipping on Orders 
        </Container>
  )
}

export default Navbar2