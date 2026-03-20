import clsx from 'clsx'
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

type FieldProps = {
  className?: string
  id: string
  label: string
  type?: HTMLInputTypeAttribute
  value?: string
  onInput?: InputHTMLAttributes<HTMLInputElement>['onInput']
}

export const Field = ({ className, id, label, type, value, onInput }: FieldProps) => {
  return (
    <div className={clsx('field', className)}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
      />
    </div>
  )
}
