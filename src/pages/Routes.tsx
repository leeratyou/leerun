import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Switch, Route, Redirect, RouteProps } from 'react-router'

import { useStore } from 'store'

import Home from 'pages/Home'
import Auth from 'pages/Auth'
import Help from 'pages/Help'

interface Props {

}

export const Path = {
  Home: '/',
  Help: '/help',
  Auth: '/auth',
  Login: '/auth/login',
  Plan: '/plan'
} as const

const ProtectedRoute: FC<RouteProps> = observer(({ ...props }) => {
  const { userStore: { isAuth } } = useStore()
  return isAuth
    ? <Route {...props} />
    : <Redirect to={Path.Login} />
})

const Routes: FC<Props> = () => {
  return (
    <Switch>
      <Route path={Path.Auth} component={Auth} />
      <Route path={Path.Help} component={Help} />
      <ProtectedRoute path={Path.Home} component={Home} />
      <Redirect to={Path.Home} />
    </Switch>
  )
}

export default Routes
