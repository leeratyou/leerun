const isValid = Symbol(1)
const isNotValid = Symbol(0)

export interface Validator {
  (...args: any[]): boolean
  errorText?: string
}

export interface ValidatorWithParams {
  (...params: any[]): Validator
}

function findInvalid(input: string, validators: Validator | Validator[]): Validator | undefined {
  const validatorsArray = Array.isArray(validators) ? validators : [validators]
  return validatorsArray.find(validate => !validate(input))
}

function hasError(input: string, validators: Validator | Validator[], needText?: boolean): boolean | string {
  const hasInvalid = findInvalid(input, validators)
  return needText
    ? hasInvalid
      ? hasInvalid.errorText || 'Input is not valid' : ''
    : !!hasInvalid
}

function withError(validator: Validator, errorText: string): Validator {
  const validatorWithErrorText = validator
  validatorWithErrorText.errorText = errorText
  return validatorWithErrorText
}

const isNotEmpty = (input: any) => {
  const inputString = input
  const regex = new RegExp(/.+/)
  if (!inputString) return false
  return regex.test(inputString)
}

const isContainDigitsAndLetters = (input: any) => {
  const inputString = input
  const regex1 = new RegExp(/\d+/)
  const regex2 = new RegExp(/\D+/)
  if (!inputString) return false
  return regex1.test(inputString) && regex2.test(inputString)
}

const isLength = (numberOrFn: number | Validator) => {
  if (typeof numberOrFn === 'function') return (input: any = '') => numberOrFn(String(input).length)
  return (input: any = '') => input && (Number(numberOrFn) === String(input).length)
}

// const isLengthGreater = (numberOrFn: number | Validator) => {
//   if (typeof numberOrFn === 'function') return (input: any = '') => numberOrFn(String(input).length)
//   console.log('--- index.ts -> isLengthGreater -> numberOrFn', numberOrFn)
//   return (input: any = '') => input && (Number(numberOrFn) > String(input).length)
// }

const isLengthGreater = (len: number) => (input: string) => {
  return input.length >= len
}

export {
  isValid,
  isNotValid,
  findInvalid,
  hasError,
  withError,
  isNotEmpty,
  isContainDigitsAndLetters,
  isLength,
  isLengthGreater
  // isValidIsraeliID,
  // isAlphabetic,
  // isBankValid,
  // isEqual, isGreater, isLess,
  // isLength,
  // isValidIsraeliPhone,
  // isMobilePhone,
  // isIsraeliMobilePhone,
  // isValidEmail,
  // isOnlyNumbers,
  // isOnlyNumbersAndLettes,
  // isContainLetter,
  // isContainNumber
}
