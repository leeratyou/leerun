import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper, Container } from '@material-ui/core'

import { Text } from 'ui'

interface Props {}

const Wrap = styled.div`
  padding: 1rem;
`

const Help: FC<Props> = () => {
  return (
    <Container>
      <Paper>
        <Wrap>
          <Text paragraph>Help</Text>
        </Wrap>
      </Paper>
    </Container>
  )
}

export default Help
