import React from 'react'
import { Button } from './Button'
import { Status } from './Status'
import styles from "./navbar.module.css"
export const Navbar = () => {
  return (
    <div className={styles.container}>
        <Button/>
        <Status/>
    </div>
  )
}
