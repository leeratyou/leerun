import { makeAutoObservable, reaction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import localforage from 'localforage'

import Api from 'services/api'
import snackbarStore, { SnackbarType } from './snackbar'

import plansStore from './plans'

export interface User {
  id: string
  name: string
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
    
    reaction(
      () => this.isAuth,
      isAuth => isAuth && plansStore.fetchPlans(),
      { fireImmediately: true }
    )
  }
  
  user: User | null = null
  
  authToken: string | null = null
  
  get isAuth() {
    return true
    // return !!this.authToken
  }
  
  get userId() {
    if (!this.isAuth) return null
    return this.user!.id
  }
  
  logout = () => {
    this.user = null
    this.authToken = null
  }
  
  login = async (phone: string, password: string) => {
    const data = { phone, password }
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
