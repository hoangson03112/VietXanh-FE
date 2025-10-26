import React from 'react'
import RegisterView from '@/src/pages/Register'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Register',
  description: 'This is the register page',
}

function RegisterPage() {
  return (
    <RegisterView />
  )
}

export default RegisterPage