import { createContext, useContext } from 'react'

import userStore from './user'
import modalsStore from './modals'
import snackbarStore from './snackbar'

import plansStore from './plans'
import categoriesStore from './categories'
import notesStore from './notes'

const stores = {
  userStore,
  modalsStore,
  snackbarStore,
  plansStore,
  categoriesStore,
  notesStore
}

const storesContext = createContext(stores)

export function useStore(storeOrStores?: keyof typeof stores | (keyof typeof stores)[]) {
  const stores = useContext(storesContext)
  // const value = !storeOrStores
  //   ? stores
  //   : Array.isArray(storeOrStores)
  //     ?
  return stores
}
