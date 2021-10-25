import axios, { AxiosError } from 'axios'
import { ID } from 'types'
import { User } from 'store/user'

interface Client {
  defaults: any
  get: (url: string) => Promise<any>
  post: (url: string, data: any) => Promise<any>
}

interface ApiOptions {
  client: Client,
  endpoints: typeof endpoints,
}

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
  
  login = async ({ phone, password }: { phone: string, password: string }): Promise<Response<{ user: User, authToken: string }>> => {
    try {
      // some async stuff there
      return handleSuccess({ user: { id: 111, name: 'John Doe' }, authToken: 'sometoken' })
    } catch(e) {
      return handleError(e)
    }
  }
  
  register = async ({}) => {}
  
  code = async () => {}
  
  
}

const endpoints = {
  login: () => '/login',
  plan: () => '/plan',
}

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
})

export default new Api({ client, endpoints });
