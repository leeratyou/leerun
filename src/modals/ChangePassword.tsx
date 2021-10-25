import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useStore } from 'store'
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import { Center, Space } from 'ui'

import Modal from './Modal'
import { useTranslation } from 'react-i18next'

interface Props {

}

const ChangePassword: FC<Props> = () => {
  
  const { modalsStore: { setOpen }} = useStore()
  const { t } = useTranslation('profile')
  
  return (
    <Modal name='changePassword' title={t`changePassword`}>
      ChangePassword
    </Modal>
  )
}

export default observer(ChangePassword)
