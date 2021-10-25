import categoriesStore from 'store/categories'
import { categories } from 'fixtures/categories'

describe('Categories store', () => {
  test('Test correct lengths of categories', () => {
    const store = categoriesStore
    store.fetchCategories(0)
    expect(store.getCategories(null).length).toBe(categories.filter(category => category.parentNoteCategoryId === null && !category.isArchived).length)
  })
})
