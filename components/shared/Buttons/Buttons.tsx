import React from 'react'

import classes from './Buttons.module.scss'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}
export const Button = ({
  children,
  className,
  ...otherProps
}: IButtonProps) => {
  return (
    <button
      className={`${classes.button} ${className} to-center`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export interface IButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}
export const ButtonSecondary = ({
  children,
  className,
  ...otherProps
}: IButtonProps) => {
  return (
    <button
      className={`${classes['button-secondary']} ${className} to-center`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export interface ILinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}
export const LinkButton = ({
  children,
  className,
  ...otherProps
}: ILinkButtonProps) => {
  return (
    <button
      className={`${classes['link-button']} ${className} to-center`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export interface IArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLOrSVGElement> {
  className?: string
  color?: string
  bgColor?: string
  orientation?: 'left' | 'right'
}
export const ArrowButton = ({
  color,
  bgColor,
  className,
  orientation = 'right',
  onClick
}: IArrowButtonProps) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${classes['arrow-button']} ${classes[orientation]} ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_2443_657)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.3398 23.6492L14.5819 16.9996L21.3398 10.3499L20.3808 9.40633L12.6619 16.9996L20.3808 24.5928L21.3398 23.6492Z"
          fill={color ?? '#545454'}
          stroke={color ?? '#545454'}
          strokeWidth="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.70509 34H28.2949C29.8078 33.9994 31.2586 33.3981 32.3283 32.3283C33.3981 31.2586 33.9994 29.8078 34 28.2949V5.70509C33.9994 4.19219 33.3981 2.74143 32.3283 1.67166C31.2586 0.601878 29.8078 0.000611497 28.2949 5.96046e-07H5.70509C4.19219 0.000611497 2.74143 0.601878 1.67166 1.67166C0.601878 2.74143 0.000611497 4.19219 5.96046e-07 5.70509V28.2949C0.000611497 29.8078 0.601878 31.2586 1.67166 32.3283C2.74143 33.3981 4.19219 33.9994 5.70509 34ZM1.72881 5.70509C1.72942 4.6507 2.14855 3.63967 2.89411 2.89411C3.63967 2.14855 4.6507 1.72942 5.70509 1.72881H28.2949C29.3493 1.72942 30.3603 2.14855 31.1059 2.89411C31.8515 3.63967 32.2706 4.6507 32.2712 5.70509V28.2949C32.2706 29.3493 31.8515 30.3603 31.1059 31.1059C30.3603 31.8515 29.3493 32.2706 28.2949 32.2712H5.70509C4.6507 32.2706 3.63967 31.8515 2.89411 31.1059C2.14855 30.3603 1.72942 29.3493 1.72881 28.2949V5.70509Z"
          fill={bgColor ?? '#F3F3F3'}
        />
      </g>
      <defs>
        <clipPath id="clip0_2443_657">
          <rect
            width="34"
            height="34"
            fill="white"
            transform="matrix(-1 0 0 -1 34 34)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
