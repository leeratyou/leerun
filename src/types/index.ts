export type ID = string | number

export interface Dict extends Object {
  [key: string]: any
}

export type StringOrNumber = string | number

export type Option = { label: string, value: StringOrNumber }
