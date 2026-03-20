import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

type FieldProps = {
  className?: string
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const Field = ({ className, id, label, ...props }: FieldProps) => {
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
        {...props}
      />
    </div>
  )
}
