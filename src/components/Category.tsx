import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { ICategory } from 'types/ICategory'

import { theme, Text, Space } from 'ui'
import { useStore } from 'store'

import Note from 'components/Note'

const Subs = styled.div`
  padding-left: ${theme.space()};
`

const Title = styled(Text)`
  padding-bottom: ${theme.space(0.5)};
  border-bottom: 1px solid ${theme.color.lightGrey};
`

const Notes = styled.div`
  padding-left: ${theme.space()};
`

const CategoryContainer = styled.div`

`

interface Props {

}

const Category: FC<Props & ICategory> = ({ id, name }) => {
  
  const { categoriesStore: { getCategories }, notesStore: { getNotes }} = useStore()
  
  const subCategories = getCategories(id)
  const notes = getNotes(id)
  
  return (
    <>
      <Title bold>{name}</Title>
      <Space height={0.5} />
      {!!subCategories.length && (
        <Subs>
          {subCategories.map(category => <Category key={category.id} {...category} />)}
        </Subs>
      )}
      {!!notes.length && (
        <Notes>
          {notes.map(note => <Note key={note.id} {...note} />)}
        </Notes>
      )}
    </>
  )
}

export default observer(Category)
