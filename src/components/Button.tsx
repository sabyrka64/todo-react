import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type']

type ButtonProps = {
  className?: string
  type: ButtonType
  children: string
}

export const Button = ({ className, type, children }: ButtonProps) => {
  return (
    <button
      className={clsx('button', className)}
      type={type}
    >
      {children}
    </button>
  )
}
