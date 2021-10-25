import { makeAutoObservable, reaction } from 'mobx'

import { IPlan } from 'types/IPlan'

import { plans } from 'fixtures/plans'

import categoriesStore from './categories'
import { ID } from 'types'

class PlansStore {
  
  constructor() {
    makeAutoObservable(this)
    
    reaction(
      () => this.current,
      plan => {
        if ('id' in plan) categoriesStore.fetchCategories(plan.id)
      }
    )
  }
  
  _plans: IPlan[] = []
  
  currentPlanId: ID | null = null
  
  get current(): IPlan {
    // defaults set to '{}' for object destructuring in components
    return this._plans.find(plan => plan.id === this.currentPlanId) || ({} as IPlan)
  }
  
  fetchPlans = async () => {
    this._plans = plans
    this.currentPlanId = plans[0].id
  }
  
}

const plansStore = new PlansStore()
export default plansStore
