import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper as MUIPaper, PaperProps } from '@material-ui/core'

import theme from './theme'

const StyledPaper = styled(MUIPaper)`
  padding: ${theme.space()};
  box-shadow: 0 1px 8px rgba(0,0,0,0.1);
`

interface Props extends PaperProps {

}

const Paper: FC<Props> = props => <StyledPaper {...props} />

export default Paper
