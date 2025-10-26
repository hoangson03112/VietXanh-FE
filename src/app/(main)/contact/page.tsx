import React from 'react'
import ContactView from '@/src/pages/Contact'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'This is the contact page',
}

function ContactPage() {
  return (
    <ContactView />
  )
}

export default ContactPage