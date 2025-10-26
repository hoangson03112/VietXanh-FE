import React from 'react'
import AboutUsView from '@/src/pages/AboutUs';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Về chúng tôi',
  description: 'Trang về chúng tôi của VietXanh',
}

function AboutUsPage() {
  return (
    <AboutUsView />
  )
}

export default AboutUsPage