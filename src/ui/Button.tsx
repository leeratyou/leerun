import React, { FC } from 'react'
import MuiButton, { ButtonProps } from '@material-ui/core/Button'
import styled, { css } from 'styled-components'

// @ts-ignore
interface Props extends ButtonProps {
  color: string
}

const outlined = css<{ color?: string }>`
  color: ${p => p.color || 'white'};
  border-color: ${p => p.color || 'white'};
`

const SButton = styled(MuiButton)`
  text-transform: unset;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  ${p => p.variant === 'outlined' && outlined}
`

// @ts-ignore
const Button: FC<Props> = props => <SButton {...props} />

export default Button
