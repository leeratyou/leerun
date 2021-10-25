import { makeAutoObservable } from 'mobx'

import { ICategory } from 'types/ICategory'
import { ID } from 'types'

import { categories } from 'fixtures/categories'

function byAlphabetical(a: ICategory, b: ICategory) {
  return a.name.localeCompare(b.name)
}

class CategoriesStore {
  
  constructor() {
    makeAutoObservable(this)
  }
  
  _categories: ICategory[] = []
  
  getCategories = (parentNoteCategoryId: ID | null) => {
    return this._categories
      .filter(category => category.parentNoteCategoryId === parentNoteCategoryId && !category.isArchived)
      .sort(byAlphabetical)
  }
  
  // mock ID here for now
  fetchCategories = async (id: ID) => this._categories = categories
  
}

const categoriesStore = new CategoriesStore()
export default categoriesStore
