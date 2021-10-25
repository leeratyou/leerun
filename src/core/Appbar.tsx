import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { NavLink, Link } from 'react-router-dom'

import { Row, Space, theme } from 'ui'
import { Path } from 'pages/Routes'
import { useStore } from 'store'

interface Props {

}

const SLink = styled(NavLink)`
  color: ${theme.color.notActiveWhite};
  text-decoration: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &.active {
    color: white;
    border-bottom: 4px solid white;
  }
`

const AppbarWrap = styled(Row)`
  padding: 0 8rem;
  height: 70px;
  background-color: ${theme.color.darkBlue};
`

const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid white;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const White = styled(Link)`
  color: white;
`

const Appbar: FC<Props> = () => {
  
  const { t } = useTranslation('appbar')
  const { userStore: { isAuth, user }} = useStore()
  
  return (
    <AppbarWrap justify='start'>
      <White to={Path.Home}>Logo</White>
      <Space grow />
      <SLink to={Path.Plan}>{t`plan`}</SLink>
      <SLink to={Path.Help}>{t`help`}</SLink>
      {isAuth
        ? <SLink to={'/profile'}><Avatar>{user?.name.charAt(0).toUpperCase()}</Avatar></SLink>
        : <SLink to={Path.Auth}>{t`signIn`}</SLink>}
    </AppbarWrap>
  )
}

export default observer(Appbar)
