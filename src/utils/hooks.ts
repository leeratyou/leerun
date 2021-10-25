import { useState, useEffect } from 'react'
import { findInvalid, hasError } from 'utils/validation'
import { Dict } from 'types'
import { useHistory, useLocation, useParams } from 'react-router'

export interface UseInputProps<T> {
  value?: T
  label?: string | any
  onChange?: (value: any) => void
  onFocus?: () => void
  type?: string
  validation?: any
  errorText?: string
  placeholder?: string | number | any
  helperText?: string
  icon?: string
  options?: any[]
  translation?: (value: any) => any
  format?: (value: any) => any
}

export function useInput<T = string>(props: (UseInputProps<T> & Dict) = {}) {
  let {
    value: initValue = '',
    label,
    onChange,
    onFocus,
    type = 'text',
    validation = () => true,
    errorText,
    placeholder = '',
    helperText,
    icon,
    options,
    translation = input => input,
    format = input => input,
    ...rest
  } = props
  const [ error, setError ] = useState(translation(errorText))
  const [ input, setInput ] = useState<T | string>(initValue)
  
  useEffect(() => {
    setInput(initValue);
  }, [ initValue ])
  
  const _validate = (value: any) => {
    const validationArray = Array.isArray(validation) ? validation : [validation]
    const error = translation(hasError(value, validationArray, true))
    setError(error)
    return error
  }
  
  const onClear = () => setInput('')
  
  if (typeof onFocus !== 'function') onFocus = () => setError('')
  
  const handleChange = (eventOrValue: any) => {
    const rawValue = eventOrValue?.target ? eventOrValue.target?.value : eventOrValue
    const value = format(rawValue)
    if (onChange) onChange(value)
    setInput(value)
  }
  
  return {
    value: input as T,
    type: type,
    label: translation(label),
    placeholder: translation(placeholder),
    icon: icon,
    error: !!error,
    helperText: translation(error) || translation(helperText),
    onChange: handleChange,
    onFocus: onFocus,
    onClear: onClear,
    options,
    validate: () => _validate(input),
    ...rest
  }
}

export const inputsHasError = (...inputs: any[]) => {
  const i = inputs.map((input: any) => input.validate())
  return i.findIndex((input: any) => input) !== -1
}

export function useNavigate() {
  const h = useHistory()
  const l = useLocation()
  // const p = useParams()
  // console.log('--- hooks.ts -> useNavigate -> l', p)
  return {
    push: (path: string) => h.push(path),
    replace: (path: string) => h.replace(path),
    add: (path: string) => h.push(`${l.pathname}${path}`)
  }
}
