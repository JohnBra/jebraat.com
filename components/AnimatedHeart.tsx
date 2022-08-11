import React, { useState } from 'react'
import classNames from 'classnames'

type Props = {
  active: boolean
  className?: string
}

export default function AnimatedHeart({ active, className }: Props) {
  return (
    <div
      className={classNames(
        'animated-heart',
        active && 'animated-heart-active',
        className
      )}
    />
  )
}