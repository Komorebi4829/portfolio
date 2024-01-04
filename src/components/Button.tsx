import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import styles from './Button.module.css'

export default function Button({ children, onClick }) {
  return (
    <button className={clsx(styles['btn'])} onClick={onClick}>
      {children}
    </button>
  )
}
