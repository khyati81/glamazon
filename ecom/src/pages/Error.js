import React from 'react'
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <h2>Error</h2>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items:center;
  background-color:#FFEEE3;
  height:87vh;
  h2{
    color:#003743;
  }
`;
export default Error