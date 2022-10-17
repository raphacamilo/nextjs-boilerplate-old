import styled, { keyframes } from "styled-components"

const Rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`

export const Description = styled.p`
  color: #fff;
  font-size: 1.2rem;
`

export const Logo = styled.img`
  width: 215px;
  animation: ${Rotate} 10s linear infinite;
`
