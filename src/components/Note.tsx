import React, { FC } from 'react'
import styled from 'styled-components'

import { INote } from 'types/INote'

import { theme, Text } from 'ui'

const NoteContainer = styled.div`
  padding-bottom: ${theme.space()};
`

interface Props {

}

const Note: FC<Props & INote> = ({ content, dateCreated }) => {
  return (
    <NoteContainer>
      <Text>{content}</Text>
      <Text.Sub color={theme.color.notActiveWhite}Sub>posted at {dateCreated}</Text.Sub>
    </NoteContainer>
  )
}

export default Note
