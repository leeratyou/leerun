import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInLeft = keyframes`
  0% {
    opacity: 0.01;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledPage = styled.div`
  animation: ${fadeInLeft} 300ms ease-in-out 1;
  padding-bottom: 3rem;
`

interface Props {
  id?: any
}

const Page: FC<Props> = props => <StyledPage {...props} />

export default Page
