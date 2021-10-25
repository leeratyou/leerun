import { ID } from 'types/index'

export interface INote {
  id: ID,
  categoryId: ID,
  content: string,
  dateCreated: string,
  groupPlanId: ID,
}
