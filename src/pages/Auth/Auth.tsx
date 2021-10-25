import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Switch, Route, Redirect } from 'react-router'

import { Path } from 'pages/Routes'
import Login from './Login'
import { useStore } from 'store'

interface Props {

}

const Auth: FC<Props> = () => {
  const { userStore: { isAuth } } = useStore()
  
  if (isAuth) return <Redirect to={Path.Home} />
  
  return (
    <Switch>
      <Route path={Path.Login} component={Login} />
      <Redirect to={Path.Login} />
    </Switch>
  )
}

export default observer(Auth)
