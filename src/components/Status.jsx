import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import styles from "./status.module.css"
export const Status = () => {
    const {auth,isAuth,token}=React.useContext(AuthContext)
  return (
    <div className={styles.container}>
      STATUS:{isAuth() ? `Logged in with token...${token} `:" Not logged in"}

    </div>
  )
}
