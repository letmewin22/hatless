import * as React from 'react'

interface IProps {
  text: string,
  color?: string
}

export const Button: React.FC<IProps> = ({text, color}) => {
  const colorClass = color ? `btn--${color}` : 'btn--primary'
  const classes = ['btn', colorClass]
  return (
    <button className={classes.join(' ')}>{text}</button>
  )
}
