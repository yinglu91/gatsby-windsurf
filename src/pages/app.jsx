import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import Profile from '../components/App/Profile'
import Details from '../components/App/Details'
import Login from '../components/App/Login'
import Register from '../components/App/Register'
import Default from '../components/App/Default'
import PrivateRoute from '../components/App/PrivateRoute'

// https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/details" component={Details} />

        <Login path="/login" />
        <Register path="/register" />

        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App
