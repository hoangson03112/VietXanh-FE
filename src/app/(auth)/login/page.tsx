import React from 'react'
import LoginView from '@/src/pages/Login'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'This is the login page',
}

function LoginPage() {
  return (
    <LoginView />
  )
}

export default LoginPage