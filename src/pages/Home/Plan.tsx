import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useStore } from 'store'

import { theme, Page, Paper, Text, Space, Row } from 'ui'

import Category from 'components/Category'
import { Path } from 'pages/Routes'

const StyledContainer = styled.div`
  margin-top: calc(var(--appbar-height) / 2);
  padding: 0 8rem;
`

const CategoryContainer = styled.div`
  background-color: ${theme.color.background};
  border-radius: 8px;
  margin-bottom: ${theme.space()};
  padding: ${theme.space()};
`

interface Props {

}

const Plan: FC<Props> = () => {
  
  const {
    plansStore: { current: { id, name, userCreated } },
    categoriesStore: { getCategories}
  } = useStore()
  
  const history = useHistory()
  
  const categories = getCategories(null)
  
  useEffect(() => {
    if (id) history.replace(`${Path.Plan}/${id}`)
  }, [ id ])
  
  return (
    <Page data-testid='plan-page'>
      <StyledContainer>
        <Paper>
          <Row align='center' justify='start'>
            <Text.H6>{name}</Text.H6>
            <Space width={1} />
            <Text color={theme.color.notActiveWhite}>by {userCreated}</Text>
          </Row>
          <Space />
          {categories.map(category => <CategoryContainer key={category.id}><Category {...category} /></CategoryContainer>)}
        </Paper>
      </StyledContainer>
    </Page>
  )
}

export default observer(Plan)
