import plansStore from 'store/plans'
import { plans } from 'fixtures/plans'

describe('PlansStore', () => {
  test('Test correct length of plans fetched', () => {
    const store = plansStore
    store.fetchPlans()
    expect(store._plans.length).toBe(plans.length)
  })
})
