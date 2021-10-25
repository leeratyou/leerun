import { makeAutoObservable, reaction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import localforage from 'localforage'

import { initializeApp } from 'firebase/app'

import Api from 'services/api'
import snackbarStore, { SnackbarType } from './snackbar'

export interface User {
  id: string
  attributes: {
    name: string
    email: string
    phone: string
    projectsCount: number
  }
}

class UserStore {
  
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'UserStore',
      properties: [ 'user', 'authToken' ],
      storage: localforage
    })
    
    reaction(
      () => this.authToken,
      token => Api.setAuthToken(token),
      { fireImmediately: true }
    )
  }
  
  user: User | null = null
  
  authToken = null
  
  get isAuth() {
    return !!this.authToken
  }
  
  get isAdmin() {
    return false
  }
  
  get userId() {
    if (!this.isAuth) return null
    return this.user!.id
  }
  
  logout = () => {
    this.user = null
    this.authToken = null
  }
  
  login = async (phone: string, password: string, locale: string) => {
    const data = { phone, password, locale }
    const response = await Api.login(data)
    if (response.success) {
      this.authToken = response.data.authToken
      this.user = response.data.user
    } else {
      snackbarStore.setOpen({ type: SnackbarType.Error, message: 'incorrect_login' })
    }
  }
  
}

const userStore = new UserStore()
export default userStore
