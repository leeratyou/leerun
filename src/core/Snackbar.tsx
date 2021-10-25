import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import MUISnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useStore } from 'store'
import { useTranslation } from 'react-i18next'

interface Props {

}

const Snackbar: FC<Props> = () => {
  const { t } = useTranslation('error')
  const { snackbarStore: { isOpen, setClose, message, type } } = useStore()
  
  return (
    <MUISnackbar open={isOpen} onClose={setClose} autoHideDuration={6000}>
      <MuiAlert onClose={setClose} severity={type}>{t(message)}</MuiAlert>
    </MUISnackbar>
  )
}

export default observer(Snackbar)
