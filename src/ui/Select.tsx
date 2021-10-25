import React, { FC } from 'react'
import styled from 'styled-components'
import { Select as MUISelect, FormControl, InputLabel, FormHelperText } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Clear from '@material-ui/icons/Clear'

import { theme } from 'ui/index'
import { Option } from 'types'
import { useTranslation } from 'react-i18next'

const Error = styled(FormHelperText)`
  margin: 3px 14px 0 !important;
`

const StyledFormControl = styled(FormControl)<{ width?: number }>`
  background-color: ${theme.color.background};
  border-radius: 8px;
  ${p => p.width && `min-width: ${p.width}rem;`};
  border: none;
  .MuiOutlinedInput-input {
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    //height: 1rem;
  }
  :after, :before {
    display: none;
  }
  .MuiInputLabel-outlined {
    transform: translate(10px, 11px) scale(1);
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.75);
  }
  fieldset {
    border: none;
  }
`

interface Props {
  options: Option[]
  onChange: (value: any) => void
  label?: string | number | any
  clearable?: boolean
  error?: boolean
  helperText?: string
  onClear?: () => void
  className?: any
  width?: number
}

const Select: FC<Props> = ({ options, className, width, label, error, helperText, onClear, clearable, ...rest }) => {
  const { t } = useTranslation('app')
  return (
    <StyledFormControl className={className} width={width}>
      <InputLabel variant='outlined'>{label}</InputLabel>
      <MUISelect variant='outlined' label={label} error={error} IconComponent={KeyboardArrowDownIcon} {...rest}>
        {clearable && <MenuItem value=''>{t`clear`}  <Clear /></MenuItem>}
        {(options as Option[]).map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
      </MUISelect>
      {helperText && <Error error={error}>{helperText}</Error>}
    </StyledFormControl>
  )
}

export default Select
