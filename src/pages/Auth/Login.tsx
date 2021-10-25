import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { Button } from '@material-ui/core'

import { Page } from 'ui'
import { useStore }from 'store'

import { Center, Space, Input, Paper, Text } from 'ui'
import { inputsHasError, useInput } from 'utils/hooks'
import { isNotEmpty, withError, isContainDigitsAndLetters, isLengthGreater } from 'utils/validation'

interface Props {

}

const Wrap = styled(Paper)`
  min-width: 25vw;
  text-align:center;
`

const ine = withError(isNotEmpty, 'input_not_empty')
const pass = withError(isContainDigitsAndLetters, 'pass_must')
const len = withError(isLengthGreater(7), 'length_must')

const Login: FC<Props> = () => {
  
  const { t, i18n } = useTranslation('auth')
  const { userStore: { login }} = useStore()
  
  const phone = useInput({
    label: 'phone_label',
    placeholder: 'phone_placeholder',
    translation: t,
    validation: [ ine ]
  })
  
  const password = useInput({
    label: 'password_label',
    placeholder: 'password_placeholder',
    type: 'password',
    translation: t,
    validation: [ ine ]
  })
  
  const tryLogin = () => {
    if (!inputsHasError(phone, password)) {
      login(phone.value, password.value, i18n.language)
    }
  }
  
  return (
    <Page>
      <Center>
        <Space height={2} />
        <Wrap>
          <span>Log in</span>
          <Space />
          <Input {...phone} fullWidth />
          <Space />
          <Input {...password} fullWidth />
          <Space />
          <Button onClick={tryLogin} variant='contained'>Log in</Button>
        </Wrap>
      </Center>
    </Page>
  )
}

export default observer(Login)
