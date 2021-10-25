import React, { FC } from 'react'
import styled from 'styled-components'

import { Text, Paper, Page } from 'ui'

const StyledContainer = styled.div`
  margin-top: calc(var(--appbar-height) / 2);
  padding: 0 8rem;
`

interface Props {}

const Help: FC<Props> = () => {
  return (
    <Page>
      <StyledContainer>
        <Paper>
          <Text>Help</Text>
        </Paper>
      </StyledContainer>
    </Page>
  )
}

export default Help
