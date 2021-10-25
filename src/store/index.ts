import { createContext, useContext } from 'react'

import userStore from './user'
import modalsStore from './modals'
import snackbarStore from './snackbar'


const stores = {
  userStore,
  modalsStore,
  snackbarStore,
}

const cardsContext = createContext(stores)

export function useStore(storeOrStores?: keyof typeof stores | (keyof typeof stores)[]) {
  const stores = useContext(cardsContext)
  // const value = !storeOrStores
  //   ? stores
  //   : Array.isArray(storeOrStores)
  //     ?
  return stores
}
