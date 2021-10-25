import axios, { AxiosError } from 'axios'
import { ID } from 'types'

interface Client {
  defaults: any
  get: (url: string) => Promise<any>
  post: (url: string, data: any) => Promise<any>
}

interface ApiOptions {
  client: Client,
  endpoints: typeof endpoints,
}

//TODO here can be strong typings Response<T> { data: T }
export interface Response<T = any> {
  success: boolean
  data: T
}

function handleSuccess(data: any): Response {
  return {
    success: true,
    data: data
  }
}

function handleError(error: any): Response {
  return {
    success: false,
    data: (error as AxiosError)?.response?.data
  }
}

class Api {
  
  client
  
  endpoints
  
  constructor({ client, endpoints }: ApiOptions) {
    this.client = client
    this.endpoints = endpoints
  }
  
  setAuthToken = (token: string | null) => {
    this.client.defaults.headers.common['X-Authentication-Token'] = token;
  }
  
  // AUTH
  
  login = async ({ phone, password, locale }: { phone: string, password: string, locale: string }) => {
    try {
      const response = await this.client.post(this.endpoints.login(), { session: { phone, password, lang: locale, platform: 'web' }})
      return handleSuccess({ user: response.data.included[0], authToken: response.data.data.attributes.token })
    } catch(e) {
      return handleError(e)
    }
  }
  
  register = async ({}) => {}
  
  code = async () => {}
  
  // PROJECTS
  
  getProjects = async <T>(): Promise<Response<T>> => {
    try {
      const response = await this.client.get(this.endpoints.projects())
      return handleSuccess(response.data.data)
    } catch(e) {
      return handleError(e)
    }
  }
  
  getStages = async <T>(projectId: ID): Promise<Response<T>> => {
    try {
      const response = await this.client.get(this.endpoints.stages(projectId))
      return handleSuccess(response.data.data)
    } catch(e) {
      return handleError(e)
    }
  }
  
  getTasks = async <T>(stageId: ID): Promise<Response<T>> => {
    try {
      const response = await this.client.get(this.endpoints.tasks(stageId))
      return handleSuccess(response.data.data)
    } catch(e) {
      return handleError(e)
    }
  }
  
  getExpensesForProject = async <T>(projectId: ID): Promise<Response<T>>  => {
    try {
      const response = await this.client.get(this.endpoints.projectExpenses(projectId))
      return handleSuccess(response.data.data)
    } catch(e) {
      return handleError(e)
    }
  }
  
  getExpensesForTask = async <T>(taskId: ID): Promise<Response<T>>  => {
    try {
      const response = await this.client.get(this.endpoints.workExpenses(taskId))
      return handleSuccess(response.data.data)
    } catch(e) {
      return handleError(e)
    }
  }
  
}

const endpoints = {
  login: () => '/sessions',
  projects: () => '/projects',
  stages: (projectId: ID) => `/projects/${projectId}/stages`,
  tasks: (stageId: ID) => `/stages/${stageId}/works`,
  projectExpenses: (projectId: ID) => `/projects/${projectId}/expenses`,
  workExpenses: (workId: ID) => `/works/${workId}/expenses`,
}

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  // baseURL: '/api/v1'
})

export default new Api({ client, endpoints });
