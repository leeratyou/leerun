import { observable, makeAutoObservable } from 'mobx'

export const SnackbarType = {
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
  Success: 'success'
} as const
export type ISnackbarType = typeof SnackbarType[keyof typeof SnackbarType]

class SnackbarStore {
  
  constructor() {
    makeAutoObservable(this)
  }
  
  isOpen = false
  
  message = ''
  
  type: ISnackbarType = SnackbarType.Info
  
  duration = 6000
  
  setOpen = ({ type = SnackbarType.Info, message, duration }: { type?: ISnackbarType, message?: string, duration?: number }) => {
    if (type) this.type = type
    if (message) this.message = message
    if (duration) this.duration = duration
    this.isOpen = true
  }
  
  setClose = () => {
    this.isOpen = false
    this.type = 'info'
    this.message = ''
    this.duration = 6000
  }
}

const snackbarStore = new SnackbarStore()
export default snackbarStore
