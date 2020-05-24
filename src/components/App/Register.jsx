import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../../services/auth'
import styles from '../../css/contact.module.css'
import Title from '../Title'

const Registor = () => {
  const [state1, setState1] = useState({
    username: ``,
    email: ``,
    password: ``,
    password2: ``,
  })

  const handleUpdate = (event) => {
    const { name, value } = event.target
    setState1((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (username === '' || email === '' || password === '') {
      console.log('missing required fields')
      return
    }

    if (state1.password !== state1.password2) {
      console.log('password and password2 not the same.')
      return
    }

    handleLogin(state1)
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <section className={styles.Contact}>
      <Title title="registor" subtitle="" />

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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleUpdate}
              className={styles.formControl}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
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

          <div>
            <label htmlFor="password2">Confirmed Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              onChange={handleUpdate}
              className={styles.formControl}
            />
          </div>

          <input type="submit" value="Registion" className={styles.submit} />
        </form>
      </div>
    </section>
  )
}

export default Registor
