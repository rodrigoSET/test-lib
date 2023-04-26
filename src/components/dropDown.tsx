import React from 'react'

export interface animationStyle {
  animation: 'fadeIn' | 'fadeOut' | 'none'
  animationDuration: string
  animationFillMode: string
}

export type DropDownProps = {
  title: string
  options?: {
    animation?: animationStyle
  }
  children?: React.ReactNode
}

export const DropDown: React.FC<DropDownProps> = ({ title, children }) => {
  const childrenArray = React.Children.toArray(children)

  const allChildrenAreValid = childrenArray.every((child) => {
    return React.isValidElement(child)
  })

  if (!allChildrenAreValid) {
    throw new Error('DropDown só aceita elementos válidos')
  }

  const allChildren = childrenArray.map((child, key) => {
    return React.cloneElement(child as React.ReactElement, { key })
  })

  console.log(childrenArray)

  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">{allChildren}</div>
      </div>
    </>
  )
}
