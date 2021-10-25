import React, { FC } from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router'

import { Path } from 'pages/Routes'

interface Props {}

const Home: FC<Props> = () => {
  return (
    <Switch>
      Home
      {/*<Route path={Path.Projects} component={Projects} />*/}
      {/*<Route path={Path.Profile} component={Profile} />*/}
      {/*<Route path={Path.Project} component={Project} />*/}
      {/*<Redirect to={Path.Projects} />*/}
    </Switch>
  )
}

export default Home
