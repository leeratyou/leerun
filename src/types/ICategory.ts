import { ID } from 'types/index'

export interface ICategory {
  id: ID,
  isArchived: boolean,
  name: string,
  parentNoteCategoryId: ID | null,
  groupPlanId: ID,
}
