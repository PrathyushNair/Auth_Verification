import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import styles from "./button.module.css"
export const Button = () => {
    const {auth,isAuth,toggleAuth}=React.useContext(AuthContext)
  return (
    <div className={styles.container} >
        <button className={styles.btn} onClick={toggleAuth}>{isAuth() ?<span>Logout</span>:<span>Login</span>}</button>
    </div>
  )
}
