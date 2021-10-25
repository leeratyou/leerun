import React, { FC } from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router'

import { Path } from 'pages/Routes'
import Plan from './Plan'

interface Props {}

const Home: FC<Props> = () => {
  return (
    <Switch>
      <Route path={Path.Plan} component={Plan} />
      <Redirect to={Path.Plan} />
    </Switch>
  )
}

export default Home
