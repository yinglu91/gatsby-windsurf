import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../../services/auth'
import styles from '../../css/contact.module.css'
import Title from '../Title'

const Login = () => {
  const [state1, setState1] = useState({
    email: ``,
    password: ``,
  })

  const handleUpdate = (event) => {
    const { name, value } = event.target
    setState1((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(state1)
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <section className={styles.Contact}>
      <Title title="login" subtitle="in" />

      <div className={styles.center}>
        <form
          method="post"
          onSubmit={(event) => {
            handleSubmit(event)
            navigate(`/app/profile`)
          }}
          className={styles.form}
        >
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleUpdate}
              className={styles.formControl}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleUpdate}
              className={styles.formControl}
            />
          </div>

          <input type="submit" value="Log In" className={styles.submit} />
        </form>
      </div>
    </section>
  )
}

export default Login
